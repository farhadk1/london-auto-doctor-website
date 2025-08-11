// Business Information
export const BUSINESS_INFO = {
  name: "London Auto Doctor",
  tagline: "Mobile Car Electrician",
  phone: "0800 123 4567",
  email: "info@londonautodoctor.com",
  address: "Mobile Service Across London",
  website: "https://londonautodoctor.com",
  
  // Business Hours
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM", 
    sunday: "Sunday: Emergency Only",
  },
  
  // Service Areas
  serviceAreas: [
    "Central London", "North London", "South London", "East London", 
    "West London", "Westminster", "Camden", "Islington", "Hackney",
    "Tower Hamlets", "Greenwich", "Lambeth", "Southwark", "Wandsworth",
    "Kensington", "Chelsea", "Hammersmith", "Fulham", "Richmond",
    "Kingston", "Croydon", "Bromley", "Lewisham", "Bexley"
  ],
  
  // Experience & Credentials
  experience: "15+ years",
  credentials: [
    "Licensed automotive electrician",
    "Fully insured",
    "Emergency services available 24/7",
    "Modern and classic cars",
    "Hybrids and EVs",
    "Commercial vans"
  ]
};

// Quick Service Categories for Homepage
export const QUICK_SERVICES = [
  {
    id: "battery",
    title: "Battery Services",
    description: "Testing, replacement, and charging system diagnostics",
    icon: "🔋",
    href: "/services/battery-services"
  },
  {
    id: "diagnostics", 
    title: "Electrical Diagnostics",
    description: "Advanced fault finding and electrical system analysis",
    icon: "🔍",
    href: "/services/electrical-diagnostics"
  },
  {
    id: "alternator",
    title: "Alternator Repair", 
    description: "Charging system repair and alternator replacement",
    icon: "⚡",
    href: "/services/alternator-repair"
  },
  {
    id: "starter",
    title: "Starter Motor",
    description: "Starter motor testing, repair, and replacement",
    icon: "🔧", 
    href: "/services/starter-motor"
  },
  {
    id: "lighting",
    title: "Lighting Systems",
    description: "Headlights, indicators, and interior lighting repair",
    icon: "💡",
    href: "/services/lighting-systems"
  },
  {
    id: "emergency",
    title: "Emergency Services",
    description: "24/7 emergency automotive electrical repairs",
    icon: "🚨",
    href: "/services/emergency"
  }
];

// Statistics for Homepage
export const BUSINESS_STATS = [
  {
    number: "1,500+",
    label: "Cars Serviced",
    description: "Satisfied customers across London"
  },
  {
    number: "15+",
    label: "Years Experience", 
    description: "Professional automotive electrical expertise"
  },
  {
    number: "24/7",
    label: "Emergency Service",
    description: "Available when you need us most"
  },
  {
    number: "100%",
    label: "Mobile Service",
    description: "We come to you anywhere in London"
  }
];

// Testimonials for Homepage
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Camden, London",
    rating: 5,
    text: "Brilliant service! My car wouldn't start and London Auto Doctor came out within an hour. Fixed the alternator issue on the spot. Highly recommended!",
    service: "Alternator Repair"
  },
  {
    id: 2, 
    name: "Mark Thompson",
    location: "Westminster, London",
    rating: 5,
    text: "Professional and knowledgeable. Diagnosed a complex electrical fault that other garages couldn't find. Fair pricing and excellent work.",
    service: "Electrical Diagnostics"
  },
  {
    id: 3,
    name: "Emma Wilson", 
    location: "South London",
    rating: 5,
    text: "Emergency call-out on Sunday evening when my headlights failed. Quick response and fixed the problem efficiently. Great peace of mind!",
    service: "Emergency Services"
  },
  {
    id: 4,
    name: "James Mitchell",
    location: "Kensington, London", 
    rating: 5,
    text: "Dead battery on a cold Monday morning. Called London Auto Doctor and they were at my office within 30 minutes. New battery fitted and tested perfectly.",
    service: "Battery Services"
  },
  {
    id: 5,
    name: "Lisa Chen",
    location: "Hackney, London",
    rating: 5,
    text: "Fantastic service! My dashboard warning lights were driving me crazy. They diagnosed the issue quickly and explained everything clearly. Very professional.",
    service: "Electrical Diagnostics"
  },
  {
    id: 6,
    name: "David Roberts",
    location: "Greenwich, London",
    rating: 5,
    text: "Starter motor died on me in a car park. These guys came out same day, replaced it efficiently and at a fair price. Will definitely use again!",
    service: "Starter Motor"
  },
  {
    id: 7,
    name: "Rachel Green",
    location: "Wandsworth, London",
    rating: 5,
    text: "Called them out for intermittent electrical issues. Very thorough diagnosis and fixed multiple problems I didn't even know existed. Excellent value!",
    service: "Electrical Diagnostics"
  },
  {
    id: 8,
    name: "Michael Brown",
    location: "Tower Hamlets, London",
    rating: 5,
    text: "My headlights kept flickering and it was dangerous to drive at night. London Auto Doctor sorted it out perfectly and now they're brighter than ever!",
    service: "Lighting Systems"
  },
  {
    id: 9,
    name: "Sophie Taylor",
    location: "Richmond, London",
    rating: 5,
    text: "Amazing emergency service! Car broke down at 11pm and they came out to help. Fixed the charging system issue and got me home safely. True lifesavers!",
    service: "Emergency Services"
  }
];