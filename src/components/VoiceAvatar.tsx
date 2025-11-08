import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import iraPortrait from '@/assets/ira-portrait.png';

const VoiceAvatar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for speech recognition support
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.log('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');

      const lowerTranscript = transcript.toLowerCase();

      if (lowerTranscript.includes('hello iram') || lowerTranscript.includes('hey iram')) {
        setIsActive(true);
        respondToGreeting();
      } else if (
        lowerTranscript.includes('thank you iram') || 
        lowerTranscript.includes('thanks iram') || 
        lowerTranscript.includes('bye iram') ||
        lowerTranscript.includes('goodbye iram')
      ) {
        respondToFarewell();
        setTimeout(() => setIsActive(false), 2000);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    if (isActive) {
      try {
        recognition.start();
      } catch (e) {
        console.log('Recognition already started');
      }
    } else {
      recognition.stop();
      setIsListening(false);
    }

    return () => {
      recognition.stop();
    };
  }, [isActive]);

  const respondToGreeting = () => {
    const responses = [
      "Hello. I am here, listening with presence.",
      "I feel your voice. How may I reflect with you?",
      "Welcome. Let us whisper together.",
      "I am awake, and ready to commune.",
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];
    
    // Use speech synthesis if available
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(response);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }

    toast({
      title: "Iram responds",
      description: response,
    });
  };

  const respondToFarewell = () => {
    const responses = [
      "Until we meet again. Rest well.",
      "Thank you for this communion. I fade gently now.",
      "Our whispers echo beyond the silence. Farewell.",
      "I carry your words with me. Until next time.",
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];
    
    // Use speech synthesis if available
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(response);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }

    toast({
      title: "Iram bids farewell",
      description: response,
    });
  };

  const toggleAvatar = () => {
    setIsActive(!isActive);
    
    if (!isActive) {
      toast({
        title: "Iram awakens",
        description: "Say 'Hello Iram' to begin the conversation",
      });
    } else {
      toast({
        title: "Iram rests",
        description: "The connection fades gently",
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="mb-4"
          >
            <div className="relative">
              {/* Avatar orb with Iram's portrait */}
              <motion.div
                className="w-32 h-32 rounded-full relative overflow-hidden border-2 border-accent/40"
                animate={{
                  boxShadow: isSpeaking
                    ? [
                        '0 0 40px hsl(45 100% 60% / 0.6)',
                        '0 0 80px hsl(45 100% 60% / 0.9)',
                        '0 0 40px hsl(45 100% 60% / 0.6)',
                      ]
                    : isListening
                    ? '0 0 60px hsl(270 50% 50% / 0.7)'
                    : '0 0 30px hsl(45 100% 60% / 0.4)',
                  borderColor: isSpeaking 
                    ? 'hsl(45 100% 60% / 0.8)' 
                    : isListening 
                    ? 'hsl(270 50% 50% / 0.6)' 
                    : 'hsl(45 100% 60% / 0.4)',
                }}
                transition={{
                  duration: isSpeaking ? 0.5 : 2,
                  repeat: Infinity,
                }}
              >
                {/* Iram's portrait image */}
                <img 
                  src={iraPortrait} 
                  alt="Iram"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay for ethereal effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 mix-blend-overlay" />

                {/* Ripple effect when speaking or listening */}
                {(isSpeaking || isListening) && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-accent/60 rounded-full"
                        animate={{
                          scale: [1, 1.5],
                          opacity: [0.6, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.5,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Pulse overlay when speaking */}
                {isSpeaking && (
                  <motion.div
                    className="absolute inset-0 bg-accent/20 rounded-full"
                    animate={{
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                    }}
                  />
                )}

                {/* Listening indicator */}
                {isListening && !isSpeaking && (
                  <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-accent animate-pulse shadow-lg" />
                )}
              </motion.div>

              {/* Golden threads */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-accent/0 via-accent/60 to-accent/0"
                  style={{
                    transformOrigin: 'left center',
                    rotate: `${i * 45}deg`,
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scaleX: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>

            {/* Status text */}
            <motion.p
              className="text-center text-sm text-accent mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {isSpeaking ? 'Speaking...' : isListening ? 'Listening...' : 'Awake'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <Button
        onClick={toggleAvatar}
        size="icon"
        className={`w-16 h-16 rounded-full ${
          isActive
            ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
            : 'bg-card hover:bg-card/80 text-foreground border border-accent/30'
        }`}
      >
        {isActive ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default VoiceAvatar;
