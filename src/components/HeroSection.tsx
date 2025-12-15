import { motion } from 'framer-motion';
import { MeasurementLine } from './MeasurementLine';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-mono text-xs sm:text-sm tracking-[0.3em] text-muted-foreground mb-8 text-center"
      >
        LARGEST STUDENT RUN HACKATHON
      </motion.p>

      {/* Main Title Container */}
      <div className="relative">
        {/* Top Measurement */}
        <div className="flex justify-center gap-4 mb-4">
          <MeasurementLine label="20cm" direction="horizontal" className="w-32 sm:w-48" />
          <MeasurementLine label="25cm" direction="horizontal" className="w-32 sm:w-48" />
        </div>

        {/* Title */}
        <div className="flex items-baseline justify-center gap-2 sm:gap-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            className="font-sketch text-6xl sm:text-8xl md:text-9xl text-sketch-blue relative"
            style={{
              textShadow: '2px 2px 0 hsl(var(--sketch-blue) / 0.3)',
            }}
          >
            Hack
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            className="font-sketch text-6xl sm:text-8xl md:text-9xl text-foreground relative"
            style={{
              fontFamily: 'serif',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              background: `repeating-linear-gradient(
                60deg,
                transparent,
                transparent 2px,
                hsl(var(--foreground) / 0.1) 2px,
                hsl(var(--foreground) / 0.1) 4px
              )`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
          >
            <span className="text-foreground" style={{ WebkitTextFillColor: 'initial' }}>NITR</span>
          </motion.div>
        </div>

        {/* Version Number */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="absolute -right-4 sm:-right-16 bottom-0 flex items-end gap-2"
        >
          <span className="font-sketch text-4xl sm:text-6xl text-foreground" style={{ fontWeight: 700 }}>7.0</span>
          <MeasurementLine label="5cm" direction="vertical" className="h-12" />
        </motion.div>

        {/* Bottom Measurement */}
        <div className="flex justify-center mt-4">
          <MeasurementLine label="0.5cm" direction="horizontal" className="w-16" />
        </div>
      </div>

      {/* Date & Location */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="font-mono text-lg sm:text-xl mt-12 text-center"
      >
        January 3rd–<span className="text-sketch-blue underline decoration-wavy">4th</span>, 2026 | NIT Rourkela
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8">
          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
            <path d="M4 4h16v16H4z" />
          </svg>
          Apply With Devfolio
        </Button>
        <Button size="lg" variant="outline" className="font-mono border-2 border-foreground hover:bg-foreground hover:text-background">
          <MessageCircle className="w-5 h-5 mr-2" />
          Join Discord
        </Button>
      </motion.div>
    </section>
  );
};
