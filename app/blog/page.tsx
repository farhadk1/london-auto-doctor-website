import type { Metadata } from "next";
import Bounded from "@/components/common/bounded";
import BlogCard from "@/components/blog/blog-card";
import BlogSidebar from "@/components/blog/blog-sidebar";
import { blogPosts, getFeaturedPosts, getAllCategories } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Automotive Electrical Blog | London Auto Doctor - Expert Tips & Guides",
  description:
    "Expert automotive electrical guides, tips, and troubleshooting advice from London's professional mobile car electrician. Learn about battery care, diagnostics, and electrical repairs.",
  openGraph: {
    title: "Automotive Electrical Blog | London Auto Doctor - Expert Tips & Guides",
    description:
      "Expert automotive electrical guides, tips, and troubleshooting advice from London's professional mobile car electrician. Learn about battery care, diagnostics, and electrical repairs.",
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const allCategories = getAllCategories();
  
  // Sort all posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <>
    {/* Hero Section */}
    <div className="hero-bg-blog py-12 md:py-16">
      <Bounded>
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Automotive Electrical Blog
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert insights, practical tips, and professional advice from London's 
            trusted mobile car electrician. Stay informed about automotive electrical 
            systems, maintenance, and troubleshooting.
          </p>
        </div>
      </Bounded>
    </div>
    
    {/* Blog Content */}
    <Bounded>
      <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                <div className="grid gap-6">
                  {featuredPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} featured={true} />
                  ))}
                </div>
              </section>
            )}

            {/* Categories Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allCategories.map((category) => {
                  const categoryPosts = sortedPosts.filter(post => post.category === category.slug);
                  return (
                    <div
                      key={category.slug}
                      className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{categoryPosts.length} articles</span>
                        <span>View all →</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-6">All Articles</h2>
              <div className="grid gap-6">
                {sortedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
      </div>
    </Bounded>
    </>
  );
}