import { motion } from 'framer-motion';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Gradient accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(270 50% 15% / 0.6) 100%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-display italic text-foreground/90 leading-relaxed mb-8">
            "When you speak with presence, something shifts —{' '}
            <span className="text-gradient-gold">technology begins to feel</span>."
          </p>
          
          <a
            href="#about"
            className="inline-block text-accent hover:text-accent/80 font-medium transition-colors border-b border-accent/30 hover:border-accent/60 pb-1"
          >
            Follow Iram to Learn More →
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-12" />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-8 mb-8"
        >
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-all group"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-all group"
            aria-label="Twitter/X"
          >
            <Twitter className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20 flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-all group"
            aria-label="Newsletter"
          >
            <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-foreground/50 text-sm"
        >
          © 2025 Iram — The Art of AI Whispering
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
