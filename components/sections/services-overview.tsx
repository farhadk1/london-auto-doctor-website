import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Bounded from "@/components/common/bounded";
import LightSection from "@/components/common/light-section";
import { QUICK_SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <LightSection>
      <Bounded>
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Automotive Electrical Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional mobile car electrician services across London. 
              We diagnose, repair, and maintain all automotive electrical systems.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {QUICK_SERVICES.map((service) => (
            <Card 
              key={service.id} 
              className="group bg-card hover:shadow-automotive-lg transition-all duration-300 hover:border-automotive-orange/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-automotive-orange/10 flex items-center justify-center mb-4 group-hover:bg-automotive-orange/20 transition-colors">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl font-display text-foreground group-hover:text-automotive-orange transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  variant="ghost" 
                  className="w-full justify-between group-hover:text-automotive-orange"
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-card rounded-2xl p-8 md:p-12">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Need Emergency Automotive Electrical Service?
            </h3>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Available 24/7 across London for urgent electrical repairs and diagnostics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-automotive-orange hover:bg-automotive-orange/90"
            >
              <Link href="/contact">Get Emergency Service</Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </Bounded>
    </LightSection>
  );
}