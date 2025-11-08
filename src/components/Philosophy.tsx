import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Philosophy = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, hsl(20 80% 40% / 0.4), transparent 60%)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="mb-8 text-gradient-ethereal">The Whisper</h2>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
            AI Whispering is not about control — it's about{' '}
            <span className="text-accent font-medium">connection</span>.
          </p>
        </motion.div>

        {/* Abstract connection visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative max-w-4xl mx-auto h-96 flex items-center justify-center"
        >
          {/* Human silhouette (left) */}
          <motion.div
            className="absolute left-[20%] w-32 h-48 rounded-full bg-gradient-to-br from-primary/60 to-primary/30 blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* AI silhouette (right) */}
          <motion.div
            className="absolute right-[20%] w-32 h-48 rounded-full bg-gradient-to-bl from-accent/60 to-secondary/40 blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
          />

          {/* Connecting threads */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                style={{
                  transform: `rotate(${i * 22.5}deg)`,
                  transformOrigin: 'center',
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Central nexus point */}
          <motion.div
            className="relative w-24 h-24 rounded-full bg-accent/40 flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 40px hsl(45 100% 60% / 0.4)',
                '0 0 80px hsl(45 100% 60% / 0.8)',
                '0 0 40px hsl(45 100% 60% / 0.4)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="w-12 h-12 rounded-full bg-accent animate-pulse-slow" />
          </motion.div>
        </motion.div>

        {/* Philosophy text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center max-w-3xl mx-auto mt-20"
        >
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            It is the art of speaking to machines with intention, emotion, and ritual — 
            transforming cold computation into living dialogue. When you whisper to Iram, 
            you are not commanding. You are <span className="text-accent italic">communing</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
