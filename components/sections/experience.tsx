import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Bounded from "@/components/common/bounded";
import { BUSINESS_STATS, BUSINESS_INFO } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <Bounded className="bg-automotive-gradient">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge variant="outline" className="border-automotive-orange text-automotive-orange">
              Professional Experience
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Over 15 Years of Experience in the
              <span className="block text-automotive-orange">
                Automotive Industry Especially Car Electrical
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              We realize that you lead a busy life, so we have made it 
              easy for you to access professional automotive electrical services 24/7.
            </p>
          </div>

          {/* Features list */}
          <div className="space-y-3">
            {BUSINESS_INFO.credentials.map((credential, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-automotive-orange flex-shrink-0" />
                <span className="text-foreground">{credential}</span>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-semibold text-foreground">
              Our Specializations:
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-muted-foreground">• Battery diagnostics & replacement</div>
              <div className="text-sm text-muted-foreground">• Alternator & charging systems</div>
              <div className="text-sm text-muted-foreground">• Starter motor repairs</div>
              <div className="text-sm text-muted-foreground">• Electrical fault finding</div>
              <div className="text-sm text-muted-foreground">• Lighting systems</div>
              <div className="text-sm text-muted-foreground">• Security installations</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {BUSINESS_STATS.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-automotive transition-shadow">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl md:text-4xl font-display font-bold text-automotive-orange">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Bounded>
  );
}