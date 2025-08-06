import Link from "next/link";
import { Button } from "@/components/ui/button";
import Bounded from "@/components/common/bounded";

export default function NotFound() {
  return (
    <Bounded className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-display font-bold text-automotive-orange">
            404
          </h1>
          <h2 className="text-3xl font-display font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhaps you&apos;ve
            mistyped the URL or the page has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-automotive-orange hover:bg-automotive-orange/90">
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Need immediate assistance?</p>
            <p className="font-semibold text-automotive-orange">
              Call us: 0800 123 4567
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}