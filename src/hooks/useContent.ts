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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    // Only re-run when the content type changes to avoid infinite loops
  }, [contentType]);

  return content;
};

export const useHomeContent = () => useContent('home', defaultHomeContent);
export const useAboutContent = () => useContent('about', {} as AboutContent);
export const useHowItWorksContent = () => useContent('how-it-works', {} as HowItWorksContent);
export const useContactContent = () => useContent('contact', {} as ContactContent);
const defaultFAQsContent: FAQsContent = {
  layout: "faqs",
  title: "Frequently Asked Questions",
  heroTitle: "Frequently Asked Questions",
  heroSubtitle: "Find answers to the most common questions about our platform, pricing, and features.",
  faqs: [
    {
      question: "How does the free trial work?",
      answer: "Our free trial gives you full access to all features for 7 days. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to your plan until the end of your current billing period."
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer: "Yes, we offer special pricing for qualified nonprofits and educational institutions. Please contact our sales team with your organization details for more information."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits. Your data is stored in secure, redundant data centers."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! We offer 100+ integrations with popular tools like Slack, Google Workspace, Microsoft 365, Trello, Asana, and many more. We also provide a robust API for custom integrations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including live chat, email support, video tutorials, and dedicated account managers for enterprise customers. Response times are typically under 2 hours."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export all your data at any time in multiple formats (CSV, JSON, PDF). We believe in data portability and make it easy to take your information with you."
    }
  ]
};

export const useFAQsContent = () => useContent('faqs', defaultFAQsContent);
export const useTermsContent = () => useContent('terms', {} as TermsContent);
export const usePrivacyContent = () => useContent('privacy', {} as PrivacyContent);
