// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const preset = process.env.NITRO_PRESET ?? "cloudflare-module";
const isVercel = preset === "vercel" || preset === "vercel-edge";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset,
    // The Lovable wrapper defaults Nitro output to `dist/`, but the Vercel
    // preset needs to emit Build Output API v3 at `.vercel/output/` so Vercel
    // can serve the SSR function. Override the output dirs when targeting Vercel.
    ...(isVercel
      ? {
          output: {
            dir: ".vercel/output",
            serverDir: ".vercel/output/functions/__server.func",
            publicDir: ".vercel/output/static",
          },
        }
      : {}),
  },
});
