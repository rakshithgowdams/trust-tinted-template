import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20),
  message: z.string().trim().min(10).max(1000),
});

const RECIPIENT = "rakesh@rsmedicalagency.com";
const FROM = "RS Medical Enquiry <enquiries@rsmedicalagency.com>";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    if (!lovableKey || !resendKey) {
      throw new Error("Email service is not configured.");
    }

    const html = `
      <h2>New enquiry from RS Medical website</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    `;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({
        from: FROM,
        to: [RECIPIENT],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend send failed:", res.status, body);
      throw new Error("Failed to send enquiry. Please try again later.");
    }

    return { success: true };
  });
