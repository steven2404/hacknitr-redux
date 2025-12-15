import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { VerticalText } from '@/components/VerticalText';
import { Marquee } from '@/components/Marquee';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { TimelineSection } from '@/components/TimelineSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Vertical Text Decorations */}
      <VerticalText words={['THINK', 'BUILD', 'DISRUPT']} position="right" />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Marquee Banner */}
      <Marquee items={['student run', 'biggest hackathon', 'student run', 'biggest hackathon']} />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Marquee Banner Reverse */}
      <Marquee items={['36 hours', 'nit rourkela', '1000+ projects', 'innovate']} reverse />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Sponsors Section */}
      <SponsorsSection />
      
      {/* Marquee Banner */}
      <Marquee items={['think', 'build', 'disrupt', 'hack']} />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
