import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as Toaster } from "./sonner-DeNSN9-c.mjs";
import { s as supabase } from "./supabase-Cw3Pkn2f.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function formatDate(iso) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function DashboardPage() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selected, setSelected] = reactExports.useState(null);
  const [search, setSearch] = reactExports.useState("");
  const load = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const {
        data,
        error
      } = await supabase.from("enquiries").select("*").order("created_at", {
        ascending: false
      });
      if (error) throw error;
      setEnquiries(data ?? []);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data
    }) => {
      if (!data.session) {
        navigate({
          to: "/admin-auth"
        });
        return;
      }
      load();
    });
    const {
      data: listener
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") navigate({
        to: "/admin-auth"
      });
    });
    return () => listener.subscription.unsubscribe();
  }, [navigate, load]);
  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({
      to: "/admin-auth"
    });
  }
  const filtered = enquiries.filter((e) => {
    const q = search.toLowerCase();
    return e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q) || e.phone.includes(q);
  });
  const today = (/* @__PURE__ */ new Date()).toDateString();
  const todayCount = enquiries.filter((e) => new Date(e.created_at).toDateString() === today).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4", onClick: () => setSelected(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-gray-900", children: selected.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-0.5", children: formatDate(selected.created_at) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelected(null), className: "text-gray-400 hover:text-gray-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "size-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-gray-400 shrink-0", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${selected.email}`, className: "text-[#1a3a5c] font-medium hover:underline break-all", children: selected.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-gray-400 shrink-0", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${selected.phone}`, className: "text-[#1a3a5c] font-medium hover:underline", children: selected.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-gray-400 shrink-0", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 whitespace-pre-wrap leading-relaxed", children: selected.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${selected.email}?subject=Re: Your enquiry&body=Dear ${encodeURIComponent(selected.name)},%0A%0A`, className: "flex-1 text-center rounded-xl bg-[#1a3a5c] text-white text-sm font-semibold py-2.5 hover:bg-[#0f2233] transition-colors", children: "Reply by Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${selected.phone}`, className: "flex-1 text-center rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 hover:bg-gray-50 transition-colors", children: "Call" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white border-b border-gray-200 sticky top-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-lg bg-[#1a3a5c] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", className: "size-4 text-white", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gray-900 text-sm", children: "RS Medical Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleLogout, className: "flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "size-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Sign out"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Enquiries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-0.5", children: "All contact form submissions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 font-medium uppercase tracking-wider", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gray-900 mt-1", children: enquiries.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 font-medium uppercase tracking-wider", children: "Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-[#1a3a5c] mt-1", children: todayCount })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 p-4 col-span-2 sm:col-span-1 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 font-medium uppercase tracking-wider", children: "Last entry" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-700 mt-1", children: enquiries[0] ? formatDate(enquiries[0].created_at) : "—" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: load, className: "size-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors", title: "Refresh", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "size-4 text-gray-500", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "23 4 23 10 17 10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.49 15a9 9 0 11-2.12-9.36L23 10", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 21l-4.35-4.35", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search by name, email or phone…", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl outline-none focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl border border-gray-200 overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-20 text-gray-400 text-sm", children: "Loading enquiries…" }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-gray-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "size-10 mb-3 opacity-40", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: search ? "No results found" : "No enquiries yet" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-100 bg-gray-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Message" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-50", children: filtered.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelected(e), className: "hover:bg-gray-50 cursor-pointer transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-gray-400 whitespace-nowrap text-xs", children: formatDate(e.created_at) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap", children: e.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-gray-500 whitespace-nowrap", children: e.email }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-gray-500 whitespace-nowrap", children: e.phone }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-gray-400 max-w-xs truncate", children: e.message })
            ] }, e.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y divide-gray-100", children: filtered.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelected(e), className: "px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900 text-sm", children: e.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 ml-2 shrink-0", children: formatDate(e.created_at) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
              e.email,
              " · ",
              e.phone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1 truncate", children: e.message })
          ] }, e.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-gray-300 mt-6", children: [
          "Showing ",
          filtered.length,
          " of ",
          enquiries.length,
          " enquiries"
        ] })
      ] })
    ] })
  ] });
}
export {
  DashboardPage as component
};
