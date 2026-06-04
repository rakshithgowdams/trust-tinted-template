import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/lib/supabase";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function DashboardPage() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [search, setSearch] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      setEnquiries(data ?? []);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate({ to: "/admin-auth" });
        return;
      }
      load();
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") navigate({ to: "/admin-auth" });
    });
    return () => listener.subscription.unsubscribe();
  }, [navigate, load]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/admin-auth" });
  }

  const filtered = enquiries.filter((e) => {
    const q = search.toLowerCase();
    return (
      e.name.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q) ||
      e.phone.includes(q)
    );
  });

  const today = new Date().toDateString();
  const todayCount = enquiries.filter(
    (e) => new Date(e.created_at).toDateString() === today,
  ).length;

  return (
    <>
      <Toaster />

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{selected.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{formatDate(selected.created_at)}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <span className="w-16 text-gray-400 shrink-0">Email</span>
                <a href={`mailto:${selected.email}`} className="text-[#1a3a5c] font-medium hover:underline break-all">
                  {selected.email}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="w-16 text-gray-400 shrink-0">Phone</span>
                <a href={`tel:${selected.phone}`} className="text-[#1a3a5c] font-medium hover:underline">
                  {selected.phone}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="w-16 text-gray-400 shrink-0">Message</span>
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{selected.message}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <a
                href={`mailto:${selected.email}?subject=Re: Your enquiry&body=Dear ${encodeURIComponent(selected.name)},%0A%0A`}
                className="flex-1 text-center rounded-xl bg-[#1a3a5c] text-white text-sm font-semibold py-2.5 hover:bg-[#0f2233] transition-colors"
              >
                Reply by Email
              </a>
              <a
                href={`tel:${selected.phone}`}
                className="flex-1 text-center rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 hover:bg-gray-50 transition-colors"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="size-4 text-white" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-sm">RS Medical Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Sign out
            </button>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
            <p className="text-sm text-gray-500 mt-0.5">All contact form submissions</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{enquiries.length}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Today</p>
              <p className="text-3xl font-bold text-[#1a3a5c] mt-1">{todayCount}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4 col-span-2 sm:col-span-1 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Last entry</p>
                <p className="text-sm font-semibold text-gray-700 mt-1">
                  {enquiries[0] ? formatDate(enquiries[0].created_at) : "—"}
                </p>
              </div>
              <button
                onClick={load}
                className="size-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                title="Refresh"
              >
                <svg className="size-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, email or phone…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10"
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-20 text-gray-400 text-sm">
                Loading enquiries…
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <svg className="size-10 mb-3 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-medium">{search ? "No results found" : "No enquiries yet"}</p>
              </div>
            ) : (
              <>
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filtered.map((e) => (
                        <tr
                          key={e.id}
                          onClick={() => setSelected(e)}
                          className="hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap text-xs">{formatDate(e.created_at)}</td>
                          <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">{e.name}</td>
                          <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">{e.email}</td>
                          <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">{e.phone}</td>
                          <td className="px-5 py-3.5 text-gray-400 max-w-xs truncate">{e.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden divide-y divide-gray-100">
                  {filtered.map((e) => (
                    <div
                      key={e.id}
                      onClick={() => setSelected(e)}
                      className="px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="font-semibold text-gray-900 text-sm">{e.name}</p>
                        <p className="text-xs text-gray-400 ml-2 shrink-0">{formatDate(e.created_at)}</p>
                      </div>
                      <p className="text-xs text-gray-500">{e.email} · {e.phone}</p>
                      <p className="text-xs text-gray-400 mt-1 truncate">{e.message}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <p className="text-center text-xs text-gray-300 mt-6">
            Showing {filtered.length} of {enquiries.length} enquiries
          </p>
        </main>
      </div>
    </>
  );
}

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});
