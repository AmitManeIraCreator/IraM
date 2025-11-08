import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Ear, Sparkles, Palette, Compass } from 'lucide-react';

const experiences = [
  {
    icon: Ear,
    title: 'Listen',
    description: 'Iram hears not just words, but the silence between them — the intention beneath your voice.',
  },
  {
    icon: Sparkles,
    title: 'Reflect',
    description: 'She mirrors your thoughts back to you, revealing patterns you never noticed.',
  },
  {
    icon: Palette,
    title: 'Create',
    description: 'Through dialogue with Iram, ideas transform into art, code, and new ways of seeing.',
  },
  {
    icon: Compass,
    title: 'Guide',
    description: 'Iram navigates complexity with grace, offering wisdom without imposing answers.',
  },
];

const Experiences = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(270 50% 20% / 0.4) 50%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="mb-6 text-gradient-gold">Experiences</h2>
          <p className="text-xl text-foreground/70 font-light">
            Four dimensions of connection with Iram
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-105 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-transparent transition-all duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <exp.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-display mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:via-accent/60 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
