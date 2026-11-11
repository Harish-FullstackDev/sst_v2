import { supabase } from "@/lib/supabaseClient";
import { staticCaseStudiesData, getStaticCaseStudyBySlug } from "@/data/caseStudiesData";

// Static entries come first; Supabase rows follow, minus any whose slug a static
// entry already uses. If Supabase is unreachable the static entries still show.
export async function getAllCaseStudies() {
    let rows = [];
    try {
        const { data, error } = await supabase
            .from("case_studies")
            .select("*")
            .order("publish_date", { ascending: false });
        if (error) throw error;
        rows = data || [];
    } catch (err) {
        console.error("Error fetching case studies:", err.message);
    }

    const staticSlugs = new Set(staticCaseStudiesData.map((c) => c.slug));
    const dbRows = rows
        .filter((row) => !staticSlugs.has(row.slug))
        .map((row) => ({ ...row, type: "Case Study" }));

    return [...staticCaseStudiesData, ...dbRows];
}

export async function getCaseStudyBySlug(slug) {
    const staticCase = getStaticCaseStudyBySlug(slug);
    if (staticCase) return staticCase;

    const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    return { ...data, type: "Case Study" };
}
