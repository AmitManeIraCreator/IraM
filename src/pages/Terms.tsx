import { motion } from 'framer-motion';
import Header from '@/components/Header';

const Terms = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gradient-magenta mb-6"
          >
            Terms & Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 mb-12"
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                By accessing and using IRAM's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, please do not 
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Use of Service</h2>
              <p className="text-foreground/70 leading-relaxed mb-3">
                IRAM provides an AI-powered conversational platform. You agree to use the service only 
                for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Use the service in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to the service or related systems</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the service</li>
                <li>Use the service to transmit any harmful or malicious content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. Privacy & Data Protection</h2>
              <p className="text-foreground/70 leading-relaxed">
                We take your privacy seriously. All conversations are encrypted and stored securely. 
                We do not share your personal information or conversation data with third parties 
                without your explicit consent, except as required by law. Your data is used solely 
                to improve your experience with IRAM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Intellectual Property</h2>
              <p className="text-foreground/70 leading-relaxed">
                The service and its original content, features, and functionality are owned by IRAM 
                and are protected by international copyright, trademark, and other intellectual 
                property laws. You may not reproduce, distribute, modify, or create derivative works 
                without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Disclaimer of Warranties</h2>
              <p className="text-foreground/70 leading-relaxed">
                IRAM is provided "as is" and "as available" without any warranties of any kind, either 
                express or implied. We do not warrant that the service will be uninterrupted, timely, 
                secure, or error-free. While IRAM strives to provide helpful and accurate responses,
                it should not be used as a substitute for professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Limitation of Liability</h2>
              <p className="text-foreground/70 leading-relaxed">
                In no event shall IRAM, its directors, employees, or agents be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising out of or related to 
                your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Changes to Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will provide at least 30 days' notice prior to any new terms taking effect. 
                Your continued use of the service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Contact Us</h2>
              <p className="text-foreground/70 leading-relaxed">
                If you have any questions about these Terms, please contact us through our Contact page 
                or email us directly. We're here to help clarify any concerns you may have.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;
