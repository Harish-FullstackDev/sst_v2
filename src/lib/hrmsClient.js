// Read-only access to the HRMS Supabase project, which owns job postings.
// Separate from supabaseClient.ts: the website's own project (blogs, leads,
// whitepapers, ...) stays on NEXT_PUBLIC_SUPABASE_URL. Published jobs are
// readable with the publishable key (RLS "jobs: read published").
//
// Plain fetch to PostgREST rather than supabase-js, whose client also opens a
// realtime socket that Node versions before 22 cannot create (same approach
// as the HRMS portal's own src/lib/jobs.js). Works in the browser and on the
// server.
const url = (process.env.NEXT_PUBLIC_HRMS_SUPABASE_URL || "").replace(/\/$/, "");
const key = process.env.NEXT_PUBLIC_HRMS_SUPABASE_PUBLISHABLE_KEY;

// GET /rest/v1/<table>?<params>. `params` are PostgREST query parameters,
// e.g. { select: "*", status: "eq.published", order: "posted_at.desc" }.
// Returns [] when the HRMS project is not configured.
export async function hrmsSelect(table, params = {}) {
    if (!url || !key) {
        console.warn("NEXT_PUBLIC_HRMS_SUPABASE_URL / NEXT_PUBLIC_HRMS_SUPABASE_PUBLISHABLE_KEY are not set; no jobs will load.");
        return [];
    }

    const response = await fetch(`${url}/rest/v1/${table}?${new URLSearchParams(params)}`, {
        headers: { apikey: key },
        // Server: re-read HRMS at most once a minute, so HR changes show up
        // quickly while pages and the sitemap stay statically renderable.
        // Ignored in the browser.
        next: { revalidate: 60 },
    });
    if (!response.ok) {
        throw new Error(`HRMS ${table} request failed: ${response.status} ${await response.text()}`);
    }
    return response.json();
}
