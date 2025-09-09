"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParallaxSection from "@/components/common/parallax-section";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, Clock, MapPin } from "lucide-react";

export default function CTASection() {

  return (
    <ParallaxSection 
      backgroundImage="/wimages/Last%20Section/pexels-introspectivedsgn-6075509.jpg"
      overlayOpacity={0.6}
    >
      <div className="text-center space-y-8 text-white">
        {/* Main CTA */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
            Ready to Get Your Car
            <span className="block text-automotive-orange">
              Back on the Road?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Don&apos;t let electrical problems keep you stranded. 
            Contact London Auto Doctor for fast, reliable mobile car electrical services.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center space-y-3 border border-white/20 hover:border-automotive-orange/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-automotive-orange/20 flex items-center justify-center mx-auto">
              <Phone className="h-6 w-6 text-automotive-orange" />
            </div>
            <div>
              <div className="font-semibold text-white">Call Now</div>
              <div className="text-2xl font-display font-bold text-automotive-orange">
                {BUSINESS_INFO.phone}
              </div>
              <div className="text-sm text-gray-300">
                Free quotes over the phone
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center space-y-3 border border-white/20">
            <div className="w-12 h-12 rounded-full bg-automotive-orange/20 flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-automotive-orange" />
            </div>
            <div>
              <div className="font-semibold text-white">Working Hours</div>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Mon-Fri: 8 AM - 6 PM</div>
                <div>Sat: 9 AM - 2 PM</div>
                <div className="text-automotive-orange font-semibold">Out of hours Emergency Services available!</div>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center space-y-3 border border-white/20">
            <div className="w-12 h-12 rounded-full bg-automotive-orange/20 flex items-center justify-center mx-auto">
              <MapPin className="h-6 w-6 text-automotive-orange" />
            </div>
            <div>
              <div className="font-semibold text-white">Service Area</div>
              <div className="text-sm text-gray-300">
                All London Boroughs
              </div>
              <div className="text-automotive-orange font-semibold text-sm">
                Mobile Service
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-automotive-orange hover:bg-automotive-orange/90 text-white font-semibold px-8 shadow-lg"
          >
            <Link href="/contact">Book Service Now</Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="px-8 border-white/30 text-white hover:bg-white/10 shadow-lg"
          >
            <Link href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>
              Call {BUSINESS_INFO.phone}
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300 pt-6 border-t border-white/20">
          <div>✓ Licensed & Insured</div>
          <div>✓ No Call-Out Charges</div>
          <div>✓ Same Day Service</div>
          <div>✓ 12 Month Warranty</div>
          <div>✓ Out of hours Emergency Services available!</div>
        </div>
      </div>
    </ParallaxSection>
  );
}