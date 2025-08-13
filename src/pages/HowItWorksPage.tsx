import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon, 
  CogIcon, 
  ChartBarIcon,
  RocketLaunchIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      title: "Connect Your Tools",
      description: "Integrate with your existing workflow tools in just a few clicks. We support 100+ popular applications.",
      icon: CogIcon,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Set Your Goals",
      description: "Define what success looks like for your team. Our AI learns your preferences and adapts accordingly.",
      icon: ChartBarIcon,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Watch the Magic",
      description: "Our platform automatically optimizes your workflows, identifies bottlenecks, and suggests improvements.",
      icon: PlayIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Scale & Grow",
      description: "As your team grows, our platform scales with you. Advanced features unlock automatically.",
      icon: RocketLaunchIcon,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-white">
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
                How It{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Works
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Getting started is simple. Follow these four easy steps to transform your workflow and boost productivity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                See It in Action
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Watch how our platform transforms a typical workday from chaotic to streamlined in just minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Automated task management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Smart notifications</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PlayIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Demo Video</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to streamline your workflow and boost productivity.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Automation",
                description: "AI-powered automation that learns your patterns and optimizes your workflow.",
                icon: "🤖"
              },
              {
                title: "Real-time Sync",
                description: "All your data stays synchronized across devices and team members instantly.",
                icon: "⚡"
              },
              {
                title: "Advanced Analytics",
                description: "Deep insights into your productivity patterns and optimization opportunities.",
                icon: "📊"
              },
              {
                title: "Team Collaboration",
                description: "Built-in tools for seamless team communication and project management.",
                icon: "👥"
              },
              {
                title: "Custom Integrations",
                description: "Connect with your favorite tools through our extensive API and webhooks.",
                icon: "🔗"
              },
              {
                title: "Enterprise Security",
                description: "Bank-level security with SOC 2 compliance and end-to-end encryption.",
                icon: "🔒"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who've already transformed their workflow with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-white inline-flex items-center"
              >
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-outline-white inline-flex items-center"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
