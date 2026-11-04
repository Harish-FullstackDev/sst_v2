// Canonical site origin used by metadata, sitemap, robots and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL once the production domain is live; until then
// Vercel's production URL is used, with localhost as the local fallback.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:5000")
).replace(/\/$/, "");
