import type { Metadata } from "next";
import Bounded from "@/components/common/bounded";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Phone, Wrench, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | London Auto Doctor - Common Car Electrical Questions",
  description:
    "Frequently asked questions about automotive electrical services, car battery problems, diagnostics, and mobile car electrician services in London.",
  openGraph: {
    title: "FAQ | London Auto Doctor - Common Car Electrical Questions", 
    description:
      "Frequently asked questions about automotive electrical services, car battery problems, diagnostics, and mobile car electrician services in London.",
  },
};

const faqCategories = [
  {
    category: "General Services",
    icon: <Wrench className="h-5 w-5" />,
    faqs: [
      {
        question: "What areas of London do you cover?",
        answer: "We provide mobile car electrician services across all London boroughs, including Central London, North London, South London, East London, and West London. Our mobile workshop comes directly to your location whether you're at home, work, or roadside."
      },
      {
        question: "What are your working hours?",
        answer: "Our standard hours are Monday to Friday 8 AM - 6 PM, and Saturday 9 AM - 2 PM. We also offer emergency services outside these hours for urgent electrical failures that leave you stranded."
      },
      {
        question: "How quickly can you respond to a call?",
        answer: "For scheduled appointments, we typically have availability within 24-48 hours. For emergency services, we aim to reach you within 1-2 hours depending on your location and traffic conditions."
      },
      {
        question: "Do you provide free estimates?",
        answer: "Yes, we provide free, no-obligation quotes. Our diagnostic consultation includes an assessment of the issue and a detailed explanation of the required work with transparent pricing."
      }
    ]
  },
  {
    category: "Battery Services", 
    icon: <AlertCircle className="h-5 w-5" />,
    faqs: [
      {
        question: "How do I know if my car battery needs replacing?",
        answer: "Common signs include: difficulty starting the engine, dim headlights, dashboard warning lights, battery age over 3-4 years, corrosion around terminals, or the battery light staying on while driving."
      },
      {
        question: "How long does a car battery replacement take?",
        answer: "A standard battery replacement typically takes 30-45 minutes. This includes testing the charging system, removing the old battery, installing the new one, and ensuring all systems are functioning correctly."
      },
      {
        question: "What type of battery do you recommend?",
        answer: "We recommend high-quality AGM or EFB batteries depending on your vehicle's specifications. We'll match the correct battery type, capacity, and dimensions for your specific make and model."
      },
      {
        question: "Do you dispose of old batteries responsibly?",
        answer: "Yes, we properly recycle all old batteries in accordance with environmental regulations. Car batteries contain lead and acid which must be disposed of safely."
      }
    ]
  },
  {
    category: "Diagnostic Services",
    icon: <Phone className="h-5 w-5" />,
    faqs: [
      {
        question: "What is included in your diagnostic service?",
        answer: "Our comprehensive diagnostic includes OBD-II scanning, electrical system testing, visual inspection, component testing, and a detailed report with recommended repairs. We use professional-grade diagnostic equipment."
      },
      {
        question: "Can you diagnose intermittent electrical problems?",
        answer: "Yes, intermittent issues are our specialty. We use advanced diagnostic techniques including data logging, component stress testing, and systematic elimination to identify sporadic electrical faults."
      },
      {
        question: "How much does a diagnostic cost?",
        answer: "Our diagnostic fee is £75, which is waived if you proceed with the recommended repairs. This includes a comprehensive electrical system check and detailed fault report."
      },
      {
        question: "Do you work on hybrid and electric vehicles?",
        answer: "Yes, we're qualified to work on hybrid and electric vehicles. We have the specialized equipment and training to safely diagnose and repair high-voltage electrical systems."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    icon: <Clock className="h-5 w-5" />,
    faqs: [
      {
        question: "How do you calculate your pricing?",
        answer: "Our pricing is transparent with no hidden costs. We charge based on the diagnosis, parts required, and labor time. You'll receive a detailed quote before any work begins."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, all major credit/debit cards, and bank transfers. Payment is due upon completion of work unless other arrangements are made in advance."
      },
      {
        question: "Do you offer warranties on your work?",
        answer: "Yes, all our work comes with a comprehensive warranty. Parts are covered by manufacturer warranty, and labor is guaranteed for 12 months. We stand behind the quality of our work."
      },
      {
        question: "Are there any additional charges?",
        answer: "Our call-out fee covers travel within our standard service area. There may be additional charges for locations outside Greater London or for emergency out-of-hours services."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="py-16">
      <Bounded>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our mobile car electrician services, 
              diagnostic procedures, and automotive electrical repairs.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {category.icon}
                    </div>
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    Common questions about {category.category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-l-2 border-primary/20 pl-6">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Contact */}
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-8 text-center">
              <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Emergency Services Available</h2>
              <p className="text-muted-foreground mb-6">
                Stranded with electrical problems? We offer emergency mobile services 
                for urgent situations outside normal business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  Emergency Hotline: 0800 123 4567
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Additional charges apply for out-of-hours emergency services
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Still Have Questions */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don&apos;t see your question answered here? Get in touch with London Auto Doctor 
                directly. We&apos;re happy to discuss your specific automotive electrical needs 
                and provide personalized advice.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-semibold">0800 123 4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Mon-Fri 8AM-6PM, Sat 9AM-2PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Bounded>
    </div>
  );
}