// Site Configuration
export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "AirLens Photography",
  siteDescription: "Premium photography portfolio showcasing cinematic visual storytelling",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "YOUR VISION",
  heroImage: "/hero-model.png",
  heroImageAlt: "Photographer with camera",
  overlayText: "Snagged by AirLens",
  brandName: "AirLens",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Capturing Moments",
  titleLine2: "That Last Forever",
  description: "We specialize in creating timeless imagery that tells your unique story. From intimate portraits to grand celebrations, every frame is crafted with passion and precision.",
  portfolioImages: [
    { src: "/portfolio-1.jpg", alt: "Portrait photography" },
    { src: "/portfolio-2.jpg", alt: "Fashion shoot" },
    { src: "/portfolio-3.jpg", alt: "Nature photography" },
    { src: "/portfolio-4.jpg", alt: "Wedding moment" },
    { src: "/portfolio-5.jpg", alt: "Street photography" },
  ],
  accentText: "Selected Works - 2024",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Work",
  titleRegular: "Selected",
  titleItalic: "Projects",
  viewAllText: "View All Projects",
  viewAllHref: "#",
  viewProjectText: "View Project",
  projects: [
    {
      id: 1,
      title: "Ethereal Dreams",
      category: "Fashion Editorial",
      year: "2024",
      image: "/project-1.jpg",
      description: "A surreal fashion editorial exploring the boundaries between reality and imagination through dreamlike imagery.",
    },
    {
      id: 2,
      title: "Urban Souls",
      category: "Street Photography",
      year: "2024",
      image: "/project-2.jpg",
      description: "Capturing the raw essence of city life and the untold stories of those who walk its streets.",
    },
    {
      id: 3,
      title: "Golden Hour",
      category: "Wedding",
      year: "2023",
      image: "/project-3.jpg",
      description: "Intimate wedding photography that captures the magic and emotion of your special day.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What I Offer",
  titleLine1: "Photography",
  titleLine2Italic: "Services",
  description: "From concept to final delivery, I provide comprehensive photography services tailored to your vision and needs.",
  services: [
    {
      iconName: "Camera",
      title: "Portrait Sessions",
      description: "Professional portraits that capture your authentic self with stunning lighting and composition.",
    },
    {
      iconName: "Diamond",
      title: "Luxury Events",
      description: "Elegant coverage of high-end events, galas, and exclusive celebrations with discretion and style.",
    },
    {
      iconName: "Users",
      title: "Brand Campaigns",
      description: "Strategic visual content that elevates your brand and connects with your target audience.",
    },
    {
      iconName: "Sparkles",
      title: "Editorial Work",
      description: "Magazine-quality fashion and editorial photography for publications and creative projects.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Choose Me",
  titleRegular: "The AirLens",
  titleItalic: "Difference",
  statsLabel: "By The Numbers",
  stats: [
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 25, suffix: "+", label: "Awards Won" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "Behind the scenes",
      title: "Attention to Detail",
      description: "Every element is carefully considered, from lighting to composition, ensuring perfection in every shot.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "Creative process",
      title: "Creative Vision",
      description: "Unique perspectives and artistic approaches that make your images stand out from the crowd.",
    },
  ],
  wideImage: "/wide-landscape.jpg",
  wideImageAlt: "Cinematic landscape",
  wideTitle: "Cinematic Quality",
  wideDescription: "Every frame tells a story with the depth and emotion of a motion picture.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "What They",
  titleItalic: "Say",
  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Creative Director",
      image: "/testimonial-1.jpg",
      quote: "Working with AirLens was an absolute dream. The attention to detail and creative vision exceeded all our expectations. The final images were nothing short of spectacular.",
    },
    {
      id: 2,
      name: "James Chen",
      role: "Fashion Designer",
      image: "/testimonial-2.jpg",
      quote: "The ability to capture the essence of my collection while adding a unique artistic perspective is truly remarkable. Every shot was magazine-worthy.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Bride",
      image: "/testimonial-3.jpg",
      quote: "Our wedding photos are absolutely magical. Every time we look at them, we're transported back to those precious moments. Truly unforgettable work.",
    },
    {
      id: 4,
      name: "Michael Park",
      role: "Brand Manager",
      image: "/testimonial-4.jpg",
      quote: "The campaign images transformed our brand's visual identity. Professional, creative, and always delivering beyond what we imagined.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "1",
      question: "What is your booking process?",
      answer: "The process begins with a consultation to understand your vision and needs. We'll discuss location, styling, timeline, and deliverables. Once we align on the concept, a deposit secures your date and we begin pre-production planning.",
    },
    {
      id: "2",
      question: "How long until I receive my photos?",
      answer: "Turnaround time varies by project scope. Portrait sessions are typically delivered within 2 weeks, while larger events and campaigns may take 4-6 weeks. Rush delivery is available upon request.",
    },
    {
      id: "3",
      question: "Do you travel for shoots?",
      answer: "Absolutely! I love shooting in new locations. Travel arrangements can be discussed during our consultation, and I'm available for destination shoots worldwide.",
    },
    {
      id: "4",
      question: "What are your rates?",
      answer: "Rates are customized based on project requirements. Contact me with details about your shoot for a personalized quote that fits your needs and budget.",
    },
    {
      id: "5",
      question: "Can I request specific editing styles?",
      answer: "Yes! I work closely with clients to achieve their desired aesthetic. We'll discuss editing preferences during pre-production to ensure the final images match your vision.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "AIRLENS",
  contactLabel: "Get in Touch",
  email: "hello@airlens.studio",
  locationText: "Los Angeles, California\nNew York, New York",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  socialLabel: "Follow Along",
  socialLinks: [
    { iconName: "Instagram", href: "#", label: "Instagram" },
    { iconName: "Twitter", href: "#", label: "Twitter" },
    { iconName: "Linkedin", href: "#", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:hello@airlens.studio", label: "Email" },
  ],
  tagline: "Capturing moments\nthat last forever",
  copyright: "© 2024 AirLens Photography. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
