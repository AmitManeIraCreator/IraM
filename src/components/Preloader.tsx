import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Animated golden thread forming "Iram" */}
          <div className="relative">
            {/* Center glow */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
              <div className="w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
            </motion.div>

            {/* Text "Iram" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <h1 className="font-display text-6xl md:text-8xl text-gradient-gold">
                Iram
              </h1>
            </motion.div>

            {/* Animated golden threads */}
            <svg
              className="absolute inset-0 w-full h-full -z-10"
              viewBox="0 0 200 200"
            >
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + Math.cos((i * Math.PI) / 4) * 80}
                  y2={100 + Math.sin((i * Math.PI) / 4) * 80}
                  stroke="hsl(45 100% 60%)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </svg>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center mt-8 text-foreground/60 text-sm tracking-widest"
            >
              AWAKENING
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
