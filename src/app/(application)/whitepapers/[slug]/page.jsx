import { notFound } from "next/navigation";
import InsightDetail from "@/components/Insights/InsightDetail";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";
import { getWhitepaperBySlug } from "@/lib/whitepapers";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const whitepaper = await getWhitepaperBySlug(slug);

    if (!whitepaper) {
        return { title: "Whitepaper Not Found", robots: { index: false, follow: false } };
    }

    return {
        title: whitepaper.title,
        description: whitepaper.summary,
        alternates: {
            canonical: `/whitepapers/${slug}/`,
        },
        openGraph: {
            type: "article",
            title: whitepaper.title,
            description: whitepaper.summary,
            url: `/whitepapers/${slug}/`,
            authors: whitepaper.author ? [whitepaper.author] : undefined,
            images: whitepaper.cover_image
                ? [{ url: whitepaper.cover_image, width: 1200, height: 630, alt: whitepaper.title }]
                : [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
        },
    };
}

export default async function WhitepaperDetailPage({ params }) {
    const { slug } = await params;
    const whitepaper = await getWhitepaperBySlug(slug);
    if (!whitepaper) notFound();

    const url = `/whitepapers/${slug}/`;
    const crumbs = buildBreadcrumbItems(url);
    crumbs[crumbs.length - 1].name = whitepaper.title;
    const schemas = [
        generateBreadcrumbSchema(crumbs),
        generateArticleSchema({
            type: "Report",
            title: whitepaper.title,
            description: whitepaper.summary,
            url,
            image: whitepaper.cover_image,
            author: whitepaper.author,
            datePublished: whitepaper.publish_date,
        }),
    ];

    return (
        <>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
        <InsightDetail item={whitepaper} basePath="/whitepapers" backLabel="Back to Whitepapers" />
        </>
    );
}
