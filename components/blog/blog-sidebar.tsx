import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories, BlogPost } from "@/lib/blog-data";

interface BlogSidebarProps {
  currentPost?: BlogPost;
}

export default function BlogSidebar({ currentPost }: BlogSidebarProps) {
  // Get recent posts (excluding current post)
  const recentPosts = blogPosts
    .filter(post => post.slug !== currentPost?.slug)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  // Get popular categories (based on post count)
  const categoriesWithCount = blogCategories.map(category => ({
    ...category,
    postCount: blogPosts.filter(post => post.category === category.slug).length
  })).filter(category => category.postCount > 0);

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();

  return (
    <aside className="space-y-6">
      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
          <CardDescription>
            Latest automotive electrical insights
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.slug} className="space-y-2">
              <Link 
                href={`/blog/${post.slug}`}
                className="block text-sm font-medium hover:text-primary transition-colors line-clamp-2"
              >
                {post.title}
              </Link>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short'
                  })}
                </time>
                <span>{post.readTime} min</span>
              </div>
              {post !== recentPosts[recentPosts.length - 1] && (
                <hr className="border-border" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
          <CardDescription>
            Browse by topic
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categoriesWithCount.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="flex items-center justify-between p-2 rounded-md hover:bg-accent transition-colors"
              >
                <span className="text-sm font-medium capitalize">
                  {category.name}
                </span>
                <Badge variant="secondary" className="text-xs">
                  {category.postCount}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Tags</CardTitle>
          <CardDescription>
            Explore related topics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 12).map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag}`}>
                <Badge 
                  variant="outline" 
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact CTA */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Need Help?</CardTitle>
          <CardDescription>
            Professional automotive electrical services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Experiencing electrical issues with your vehicle? Our mobile service 
            brings expert diagnosis and repair directly to you.
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <span className="font-semibold">📞 Emergency:</span>
              <span className="ml-2">0800 123 4567</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="font-semibold">⏰ Hours:</span>
              <span className="ml-2">Mon-Fri 8AM-6PM</span>
            </div>
          </div>
          
          <Link
            href="/contact"
            className="inline-block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Get Quote
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}