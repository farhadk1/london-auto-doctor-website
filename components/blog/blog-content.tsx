"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Share2 } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Convert markdown-like content to HTML (basic conversion)
  const formatContent = (content: string) => {
    return content
      // Headers
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">$1</h3>')
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4 text-muted-foreground leading-relaxed">')
      // Lists
      .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2 text-muted-foreground">$1</li>')
      // Wrap content in paragraph tags
      .replace(/^(?!<[h|l])/gm, '<p class="mb-4 text-muted-foreground leading-relaxed">')
      .replace(/(?<!>)$/gm, '</p>')
      // Clean up extra paragraph tags
      .replace(/<p class="mb-4 text-muted-foreground leading-relaxed"><\/p>/g, '')
      .replace(/<p class="mb-4 text-muted-foreground leading-relaxed">(<h[23])/g, '$1');
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4">
          <Badge variant="secondary" className="capitalize">
            {post.category.replace('-', ' ')}
          </Badge>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>London Auto Doctor</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <time dateTime={post.publishedDate}>
              {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.readTime} minute read</span>
          </div>
          
          <button
            onClick={handleShare}
            className="flex items-center hover:text-primary transition-colors"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Share</span>
          </button>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </header>
      
      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div 
          dangerouslySetInnerHTML={{ 
            __html: formatContent(post.content) 
          }}
          className="space-y-4"
        />
      </div>
      
      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              Need Professional Help?
            </h3>
            <p className="text-muted-foreground mb-4">
              If you&apos;re experiencing electrical issues with your vehicle, don&apos;t hesitate to contact 
              London Auto Doctor. Our mobile service brings professional automotive electrical 
              expertise directly to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <span className="font-semibold">📞 0800 123 4567</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">✉️ info@londonautodoctor.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </footer>
    </article>
  );
}