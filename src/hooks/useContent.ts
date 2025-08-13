import { useState, useEffect } from 'react';

export interface HomeContent {
  layout: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroCtaLink: string;
  features: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  testimonials: Array<{
    content: string;
    author: string;
    role: string;
    company: string;
  }>;
}

export interface AboutContent {
  layout: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  mission: string;
  vision: string;
  team: Array<{
    name: string;
    role: string;
    bio: string;
    image: string;
  }>;
}

export interface HowItWorksContent {
  layout: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  steps: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface ContactContent {
  layout: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  email: string;
  phone: string;
  address: string;
}

export interface FAQsContent {
  layout: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface TermsContent {
  layout: string;
  title: string;
  content: string;
}

export interface PrivacyContent {
  layout: string;
  title: string;
  content: string;
}

// Default content as fallback
const defaultHomeContent: HomeContent = {
  layout: "home",
  title: "Home",
  heroTitle: "Transform Your Workflow with Smart Solutions",
  heroSubtitle: "Streamline your processes, automate repetitive tasks, and focus on what truly matters. Join thousands of professionals who've already upgraded their productivity.",
  heroCtaText: "Get Started Free",
  heroCtaLink: "/contact",
  features: [
    {
      name: "Lightning Fast",
      description: "Get things done in seconds, not minutes. Our optimized platform ensures you never wait.",
      icon: "RocketLaunchIcon"
    },
    {
      name: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security. We take privacy seriously.",
      icon: "ShieldCheckIcon"
    },
    {
      name: "Smart Automation",
      description: "Let our AI handle the repetitive tasks while you focus on what matters most.",
      icon: "SparklesIcon"
    }
  ],
  testimonials: [
    {
      content: "This app has completely transformed how I work. It's intuitive, fast, and actually fun to use!",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp"
    },
    {
      content: "I've tried many solutions, but this one just works. The automation features save me hours every week.",
      author: "Mike Chen",
      role: "Freelance Developer",
      company: "Independent"
    },
    {
      content: "The customer support is incredible. They helped me set everything up in minutes, not days.",
      author: "Emily Rodriguez",
      role: "Small Business Owner",
      company: "Local Cafe"
    }
  ]
};

export const useContent = <T>(contentType: string, defaultContent: T): T => {
  const [content, setContent] = useState<T>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // In a real implementation, you would fetch from your CMS API
        // For now, we'll use the default content
        setContent(defaultContent);
      } catch (error) {
        console.error(`Error fetching ${contentType} content:`, error);
        setContent(defaultContent);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentType, defaultContent]);

  return content;
};

export const useHomeContent = () => useContent('home', defaultHomeContent);
export const useAboutContent = () => useContent('about', {} as AboutContent);
export const useHowItWorksContent = () => useContent('how-it-works', {} as HowItWorksContent);
export const useContactContent = () => useContent('contact', {} as ContactContent);
export const useFAQsContent = () => useContent('faqs', {} as FAQsContent);
export const useTermsContent = () => useContent('terms', {} as TermsContent);
export const usePrivacyContent = () => useContent('privacy', {} as PrivacyContent);
