# Images Directory

This directory contains images for the London Auto Doctor website.

## Structure
- `/hero/` - Hero section background images
- `/services/` - Service category icons and images  
- `/team/` - Team photos and professional headshots
- `/blog/` - Blog post featured images
- `/icons/` - Custom icons and logos

## Image Guidelines
- Use WebP format when possible for better performance
- Optimize images for web (compress while maintaining quality)
- Include alt text for all images for accessibility
- Use consistent sizing and aspect ratios

## Placeholder Images
Until professional images are provided, consider using:
- Unsplash (automotive, electrical, professional service themes)
- Automotive stock photography
- Professional service photography

## Image Optimization
Next.js Image component automatically optimizes images when using:
```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/automotive-electrical.jpg" 
  alt="Professional automotive electrical service"
  width={1200} 
  height={600}
  priority={true} // For above-the-fold images
/>
```