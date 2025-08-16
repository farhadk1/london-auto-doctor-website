import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Bounded from "@/components/common/bounded";
import LightSection from "@/components/common/light-section";
import ContactForm from "@/components/forms/contact-form";
import { BUSINESS_INFO } from "@/lib/constants";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Shield, 
  Zap,
  CheckCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | London Auto Doctor - Mobile Car Electrician",
  description: "Contact London Auto Doctor for professional mobile car electrician services across London. Emergency services available 24/7. Call 0800 123 4567 or book online.",
  keywords: [
    "contact car electrician London",
    "mobile car electrician contact",
    "emergency car electrical services",
    "book car electrician London",
    "automotive electrical emergency contact"
  ]
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <div className="hero-bg-contact py-12 md:py-16">
        <Bounded>
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm">
                Get In Touch
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                Contact London
                <span className="block text-automotive-orange">
                  Auto Doctor
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Ready to get your vehicle's electrical system back to perfect health? 
                Contact our expert mobile car electricians today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-automotive-orange text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                <Phone className="h-5 w-5" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full">
                <Mail className="h-5 w-5 text-automotive-orange" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>
        </Bounded>
      </div>

      {/* Contact Information Cards */}
      <Bounded>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone */}
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-automotive-orange/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-automotive-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-automotive-orange mb-1">
                {BUSINESS_INFO.phone}
              </p>
              <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-automotive-orange/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-automotive-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-automotive-orange font-semibold mb-1">
                {BUSINESS_INFO.email}
              </p>
              <p className="text-sm text-muted-foreground">Quick Response</p>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-automotive-orange/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-automotive-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Mon-Fri: 8 AM - 6 PM</p>
                <p>Sat: 9 AM - 2 PM</p>
                <p className="text-automotive-orange font-semibold">Emergency: 24/7</p>
              </div>
            </CardContent>
          </Card>

          {/* Service Area */}
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-automotive-orange/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-automotive-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
              <p className="text-automotive-orange font-semibold mb-1">
                All London Boroughs
              </p>
              <p className="text-sm text-muted-foreground">Mobile Service</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Business Information */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-automotive-orange" />
                  <span>Why Choose London Auto Doctor?</span>
                </CardTitle>
                <CardDescription>
                  Professional mobile car electrician services you can trust
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "15+ years of professional experience",
                  "Licensed and fully insured",
                  "Mobile service across all London boroughs",
                  "Emergency services available 24/7",
                  "No call-out charges",
                  "12-month warranty on parts",
                  "Same day service available"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-automotive-orange flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Service */}
            <Card className="border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700 dark:text-red-400">
                  <Zap className="h-5 w-5" />
                  <span>Emergency Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600 dark:text-red-300 mb-4">
                  Car won&apos;t start? Electrical failure? We provide 24/7 emergency 
                  automotive electrical services across London.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Average Response Time:</span>
                    <span className="font-semibold">30-60 minutes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Emergency Callout:</span>
                    <span className="font-semibold">From £75</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-automotive-orange" />
                  <span>Service Areas in London</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We provide mobile car electrician services across all London boroughs:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {BUSINESS_INFO.serviceAreas.slice(0, 12).map((area, index) => (
                    <div key={index} className="text-foreground">
                      • {area}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  And many more! If you&apos;re in London, we can help you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Bounded>

      {/* FAQ Section */}
      <LightSection>
        <Bounded>
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can you respond to emergencies?",
                answer: "We aim to respond to emergency calls within 30-60 minutes across London, depending on your location and current demand."
              },
              {
                question: "Do you charge call-out fees?",
                answer: "No call-out charges for regular services. Emergency callouts have a fixed fee that&apos;s applied to your total bill."
              },
              {
                question: "What areas of London do you cover?",
                answer: "We cover all London boroughs including Central, North, South, East, and West London with our mobile service."
              },
              {
                question: "Do you provide warranties?",
                answer: "Yes! We provide 12-month warranties on parts and 6-month warranties on labor for all our electrical work."
              },
              {
                question: "Can you work on all vehicle types?",
                answer: "We work on cars, vans, motorcycles, and commercial vehicles. From classic cars to modern hybrids and EVs."
              },
              {
                question: "How do I pay for services?",
                answer: "We accept cash, card payments, and bank transfers. Payment is due upon completion of work."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </Bounded>
      </LightSection>
    </div>
  );
}