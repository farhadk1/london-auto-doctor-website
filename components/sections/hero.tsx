"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Bounded from "@/components/common/bounded";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, MapPin, Clock, Shield } from "lucide-react";

export default function Hero() {
  const playCarHonk = () => {
    // Play car horn sound
    const audio = new Audio('/car-honk.mp3');
    audio.volume = 0.5;
    audio.play().catch((error) => {
      console.log('Audio play failed:', error);
    });

    // Trigger emergency light flash
    const leftLight = document.querySelector('.car-light-left') as HTMLElement;
    const rightLight = document.querySelector('.car-light-right') as HTMLElement;
    
    if (leftLight && rightLight) {
      // Remove existing animation classes
      leftLight.classList.remove('car-light-emergency');
      rightLight.classList.remove('car-light-emergency');
      
      // Force reflow to restart animation
      void leftLight.offsetHeight;
      void rightLight.offsetHeight;
      
      // Add emergency flash animation
      leftLight.classList.add('car-light-emergency');
      rightLight.classList.add('car-light-emergency');
      
      // Remove animation class after animation completes
      setTimeout(() => {
        leftLight.classList.remove('car-light-emergency');
        rightLight.classList.remove('car-light-emergency');
      }, 2000);
    }
  };

  return (
    <Bounded className="bg-automotive-hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-12">
        {/* Content */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Badge */}
          <Badge variant="outline" className="border-automotive-orange text-automotive-orange">
            <Shield className="w-4 h-4 mr-2" />
            15+ Years Experience • Fully Licensed & Insured
          </Badge>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
              Auto Electrical
              <span className="block text-automotive-orange">
                Services & Repair
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Professional mobile car electrician services across London. 
              We come to you for diagnostics, repairs, and emergency services.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-automotive-orange" />
              <span className="text-foreground">All London Boroughs</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-automotive-orange" />
              <span className="text-foreground">Emergency Electrical Services</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              asChild 
              size="lg" 
              className="bg-automotive-orange hover:bg-automotive-orange/90 text-white font-semibold"
            >
              <Link href="/contact">Book Service Now</Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-muted"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-automotive-orange" />
              <div>
                <div className="text-sm text-muted-foreground">Call Now</div>
                <div className="font-semibold text-foreground text-lg">
                  {BUSINESS_INFO.phone}
                </div>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Free quotes • Same day service • No call-out charges
            </div>
          </div>
        </div>

        {/* Animated Car Visual */}
        <div className="relative w-full max-w-lg hero-car-container">
          <div 
            className="hero-car-animation relative w-full aspect-square cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={playCarHonk}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                playCarHonk();
              }
            }}
            aria-label="Click to play car horn sound"
          >
            {/* Car Base Layer */}
            <div className="car-layer car-base"></div>
            
            {/* Rotating Gear Layer */}
            <div className="car-layer car-gear"></div>
            
            {/* Left Light Layer - Invisible by default, visible on hover */}
            <div className="car-layer car-light-left"></div>
            
            {/* Right Light Layer - Invisible by default, visible on hover */}
            <div className="car-layer car-light-right"></div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 z-10">
            <Badge className="bg-automotive-orange text-white shadow-lg">
              Out of hours Emergency Services available!
            </Badge>
          </div>
          
          <div className="absolute -bottom-4 -left-4 z-10">
            <Badge variant="outline" className="border-automotive-orange text-automotive-orange bg-background shadow-lg">
              Licensed & Insured
            </Badge>
          </div>
          
          {/* Interactive hint */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-xs text-muted-foreground text-center bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
              Hover to see lights • Click for horn & emergency flash
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}