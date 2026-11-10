import PageClient from "./PageClient";
import { getJobBySlug, getOtherJobs } from "@/lib/jobs";
import { generateBreadcrumbSchema, generateJobPostingSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  if (!job) {
    return {
      title: "Job Not Found",
      robots: { index: false, follow: false },
    };
  }
  const description =
    job.aboutJob && job.aboutJob.length > 157
      ? `${job.aboutJob.slice(0, 157)}...`
      : job.aboutJob || `${job.title} — apply for this role at Support Studio Technologies.`;
  return {
    title: job.title,
    description,
    alternates: { canonical: `/careers/${slug}/` },
    openGraph: {
      title: `${job.title} | Support Studio Technologies`,
      description,
      url: `/careers/${slug}/`,
      images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);
  const otherJobs = job ? await getOtherJobs(job.slug) : [];

  // A closed or unknown job keeps the friendly "Job Not Found" view (noindex via
  // generateMetadata) instead of the global 404, and emits no schema.
  let schemas = [];
  if (job) {
    const crumbs = buildBreadcrumbItems(`/careers/${slug}/`);
    crumbs[crumbs.length - 1].name = job.title;
    schemas = [generateBreadcrumbSchema(crumbs), generateJobPostingSchema(job)];
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageClient job={job} otherJobs={otherJobs} />
    </>
  );
}
