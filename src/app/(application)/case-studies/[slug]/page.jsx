import { notFound } from "next/navigation";
import InsightDetail from "@/components/Insights/InsightDetail";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";
import { getCaseStudyBySlug } from "@/lib/caseStudies";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudyBySlug(slug);

    if (!caseStudy) {
        return { title: "Case Study Not Found", robots: { index: false, follow: false } };
    }

    return {
        title: caseStudy.title,
        description: caseStudy.summary,
        alternates: {
            canonical: `/case-studies/${slug}/`,
        },
        openGraph: {
            type: "article",
            title: caseStudy.title,
            description: caseStudy.summary,
            url: `/case-studies/${slug}/`,
            authors: caseStudy.author ? [caseStudy.author] : undefined,
            images: caseStudy.cover_image
                ? [{ url: caseStudy.cover_image, width: 1200, height: 630, alt: caseStudy.title }]
                : [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
        },
    };
}

export default async function CaseStudyDetailPage({ params }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudyBySlug(slug);
    if (!caseStudy) notFound();

    const url = `/case-studies/${slug}/`;
    const crumbs = buildBreadcrumbItems(url);
    crumbs[crumbs.length - 1].name = caseStudy.title;
    const schemas = [
        generateBreadcrumbSchema(crumbs),
        generateArticleSchema({
            type: "Article",
            title: caseStudy.title,
            description: caseStudy.summary,
            url,
            image: caseStudy.cover_image,
            author: caseStudy.author,
            datePublished: caseStudy.publish_date,
        }),
    ];

    return (
        <>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
        <InsightDetail item={caseStudy} basePath="/case-studies" backLabel="Back to Case Studies" />
        </>
    );
}
