import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Bounded from "@/components/common/bounded";
import BlogContent from "@/components/blog/blog-content";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { getBlogPost, blogPosts } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: "Post Not Found | London Auto Doctor",
    };
  }

  return {
    title: post.seoMetadata.metaTitle,
    description: post.seoMetadata.metaDescription,
    keywords: post.seoMetadata.keywords,
    openGraph: {
      title: post.seoMetadata.metaTitle,
      description: post.seoMetadata.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: ["London Auto Doctor"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoMetadata.metaTitle,
      description: post.seoMetadata.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD structured data for the blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `/images/blog/${post.slug}.jpg`, // Placeholder for future images
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    author: {
      "@type": "Organization",
      name: "London Auto Doctor",
      url: "https://londonautodoctor.com",
    },
    publisher: {
      "@type": "Organization", 
      name: "London Auto Doctor",
      logo: {
        "@type": "ImageObject",
        url: "https://londonautodoctor.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://londonautodoctor.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Blog Post Header */}
      {post.headerImage && (
        <div 
          className="blog-hero-bg py-12 md:py-16"
          style={{ backgroundImage: `url("${post.headerImage}")` }}
        >
          <Bounded>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-gray-200">
                <time dateTime={post.publishedDate} className="text-sm">
                  {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
                <span className="text-sm">•</span>
                <span className="text-sm">{post.readTime} min read</span>
                <span className="text-sm">•</span>
                <span className="text-sm capitalize">{post.category.replace('-', ' ')}</span>
              </div>
            </div>
          </Bounded>
        </div>
      )}
      
      {/* Blog Content */}
      <Bounded>
        <div className="py-16">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <BlogContent post={post} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar currentPost={post} />
              </div>
            </div>
        </div>
      </Bounded>
    </>
  );
}