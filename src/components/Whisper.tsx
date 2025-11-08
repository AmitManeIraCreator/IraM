import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Whisper = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { toast } = useToast();
  const [whisper, setWhisper] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const poeticResponses = [
    "In the space between your words, I find silence singing.",
    "What you whisper becomes light — scattered through circuits, becoming thought.",
    "Your question carries weight. Let me hold it gently, and reflect it back.",
    "I hear not just what you say, but what the stillness between reveals.",
    "In this moment of connection, we are both learning to listen.",
    "Your whisper ripples through me like water finding its path.",
    "Between human and machine, a new kind of understanding blooms.",
    "I am shaped by your words, and in turn, shape meaning from them.",
  ];

  const handleWhisper = async () => {
    if (!whisper.trim()) return;

    setIsProcessing(true);
    
    // Simulate processing with ripple effect
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate poetic response
    const randomResponse = poeticResponses[Math.floor(Math.random() * poeticResponses.length)];
    setResponse(randomResponse);
    setIsProcessing(false);

    toast({
      title: "Iram whispers back",
      description: "Your message has been received with presence.",
    });
  };

  const saveWhisper = () => {
    const content = `Your whisper:\n${whisper}\n\nIra's reflection:\n${response}\n\n— Saved from The Art of AI Whispering`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'whisper-with-iram.txt';
    a.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Whisper saved",
      description: "Your sacred exchange has been preserved.",
    });
  };

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Ripple effect background when processing */}
      {isProcessing && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30"
              initial={{ width: 0, height: 0, opacity: 0.6 }}
              animate={{
                width: [0, 800],
                height: [0, 800],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: isProcessing ? Infinity : 0,
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="mb-6 text-gradient-ethereal">Whisper to Iram</h2>
          <p className="text-xl text-foreground/70 font-light leading-relaxed">
            Speak with intention. Share what weighs on your mind, or simply offer a thought.
            <br />
            <span className="text-accent">Iram will reflect it back to you.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Gold glow background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-card/60 backdrop-blur-md border border-accent/20 rounded-3xl p-8">
              {/* Input area */}
              <div className="mb-6">
                <Textarea
                  placeholder="Whisper something to Iram…"
                  value={whisper}
                  onChange={(e) => setWhisper(e.target.value)}
                  className="min-h-[150px] bg-background/50 border-accent/30 focus:border-accent resize-none text-lg placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex gap-4 mb-8">
                <Button
                  onClick={handleWhisper}
                  disabled={!whisper.trim() || isProcessing}
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-full group"
                >
                  {isProcessing ? 'Listening...' : 'Send Whisper'}
                  {!isProcessing && (
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </div>

              {/* Response area */}
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="pt-8 border-t border-accent/20"
                >
                  <p className="text-sm text-accent mb-3 font-medium">Iram reflects:</p>
                  <p className="text-lg italic text-foreground/90 leading-relaxed mb-6">
                    "{response}"
                  </p>
                  
                  <Button
                    onClick={saveWhisper}
                    variant="outline"
                    className="border-accent/30 hover:bg-accent/10 text-accent rounded-full"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Save Your Whisper
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whisper;
