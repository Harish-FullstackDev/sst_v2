import { notFound } from "next/navigation";
import InsightDetail from "@/components/Insights/InsightDetail";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";
import { industryReportsData, getIndustryReportBySlug } from "@/data/industryReportsData";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const report = getIndustryReportBySlug(slug);

    if (!report) {
        return { title: "Industry Report Not Found", robots: { index: false, follow: false } };
    }

    return {
        title: report.title,
        description: report.summary,
        alternates: {
            canonical: `/industry-reports/${slug}/`,
        },
        openGraph: {
            type: "article",
            title: report.title,
            description: report.summary,
            url: `/industry-reports/${slug}/`,
            authors: report.author ? [report.author] : undefined,
            images: report.cover_image
                ? [{ url: report.cover_image, width: 1200, height: 630, alt: report.title }]
                : [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
        },
    };
}

export function generateStaticParams() {
    return industryReportsData.map((item) => ({ slug: item.slug }));
}

export default async function IndustryReportDetailPage({ params }) {
    const { slug } = await params;
    const report = getIndustryReportBySlug(slug);
    if (!report) notFound();

    const url = `/industry-reports/${slug}/`;
    const crumbs = buildBreadcrumbItems(url);
    crumbs[crumbs.length - 1].name = report.title;
    const schemas = [
        generateBreadcrumbSchema(crumbs),
        generateArticleSchema({
            type: "Report",
            title: report.title,
            description: report.summary,
            url,
            image: report.cover_image,
            author: report.author,
            datePublished: report.publish_date,
        }),
    ];

    return (
        <>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
        <InsightDetail item={report} basePath="/industry-reports" backLabel="Back to Industry Reports" />
        </>
    );
}
