// Parallax background image mapping for each page
export const PARALLAX_IMAGES = {
  // Homepage
  "/": "/wimages/Last%20Section/pexels-introspectivedsgn-17245063.jpg",
  
  // About page
  "/about": "/wimages/Last%20Section/pexels-introspectivedsgn-6075509.jpg",
  
  // Services pages
  "/services": "/wimages/Services%20Hero%20Section/pexels-introspectivedsgn-5438616.jpg",
  "/services/[slug]": "/wimages/Miscelaneous/pexels-introspectivedsgn-4062192.jpg",
  
  // Contact page
  "/contact": "/wimages/Contact%20hero%20section/pexels-freek-wolsink-508219-28444550.jpg",
  
  // Blog pages
  "/blog": "/wimages/Blog%20Page%20Hero%20Section/pexels-daniel-bestjumpstarterreview-com-3750282-5572271.jpg",
  "/blog/[slug]": "/wimages/Miscelaneous/pexels-introspectivedsgn-11744253.jpg",
  
  // FAQ page
  "/faq": "/wimages/FAQ%20hero%20section/pexels-max-3737334-5562431.jpg",
  
  // Default fallback
  "default": "/wimages/Miscelaneous/pexels-introspectivedsgn-9661261.jpg"
} as const;

// Utility function to get background image for current page
export function getParallaxImage(pathname: string): string {
  // Handle dynamic routes
  if (pathname.startsWith("/services/") && pathname !== "/services") {
    return PARALLAX_IMAGES["/services/[slug]"];
  }
  
  if (pathname.startsWith("/blog/") && pathname !== "/blog") {
    return PARALLAX_IMAGES["/blog/[slug]"];
  }
  
  // Return exact match or default
  return PARALLAX_IMAGES[pathname as keyof typeof PARALLAX_IMAGES] || PARALLAX_IMAGES.default;
}

// Pre-made parallax section content for different page types
export const PARALLAX_CONTENT = {
  cta: {
    title: "Ready to Get Your Vehicle Back on the Road?",
    subtitle: "Professional automotive electrical services you can trust",
    description: "Don't let electrical issues leave you stranded. Our expert mobile technicians provide reliable, same-day service across London with a 12-month warranty on all work.",
    buttons: [
      { text: "Book Service Now", href: "/contact", primary: true },
      { text: "Call Emergency Line", href: "tel:08001234567", primary: false }
    ]
  },
  
  newsletter: {
    title: "Stay Updated with London Auto Doctor",
    subtitle: "Get expert automotive electrical tips and service updates",
    description: "Subscribe to our newsletter for maintenance tips, seasonal advice, and exclusive offers on our professional automotive electrical services.",
    buttons: [
      { text: "Subscribe Now", href: "#newsletter", primary: true },
      { text: "Learn More", href: "/about", primary: false }
    ]
  },
  
  emergency: {
    title: "24/7 Emergency Automotive Electrical Service",
    subtitle: "When you're stranded, we're here to help",
    description: "Car won't start? Electrical failure? Our emergency response team is available 24/7 across London with average response times of 30-60 minutes.",
    buttons: [
      { text: "Call Emergency Now", href: "tel:08001234567", primary: true },
      { text: "Book Regular Service", href: "/contact", primary: false }
    ]
  }
} as const;