import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Bounded from "@/components/common/bounded";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, MapPin, Clock, Shield } from "lucide-react";

export default function Hero() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
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
              <span className="text-foreground">Emergency 24/7</span>
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

        {/* Image/Visual */}
        <div className="relative w-full max-w-lg">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-automotive-orange/20 to-automotive-orange/5 border border-automotive-orange/20 p-8">
            <div className="w-full h-full flex items-center justify-center">
              {/* Placeholder for automotive image */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-automotive-orange/20 flex items-center justify-center">
                  <div className="text-4xl">⚡</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    Mobile Car Electrician
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Professional automotive electrical services at your location
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute -top-4 -right-4">
            <Badge className="bg-automotive-orange text-white">
              Emergency Available
            </Badge>
          </div>
          
          <div className="absolute -bottom-4 -left-4">
            <Badge variant="outline" className="border-automotive-orange text-automotive-orange bg-background">
              Licensed & Insured
            </Badge>
          </div>
        </div>
      </div>
    </Bounded>
  );
}