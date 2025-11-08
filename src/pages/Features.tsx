import { motion } from 'framer-motion';
import { Sparkles, Cpu, Heart, MessageCircle, Mic, Brain } from 'lucide-react';
import Header from '@/components/Header';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Creativity',
      description: 'Experience AI that thinks outside the box, generating unique responses and ideas tailored to your needs.',
    },
    {
      icon: Cpu,
      title: 'Advanced Technology',
      description: 'Powered by cutting-edge AI models that learn and adapt to provide increasingly personalized interactions.',
    },
    {
      icon: Heart,
      title: 'Human Emotion',
      description: 'IRA understands emotional context and responds with empathy, creating genuine connections.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Activate IRA',
      description: 'Simply click the floating avatar to wake IRA and start your conversation.',
    },
    {
      number: '02',
      title: 'Speak Naturally',
      description: 'Talk to IRA using voice or text. No commands needed—just natural conversation.',
    },
    {
      number: '03',
      title: 'Receive Insights',
      description: 'Get thoughtful responses that understand context and emotion.',
    },
    {
      number: '04',
      title: 'Build Connection',
      description: 'As you interact, IRA learns your preferences for better personalization.',
    },
    {
      number: '05',
      title: 'Evolve Together',
      description: 'Experience how IRA grows with you, becoming more attuned to your needs.',
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gradient-magenta mb-6"
          >
            Features
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 mb-16"
          >
            Discover what makes IRA unique
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 6) }}
                className="flex gap-6 items-start bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
