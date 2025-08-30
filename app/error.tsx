"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Bounded from "@/components/common/bounded";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Bounded className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold text-destructive">
            Something went wrong!
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            We&apos;re experiencing some technical difficulties. Our team has been
            notified and is working to resolve the issue.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => reset()}
              size="lg"
              className="bg-automotive-orange hover:bg-automotive-orange/90"
            >
              Try again
            </Button>
            <Button
              onClick={() => window.location.href = "/"}
              variant="outline"
              size="lg"
            >
              Go to Homepage
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Need immediate assistance?</p>
            <p className="font-semibold text-automotive-orange">
              Call us: 0800 123 4567
            </p>
            <p className="text-xs mt-2">
              Out hours Emergency Services available!
            </p>
          </div>
        </div>
        
        {error.digest && (
          <div className="text-xs text-muted-foreground">
            Error ID: {error.digest}
          </div>
        )}
      </div>
    </Bounded>
  );
}