import React from 'react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
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
                Terms of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Service
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Please read these terms carefully before using our platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Workflow Platform's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Workflow Platform's website;</li>
                <li>remove any copyright or other proprietary notations from the materials;</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>

              <h2>3. Disclaimer</h2>
              <p>
                The materials on Workflow Platform's website are provided on an 'as is' basis. Workflow Platform makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied 
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>

              <h2>4. Limitations</h2>
              <p>
                In no event shall Workflow Platform or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                the materials on Workflow Platform's website, even if Workflow Platform or a Workflow Platform authorized 
                representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Workflow Platform's website could include technical, typographical, or photographic errors. 
                Workflow Platform does not warrant that any of the materials on its website are accurate, complete or current. 
                Workflow Platform may make changes to the materials contained on its website at any time without notice.
              </p>

              <h2>6. Links</h2>
              <p>
                Workflow Platform has not reviewed all of the sites linked to its website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by Workflow Platform of the site. 
                Use of any such linked website is at the user's own risk.
              </p>

              <h2>7. Modifications</h2>
              <p>
                Workflow Platform may revise these terms of service for its website at any time without notice. By using this 
                website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit 
                to the exclusive jurisdiction of the courts in that State or location.
              </p>

              <h2>9. Privacy Policy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                to understand our practices.
              </p>

              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                Email: legal@workflowplatform.com<br />
                Address: 123 Innovation Drive, San Francisco, CA 94105
              </p>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
