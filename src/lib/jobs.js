// Careers job postings, read from the HRMS Supabase project's `jobs` table
// (managed by HR in the HRMS portal; schema in HrmsSST
// supabase/migrations/20261102000000_hiring.sql). RLS makes published jobs
// readable with the publishable key. Applications are taken by the HRMS
// portal itself: see hrmsApplyUrl().
import { hrmsSelect } from "@/lib/hrmsClient";

const PUBLISHED = "published";
const COMPANY = "Support Studio Technologies";

const HRMS_URL = (process.env.NEXT_PUBLIC_HRMS_URL || "").replace(/\/$/, "");

// Where "Apply" sends a candidate: the HRMS route that signs them in (or up)
// and starts the apply flow for this job.
export function hrmsApplyUrl(slug) {
    return `${HRMS_URL}/jobs/${encodeURIComponent(slug)}/apply`;
}

// Any other HRMS portal page, e.g. hrmsUrl("/saved-jobs").
export function hrmsUrl(path) {
    return `${HRMS_URL}${path}`;
}

function formatPostedAgo(dateString) {
    if (!dateString) return "";
    const posted = new Date(dateString);
    const days = Math.max(0, Math.floor((Date.now() - posted.getTime()) / (1000 * 60 * 60 * 24)));

    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 7) return `${days} days ago`;

    const weeks = Math.floor(days / 7);
    if (weeks === 1) return "1 week ago";
    if (weeks < 5) return `${weeks} weeks ago`;

    const months = Math.floor(days / 30);
    if (months <= 1) return "1 month ago";
    return `${months} months ago`;
}

function mapJob(row) {
    return {
        slug: row.slug,
        jobCode: row.job_code ?? null,
        title: row.title,
        company: COMPANY,
        department: row.department ?? "",
        location: row.location,
        modeOfWork: row.mode_of_work,
        typeOfWork: row.type_of_work,
        experienceLevel: row.experience_level,
        postedAgo: formatPostedAgo(row.posted_at),
        categories: row.categories || [],
        aboutJob: row.about_job,
        responsibilities: row.responsibilities || [],
        qualifications: row.qualifications || [],
        notes: row.notes || [],
        skills: row.skills || [],
        vacancies: row.vacancies ?? null,
        minExperienceYears: row.min_experience_years ?? null,
        closesOn: row.closes_on ?? null,
        applyUrl: hrmsApplyUrl(row.slug),
        // HRMS job page, where a signed-in candidate can save the job.
        hrmsJobUrl: hrmsUrl(`/jobs/${encodeURIComponent(row.slug)}`),
    };
}

export async function getAllJobs() {
    const rows = await hrmsSelect("jobs", { select: "*", status: `eq.${PUBLISHED}`, order: "posted_at.desc" });
    return rows.map(mapJob);
}

export async function getJobBySlug(slug) {
    const [row] = await hrmsSelect("jobs", { select: "*", status: `eq.${PUBLISHED}`, slug: `eq.${slug}`, limit: "1" });
    return row ? mapJob(row) : null;
}

export async function getOtherJobs(slug, limit = 3) {
    const rows = await hrmsSelect("jobs", {
        select: "*",
        status: `eq.${PUBLISHED}`,
        slug: `neq.${slug}`,
        order: "posted_at.desc",
        limit: String(limit),
    });
    return rows.map(mapJob);
}
