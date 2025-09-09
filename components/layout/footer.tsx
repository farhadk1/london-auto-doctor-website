import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Battery Services", href: "/services/battery-services" },
    { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics" },
    { name: "Alternator Repair", href: "/services/alternator-repair" },
    { name: "Starter Motor", href: "/services/starter-motor" },
    { name: "Emergency Services", href: "/services/emergency" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const londonAreas = [
  "Central London", "North London", "South London", "East London", 
  "West London", "Westminster", "Camden", "Islington", "Hackney",
  "Tower Hamlets", "Greenwich", "Lambeth", "Southwark", "Wandsworth"
];

export default function Footer() {
  return (
    <footer className="bg-automotive-gradient border-t border-border/40">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-start">
                <Image
                  src="/LondonAutoDoctor(Website Header).png"
                  alt="London Auto Doctor - Mobile Car Electrician"
                  width={400}
                  height={120}
                  className="h-32 w-auto"
                />
              </Link>
              
              <p className="text-sm text-muted-foreground">
                Professional mobile car electrician services across London. 
                15+ years of experience in automotive electrical repairs, 
                diagnostics, and emergency services.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-automotive-orange" />
                  <span className="font-semibold text-foreground">0800 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-automotive-orange" />
                  <a href="mailto:info@londonautodoctor.co.uk" className="text-muted-foreground hover:text-automotive-orange transition-colors">info@londonautodoctor.co.uk</a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-automotive-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours & Areas */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-automotive-orange mt-0.5" />
                  <div>
                    <div className="text-foreground font-medium">Monday - Friday</div>
                    <div className="text-muted-foreground">8:00 AM - 6:00 PM</div>
                    <div className="text-foreground font-medium mt-2">Saturday</div>
                    <div className="text-muted-foreground">9:00 AM - 2:00 PM</div>
                    <div className="text-foreground font-medium mt-2">Sunday</div>
                    <div className="text-muted-foreground">Emergency Only</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-display font-semibold text-foreground mb-2 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-automotive-orange" />
                  <span>Service Areas</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  We serve all London boroughs including {londonAreas.slice(0, 4).join(", ")} and more.
                </p>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-automotive-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-automotive-orange hover:bg-automotive-orange/90"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} London Auto Doctor. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-automotive-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Licensed automotive electrician | Fully insured | Out of hours Emergency Services available!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}