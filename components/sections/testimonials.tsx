"use client";

import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Bounded from "@/components/common/bounded";
import LightSection from "@/components/common/light-section";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -400,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 400,
        behavior: "smooth"
      });
    }
  };


  return (
    <LightSection>
      <Bounded>
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-2">
            <Badge variant="outline" className="border-automotive-orange text-automotive-orange">
              Customer Reviews
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Testimonials From Our
              <span className="block text-automotive-orange">
                Happy Clients
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
              have to say about our automotive electrical services.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-automotive-orange text-automotive-orange hover:text-automotive-orange"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-automotive-orange text-automotive-orange hover:text-automotive-orange"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div 
            ref={carouselRef}
            className="overflow-hidden py-4 px-12"
          >
            <div className="flex gap-6 testimonials-carousel">
            {/* First set of testimonials */}
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-80">
                <Card className="relative bg-card hover:shadow-automotive-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="w-8 h-8 rounded-full bg-automotive-orange/10 flex items-center justify-center">
                      <Quote className="h-4 w-4 text-automotive-orange" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-automotive-orange text-automotive-orange" 
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-foreground leading-relaxed flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    
                    {/* Customer Info */}
                    <div className="pt-4 border-t border-border/40 mt-auto">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                      <Badge 
                        variant="outline" 
                        className="mt-2 border-automotive-orange/50 text-automotive-orange text-xs"
                      >
                        {testimonial.service}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {TESTIMONIALS.map((testimonial) => (
              <div key={`duplicate-${testimonial.id}`} className="flex-shrink-0 w-80">
                <Card className="relative bg-card hover:shadow-automotive-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="w-8 h-8 rounded-full bg-automotive-orange/10 flex items-center justify-center">
                      <Quote className="h-4 w-4 text-automotive-orange" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-automotive-orange text-automotive-orange" 
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-foreground leading-relaxed flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    
                    {/* Customer Info */}
                    <div className="pt-4 border-t border-border/40 mt-auto">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                      <Badge 
                        variant="outline" 
                        className="mt-2 border-automotive-orange/50 text-automotive-orange text-xs"
                      >
                        {testimonial.service}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Additional social proof */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 fill-automotive-orange text-automotive-orange" 
                  />
                ))}
              </div>
              <span>4.9/5 Average Rating</span>
            </div>
            
            <div>500+ Satisfied Customers</div>
            <div>Same Day Service Available</div>
            <div>Licensed & Fully Insured</div>
          </div>
        </div>
      </Bounded>
    </LightSection>
  );
}