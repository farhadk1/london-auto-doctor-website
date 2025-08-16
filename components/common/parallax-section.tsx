import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  debug?: boolean;
}

export default function ParallaxSection({ 
  children, 
  backgroundImage, 
  className,
  overlay = true,
  overlayOpacity = 0.6,
  debug = false
}: ParallaxSectionProps) {
  // Debug logging
  if (debug) {
    console.log("ParallaxSection backgroundImage:", backgroundImage);
  }

  return (
    <section className={cn("parallax-container", debug && "parallax-debug", className)}>
      {/* Background Image */}
      <div 
        className="parallax-bg"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="parallax-overlay"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />
      )}
      
      {/* Content */}
      <div className="parallax-content">
        <div className="container mx-auto px-4 py-8 lg:py-12 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}