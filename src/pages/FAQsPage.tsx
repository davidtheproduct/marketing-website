import React from 'react';
import { motion } from 'framer-motion';
import { 
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { useFAQsContent } from '../hooks/useContent';
import SEO from 'components/SEO';
import { Button } from 'components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'components/ui/accordion';

const FAQsPage: React.FC = () => {
  const content = useFAQsContent();

  // Use CMS content if available, otherwise fall back to default
  const faqs = content.faqs || [
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
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Frequently Asked Questions - Workflow Platform"
        description="Find answers to the most common questions about our platform, pricing, and features. Get help with your workflow automation needs."
        keywords="FAQ, frequently asked questions, workflow platform help, support, pricing questions"
        url="https://dw-mrk.netlify.app/faqs"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Questions
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Find answers to the most common questions about our platform, pricing, and features.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full divide-y divide-gray-200 rounded-xl border border-gray-200">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="px-6">
                  <AccordionTrigger className="py-6">
                    <div className="flex items-start space-x-4">
                      <QuestionMarkCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-10 pr-2 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="inline-flex items-center">Contact Support</Button>
              </a>
              <a href="/how-it-works">
                <Button variant="outline" className="inline-flex items-center">Learn More</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
