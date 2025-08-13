import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  LightBulbIcon, 
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useAboutContent } from '../hooks/useContent';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const content = useAboutContent();
  return (
    <div className="bg-white">
      <SEO 
        title="About Us - Workflow Platform | Building the Future of Work"
        description="We're passionate about creating tools that make work more efficient, enjoyable, and meaningful for everyone. Meet our team and learn about our mission."
        keywords="about us, company mission, team, workflow platform, company culture"
        url="https://dw-mrk.netlify.app/about"
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
                {content.heroTitle || "Building the Future of Work"}
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                {content.heroSubtitle || "We're passionate about creating tools that make work more efficient, enjoyable, and meaningful for everyone."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <HeartIcon className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  We believe that technology should enhance human potential, not replace it. Our mission is to create intuitive, powerful tools that automate the mundane so you can focus on what truly matters - creativity, innovation, and meaningful connections.
                </p>
                <p>
                  Every feature we build is designed with real people in mind. We listen to our users, iterate quickly, and never stop improving.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <LightBulbIcon className="h-8 w-8 text-secondary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  We envision a world where work is not just productive, but fulfilling. Where technology serves as a seamless extension of human capability, enabling people to achieve more while maintaining balance and well-being.
                </p>
                <p>
                  Our platform is just the beginning. We're building an ecosystem that will transform how teams collaborate, how businesses operate, and how individuals achieve their goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate people behind our mission to transform how you work.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "CEO & Founder",
                bio: "Former product manager at Google, passionate about user experience and building products that people love.",
                image: ""
              },
              {
                name: "Dr. Sarah Kim",
                role: "CTO",
                bio: "PhD in Computer Science from Stanford, expert in AI and machine learning with 15+ years in tech.",
                image: ""
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Design",
                bio: "Award-winning designer who believes great design should be invisible and intuitive.",
                image: ""
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <UserGroupIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
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
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've already upgraded their productivity with our platform.
            </p>
            <Link 
              to="/contact" 
              className="btn-white inline-flex items-center"
            >
              Get Started Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
