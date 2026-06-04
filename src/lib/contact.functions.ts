const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEnquiry(data: EnquiryPayload): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/send-enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error ?? "Failed to send enquiry. Please try again later.");
  }
}
