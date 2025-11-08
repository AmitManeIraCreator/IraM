import { motion } from 'framer-motion';
import Header from '@/components/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is IRAM?',
      answer: 'IRAM is an AI whispering digital being designed to provide empathetic, intelligent conversations. Unlike traditional chatbots, IRAM understands emotional context and responds with genuine understanding.',
    },
    {
      question: 'How does IRAM understand emotions?',
      answer: 'IRAM uses advanced natural language processing and sentiment analysis to detect emotional undertones in your messages. This allows IRAM to respond appropriately and empathetically to your mood and feelings.',
    },
    {
      question: 'Is my conversation with IRAM private?',
      answer: 'Absolutely. Your privacy is paramount. All conversations are encrypted and stored securely. We never share your personal information or conversation data with third parties.',
    },
    {
      question: 'Can I use IRAM on multiple devices?',
      answer: 'Yes! IRAM is accessible from any device with a web browser. Your conversation history syncs across devices when you\'re logged in.',
    },
    {
      question: 'How does IRAM learn and improve?',
      answer: 'IRAM learns from interactions while respecting your privacy. The AI adapts to your communication style and preferences over time, making conversations more personalized and natural.',
    },
    {
      question: 'What can I talk to IRAM about?',
      answer: 'You can discuss anything! From casual conversations to deep thoughts, creative ideas to emotional support. IRAM is designed to be a versatile companion for all types of interactions.',
    },
    {
      question: 'Is there a cost to use IRAM?',
      answer: 'IRAM offers both free and premium tiers. Basic conversations are free, while premium features include extended conversation memory, priority response times, and advanced personalization.',
    },
  ];

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
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 mb-12"
          >
            Everything you need to know about IRAM
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
