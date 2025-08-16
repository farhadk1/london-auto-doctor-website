import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Bounded from "@/components/common/bounded";
import { getServiceBySlug, ALL_SERVICES } from "@/lib/services-data";
import { BUSINESS_INFO } from "@/lib/constants";
import { 
  CheckCircle, 
  Clock, 
  Phone, 
  ArrowRight, 
  AlertTriangle,
  Wrench,
  Shield
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found | London Auto Doctor",
      description: "The requested service could not be found."
    };
  }

  return {
    title: `${service.title} | London Auto Doctor`,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      "London car electrician",
      "mobile automotive electrical",
      service.slug.replace("-", " "),
      "professional car electrical services"
    ]
  };
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = ALL_SERVICES
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Bounded className="bg-automotive-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg bg-automotive-orange/20 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <Badge 
                  variant="outline" 
                  className={service.availability === 'emergency' || service.availability === 'both' 
                    ? "border-red-500 text-red-500" 
                    : "border-blue-500 text-blue-500"
                  }
                >
                  {service.availability === 'emergency' ? 'Emergency Available' : 
                   service.availability === 'both' ? '24/7 Available' : 'Scheduled Service'}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                {service.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {service.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-automotive-orange hover:bg-automotive-orange/90"
              >
                <Link href="/contact">Book This Service</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
              >
                <Link href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Service Details Card */}
          <Card className="bg-card border-automotive-orange/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-automotive-orange" />
                <span>Service Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Price From</div>
                  <div className="text-2xl font-bold text-automotive-orange">
                    £{service.pricing.from}
                    {service.pricing.to && ` - £${service.pricing.to}`}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground mb-2">Warranty</div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-automotive-orange" />
                  <span className="text-sm font-semibold">{service.warranty}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Bounded>

      {/* Service Features */}
      <Bounded>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-foreground">
              What&apos;s Included
            </h2>
            
            <div className="space-y-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-automotive-orange flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Common Issues We Fix
            </h2>
            
            <div className="space-y-3">
              {service.commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Bounded>

      {/* Service Process */}
      <Bounded>
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional, systematic approach to ensure reliable repairs and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-automotive-orange text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-foreground pt-2">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Bounded>

      {/* Related Services */}
      <Bounded>
        <div className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground text-center">
            Related Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <Card key={relatedService.id} className="group hover:border-automotive-orange/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-automotive-orange/10 flex items-center justify-center mb-2">
                    <Image
                      src={relatedService.icon}
                      alt={relatedService.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg">{relatedService.title}</CardTitle>
                  <CardDescription>{relatedService.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-automotive-orange font-semibold">
                      From £{relatedService.pricing.from}
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/services/${relatedService.slug}`}>
                        View <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Bounded>

      {/* CTA Section */}
      <Bounded className="bg-automotive-hero">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Ready to Book Your {service.title}?
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Get professional automotive electrical service from experienced technicians.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-automotive-orange hover:bg-automotive-orange/90"
            >
              <Link href="/contact">Book Service Now</Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground pt-4 border-t border-border/40">
            <p>✓ No call-out charges • ✓ Same day service • ✓ 12 month warranty</p>
          </div>
        </div>
      </Bounded>
    </div>
  );
}