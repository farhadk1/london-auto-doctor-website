import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  
  email: z
    .string()
    .email("Please enter a valid email address"),
  
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
  
  service: z
    .string()
    .min(1, "Please select a service"),
  
  vehicleMake: z
    .string()
    .min(1, "Please enter your vehicle make")
    .max(30, "Vehicle make is too long"),
  
  vehicleModel: z
    .string()
    .min(1, "Please enter your vehicle model")
    .max(30, "Vehicle model is too long"),
  
  vehicleYear: z
    .number()
    .min(1990, "Vehicle year must be 1990 or later")
    .max(new Date().getFullYear() + 1, "Invalid vehicle year"),
  
  issue: z
    .string()
    .min(10, "Please describe the issue in at least 10 characters")
    .max(500, "Description is too long (max 500 characters)"),
  
  urgency: z.enum(["emergency", "within-24h", "within-week", "flexible"], {
    message: "Please select urgency level",
  }),
  
  location: z
    .string()
    .min(5, "Please enter your location")
    .max(100, "Location is too long"),
  
  preferredContact: z.enum(["phone", "email", "text"], {
    message: "Please select preferred contact method",
  }),
  
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
  
  recaptchaToken: z
    .string()
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter signup validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address"),
  
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .optional(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Quick quote form validation  
export const quickQuoteSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),
  
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
  
  service: z
    .string()
    .min(1, "Please select a service"),
  
  urgency: z.enum(["emergency", "within-24h", "within-week", "flexible"]),
});

export type QuickQuoteData = z.infer<typeof quickQuoteSchema>;

// Service options for forms
export const SERVICE_OPTIONS = [
  { value: "battery-services", label: "Battery Services" },
  { value: "electrical-diagnostics", label: "Electrical Diagnostics" },
  { value: "alternator-repair", label: "Alternator Repair" },
  { value: "starter-motor", label: "Starter Motor Services" },
  { value: "lighting-systems", label: "Lighting Systems" },
  { value: "security-systems", label: "Security & Alarm Systems" },
  { value: "air-conditioning", label: "Air Conditioning Electrical" },
  { value: "wiring-repairs", label: "Wiring & Harness Repair" },
  { value: "dashboard-repairs", label: "Dashboard & Instrument Repair" },
  { value: "trailer-electrics", label: "Trailer & Towbar Electrics" },
  { value: "emergency-services", label: "Emergency Services" },
  { value: "other", label: "Other / Not Sure" },
];

export const URGENCY_OPTIONS = [
  { value: "emergency", label: "Emergency (ASAP)" },
  { value: "within-24h", label: "Within 24 Hours" },
  { value: "within-week", label: "Within This Week" },
  { value: "flexible", label: "Flexible Timing" },
];

export const CONTACT_METHOD_OPTIONS = [
  { value: "phone", label: "Phone Call" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text Message" },
];