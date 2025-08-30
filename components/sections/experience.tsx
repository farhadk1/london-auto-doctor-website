"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Bounded from "@/components/common/bounded";
import { BUSINESS_STATS, BUSINESS_INFO } from "@/lib/constants";
import { CheckCircle, X } from "lucide-react";

const carouselImages = [
  "/wimages/home page carousel/pexels-lumierestudiomx-4116198.jpg",
  "/wimages/home page carousel/pexels-19x14-8478262.jpg",
  "/wimages/home page carousel/pexels-daniel-andraski-197681005-13065689.jpg",
  "/wimages/home page carousel/pexels-19x14-8478220.jpg",
  "/wimages/home page carousel/pexels-olly-3807277.jpg",
  "/wimages/home page carousel/pexels-stockphotoartist-6473244.jpg",
];

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Bounded className="bg-automotive-gradient">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="border-automotive-orange text-automotive-orange"
            >
              Professional Experience
            </Badge>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Over 15 Years of Experience in the
              <span className="block text-automotive-orange">
                Automotive Industry Especially Car Electrical
              </span>
            </h2>

            <p className="text-lg text-muted-foreground">
              We realize that you lead a busy life, so we have made it easy for
              you to access professional automotive electrical services. Out hours Emergency Services available!
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
              <div className="text-sm text-muted-foreground">
                • Battery diagnostics & replacement
              </div>
              <div className="text-sm text-muted-foreground">
                • Alternator & charging systems
              </div>
              <div className="text-sm text-muted-foreground">
                • Starter motor repairs
              </div>
              <div className="text-sm text-muted-foreground">
                • Electrical fault finding
              </div>
              <div className="text-sm text-muted-foreground">
                • Lighting systems
              </div>
              <div className="text-sm text-muted-foreground">
                • Security installations
              </div>
              <div className="text-sm text-muted-foreground">
                • Coding and Programming
              </div>
              <div className="text-sm text-muted-foreground">
                • Car Audio Systems & Radio
              </div>
              <div className="text-sm text-muted-foreground">
                • Airbag Fault Diagnostics
              </div>
              <div className="text-sm text-muted-foreground">
                • Windows & Mirrors
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid and Carousel */}
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {BUSINESS_STATS.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-automotive transition-shadow"
              >
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

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="flex animate-[testimonialScroll_20s_linear_infinite] hover:animate-none gap-4">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-48 relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Automotive specialization ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-automotive-orange transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Automotive specialization"
                width={800}
                height={600}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </Bounded>
  );
}
