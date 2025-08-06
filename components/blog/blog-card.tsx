import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card 
      className={`group hover:shadow-lg transition-all duration-300 ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="capitalize">
            {post.category.replace('-', ' ')}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.publishedDate).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </div>
        </div>
        
        <CardTitle className={`group-hover:text-primary transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        
        <CardDescription className={`${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime} min read
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 transition-transform"
          >
            Read more
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}