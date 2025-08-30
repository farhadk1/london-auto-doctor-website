"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Bounded from "@/components/common/bounded";
import ParallaxSection from "@/components/common/parallax-section";
import { ALL_SERVICES } from "@/lib/services-data";
import { BUSINESS_INFO } from "@/lib/constants";
import { ArrowRight, Clock, Phone, CheckCircle } from "lucide-react";
import { getParallaxImage } from "@/lib/parallax-images";


export default function ServicesPage() {
  const pathname = usePathname();
  const backgroundImage = getParallaxImage(pathname);
  const emergencyServices = ALL_SERVICES.filter(s => 
    s.availability === 'emergency' || s.availability === 'both'
  );
  
  return (
    <>
    <div className="space-y-0">
      {/* Hero Section */}
      <div className="hero-bg-services py-12 md:py-16">
        <Bounded>
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm">
                Professional Services
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                Automotive Electrical
                <span className="block text-automotive-orange">
                  Services in London
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Professional mobile car electrician services across all London boroughs. 
                From diagnostics to emergency repairs, we keep your vehicle running reliably.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-automotive-orange hover:bg-automotive-orange/90 text-white shadow-lg"
              >
                <Link href="/contact">Book Service Now</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 shadow-lg"
              >
                <Link href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>
                  Emergency: {BUSINESS_INFO.phone}
                </Link>
              </Button>
            </div>
          </div>
        </Bounded>
      </div>

      {/* All Services Grid */}
      <Bounded>
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Complete Service Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional automotive electrical services with transparent pricing 
              and guaranteed workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((service) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-automotive-lg transition-all duration-300 hover:border-automotive-orange/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-20 h-20 rounded-lg bg-automotive-orange/10 flex items-center justify-center group-hover:bg-automotive-orange/20 transition-colors">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={65}
                        height={65}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    {service.id === 'electrical-diagnostics' && (
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">From</div>
                        <div className="text-xl font-bold text-automotive-orange">
                          £{service.pricing.from}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl font-display group-hover:text-automotive-orange transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription>
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={service.availability === 'emergency' 
                        ? "border-red-500 text-red-500" 
                        : "border-blue-500 text-blue-500"
                      }
                    >
                      {service.availability === 'emergency' ? 'Emergency' : 'Scheduled'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Key Features:</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-automotive-orange flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full group-hover:bg-automotive-orange group-hover:text-white transition-colors"
                    variant="outline"
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More & Book
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Bounded>

      {/* Emergency Services Highlight */}
      <Bounded className="bg-automotive-gradient">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Scheduled Services Available
            </h2>
            <p className="text-muted-foreground">
              Don&apos;t let electrical problems leave you stranded. Our out hours emergency services 
              are available across London.
            </p>
            <div className="flex items-center space-x-2 text-automotive-orange">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emergencyServices.slice(0, 4).map((service) => (
              <Card key={service.id} className="border-automotive-orange/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={65}
                        height={65}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{service.title}</div>
                      {service.id === 'electrical-diagnostics' && (
                        <div className="text-xs text-muted-foreground">From £{service.pricing.from}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Bounded>
    </div>

    {/* Ready to Book Your Service - Parallax Section */}
    <ParallaxSection 
      backgroundImage="/wimages/Last%20Section/pexels-introspectivedsgn-6075509.jpg"
    >
      <div className="text-center space-y-8 text-white">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Get your vehicle back to perfect electrical health with our professional services.
            Licensed, insured, and ready to solve your automotive electrical challenges.
          </p>
        </div>
        
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
          <div>✓ Professional Service</div>
          <div>✓ Transparent Pricing</div>
          <div>✓ 12 Month Warranty</div>
          <div>✓ Scheduled Services</div>
        </div>
      </div>
    </ParallaxSection>
    </>
  );
}