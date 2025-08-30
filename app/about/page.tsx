"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Bounded from "@/components/common/bounded";
import ParallaxSection from "@/components/common/parallax-section";
import LightSection from "@/components/common/light-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Clock, Award, MapPin, Phone, Mail } from "lucide-react";

// Metadata moved to separate metadata file since this is now a client component

export default function AboutPage() {
  return (
    <>
    {/* Hero Section */}
    <div className="hero-bg-about py-12 md:py-16">
      <Bounded>
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About London Auto Doctor
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted mobile car electrician with over 15 years of experience 
            providing professional automotive electrical services across London.
          </p>
        </div>
      </Bounded>
    </div>
    
    {/* Our Story Section - Normal */}
    <Bounded>
        <div className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  London Auto Doctor was founded with a simple mission: to provide reliable, 
                  professional automotive electrical services directly to our customers&apos; 
                  locations across London. What started as a passion for solving complex 
                  electrical problems has grown into a trusted mobile service.
                </p>
                <p>
                  With over 15 years in the automotive industry, we&apos;ve seen technology evolve 
                  from simple electrical systems to today&apos;s sophisticated computer-controlled 
                  networks. Our expertise has evolved alongside these advances, ensuring we 
                  can handle any electrical challenge your vehicle presents.
                </p>
                <p>
                  We understand that car problems don&apos;t wait for convenient times. That&apos;s why 
                  we bring our fully equipped mobile workshop directly to you - whether you&apos;re 
                  at home, work, or stranded on the roadside.
                </p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Certified Professional</h3>
                      <p className="text-sm text-muted-foreground">
                        IMI qualified with continuous professional development
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">15+ Years Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Extensive experience across all vehicle makes and models
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Wrench className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Mobile Service</h3>
                      <p className="text-sm text-muted-foreground">
                        Fully equipped mobile workshop comes to you
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* About Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/wimages/About 3Images/pexels-19x14-8478220.jpg"
                alt="Automotive electrical service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/wimages/About 3Images/pexels-19x14-8478262.jpg"
                alt="Professional car electrician"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/wimages/About 3Images/pexels-olly-3807277.jpg"
                alt="Mobile car electrical services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
    </Bounded>

    {/* Areas of Expertise Section - Normal */}
    <Bounded>
        <div className="py-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">
              Areas of Expertise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Diagnostic Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    Advanced diagnostic equipment to quickly identify and resolve electrical faults
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quality Repairs</h3>
                  <p className="text-muted-foreground text-sm">
                    Professional repairs using OEM parts with comprehensive warranties
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Emergency Response</h3>
                  <p className="text-muted-foreground text-sm">
                    Rapid response for emergency electrical failures and roadside assistance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </Bounded>

    {/* Technical Specializations - Light */}
    <LightSection>
      <Bounded>
      <div className="py-16">
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">
              Technical Specializations
            </h2>
            
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Battery Management Systems",
              "Alternator Repair",
              "Starter Motor Service",
              "ECU Diagnostics",
              "Wiring Harness Repair",
              "Security System Installation",
              "LED Lighting Upgrades",
              "Air Conditioning Electrical",
              "Coding and Programming",
              "Car Audio Systems & Radio",
              "Airbag Fault Diagnostics",
              "Central Locking Systems",
              "Windows & Mirrors",
              "Fault Code Analysis",
              "Component Testing",
              "Circuit Analysis",
              "Electrical Troubleshooting"
            ].map((specialization) => (
              <Badge key={specialization} variant="secondary" className="text-sm">
                {specialization}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      </Bounded>
    </LightSection>

    {/* Service Promise - Light */}
    <LightSection>
      <Bounded>
      <div className="py-16">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">
                Our Service Promise
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <h3 className="font-semibold">Transparent Pricing</h3>
                  <p className="text-muted-foreground">
                    No hidden costs. Clear, upfront pricing with detailed explanations
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Quality Guarantee</h3>
                  <p className="text-muted-foreground">
                    All work backed by comprehensive warranties and quality assurance
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Professional Service</h3>
                  <p className="text-muted-foreground">
                    Respectful, professional service with attention to detail
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </Bounded>
    </LightSection>

    {/* Contact Section - Normal */}
    <Bounded>
        <div className="py-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contact London Auto Doctor today for professional mobile automotive 
              electrical services across London. We&apos;re here to help with all your 
              vehicle&apos;s electrical needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-semibold">0800 123 4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@londonautodoctor.co.uk" className="font-semibold hover:text-automotive-orange transition-colors">info@londonautodoctor.co.uk</a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold">All London Boroughs</span>
              </div>
            </div>
          </div>
        </div>
    </Bounded>

    {/* Parallax CTA Section */}
    <ParallaxSection 
      backgroundImage="/wimages/Last%20Section/pexels-introspectivedsgn-6075509.jpg"
    >
      <div className="text-center space-y-8 text-white">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
            Experience You Can
            <span className="block text-automotive-orange">Trust</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            15+ years of professional automotive electrical expertise. 
            Licensed, insured, and ready to solve your vehicle&apos;s electrical challenges.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-automotive-orange hover:bg-automotive-orange/90 text-white font-semibold px-8 shadow-lg"
          >
            <Link href="/contact">Get Your Quote</Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="px-8 border-white/30 text-white hover:bg-white/10 shadow-lg"
          >
            <Link href="tel:08001234567">Call Now</Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300 pt-6 border-t border-white/20">
          <div>✓ Licensed & Insured</div>
          <div>✓ 15+ Years Experience</div>
          <div>✓ Mobile Service</div>
          <div>✓ Emergency Available</div>
        </div>
      </div>
    </ParallaxSection>
    </>
  );
}