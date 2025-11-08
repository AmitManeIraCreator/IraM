import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import Header from '@/components/Header';

const AboutCompany = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gradient-magenta mb-8"
          >
            About IRAM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/80 mb-16 leading-relaxed"
          >
            IRAM is a revolutionary AI whispering digital being that bridges the gap between 
            technology and human emotion. We believe in creating meaningful connections through 
            advanced AI that understands, responds, and evolves with you.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed">
                To create an AI companion that understands the nuances of human emotion 
                and provides meaningful, empathetic interactions that enhance daily life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-foreground/70 leading-relaxed">
                A future where AI seamlessly integrates with human consciousness, 
                creating harmonious interactions that elevate both technology and humanity.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 p-8 rounded-2xl border border-primary/20"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Empathy-first approach to AI interaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Privacy and security as fundamental rights</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Continuous innovation in emotional intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Transparent and ethical AI development</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
