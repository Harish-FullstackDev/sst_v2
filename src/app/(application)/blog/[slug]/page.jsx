import { supabase } from "@/lib/supabaseClient";
import BlogPostClient from "./BlogPostClient";
import { getStaticBlogBySlug, staticBlogsData } from "@/data/blogsData";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { buildBreadcrumbItems } from "@/lib/breadcrumbs";

const stripHtml = (value) => (value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export async function generateMetadata({ params }) {
    const { slug } = await params;

    // 1. Check static blogs first
    const staticBlog = getStaticBlogBySlug(slug);
    if (staticBlog) {
        const firstSectionText = stripHtml(staticBlog.sections?.[0]?.content);
        const description = firstSectionText
            ? `${firstSectionText.slice(0, 157)}${firstSectionText.length > 157 ? "..." : ""}`
            : `Read "${staticBlog.title}" on the Support Studio Technologies blog.`;
        return {
            title: staticBlog.title,
            description,
            alternates: { canonical: `/blog/${slug}/` },
            openGraph: {
                type: "article",
                title: staticBlog.title,
                description,
                url: `/blog/${slug}/`,
                authors: staticBlog.author ? [staticBlog.author] : undefined,
                images: staticBlog.cover_image
                    ? [{ url: staticBlog.cover_image, width: 1200, height: 630, alt: staticBlog.title }]
                    : [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
            },
        };
    }

    // 2. Fall back to Supabase
    const { data: blog } = await supabase
        .from("blogs")
        .select("title, author, cover_image, sections")
        .eq("slug", slug)
        .single();

    if (!blog) {
        return { title: "Article Not Found", robots: { index: false, follow: false } };
    }

    const firstSectionText = stripHtml(blog.sections?.[0]?.content);
    const description = firstSectionText
        ? `${firstSectionText.slice(0, 157)}${firstSectionText.length > 157 ? "..." : ""}`
        : `Read "${blog.title}" on the Support Studio Technologies blog.`;

    return {
        title: blog.title,
        description,
        alternates: {
            canonical: `/blog/${slug}/`,
        },
        openGraph: {
            type: "article",
            title: blog.title,
            description,
            url: `/blog/${slug}/`,
            authors: blog.author ? [blog.author] : undefined,
            images: blog.cover_image
                ? [{ url: blog.cover_image, width: 1200, height: 630, alt: blog.title }]
                : [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Support Studio Technologies" }],
        },
    };
}

// Post data for the JSON-LD only; the page itself still renders client-side.
async function getPostForSchema(slug) {
    const staticBlog = getStaticBlogBySlug(slug);
    if (staticBlog) return staticBlog;
    const { data } = await supabase
        .from("blogs")
        .select("title, author, cover_image, publish_date, sections")
        .eq("slug", slug)
        .single();
    return data;
}

export default async function BlogPostDetailPage({ params }) {
    const { slug } = await params;
    const post = await getPostForSchema(slug);

    let schemas = [];
    if (post) {
        const url = `/blog/${slug}/`;
        const crumbs = buildBreadcrumbItems(url);
        crumbs[crumbs.length - 1].name = post.title;
        const text = stripHtml(post.sections?.[0]?.content);
        schemas = [
            generateBreadcrumbSchema(crumbs),
            generateArticleSchema({
                type: "BlogPosting",
                title: post.title,
                description: text ? text.slice(0, 160) : undefined,
                url,
                image: post.cover_image,
                author: post.author,
                datePublished: post.publish_date,
            }),
        ];
    }

    return (
        <>
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            ))}
            <BlogPostClient />
        </>
    );
}
