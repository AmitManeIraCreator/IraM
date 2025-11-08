import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Experiences from '@/components/Experiences';
import Whisper from '@/components/Whisper';
import VoiceAvatar from '@/components/VoiceAvatar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

const Index = () => {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Header />
      
      <main className="relative pt-16">
        <Hero />
        <About />
        <Philosophy />
        <Experiences />
        <Whisper />
        <Footer />
      </main>

      <VoiceAvatar />
    </>
  );
};

export default Index;
