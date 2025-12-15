import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MeasurementLine } from './MeasurementLine';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { useRef } from 'react';

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
    },
  }),
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const hackLetters = "Hack".split("");
  const nitrLetters = "NITR".split("");

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          y: smoothY,
        }} 
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <motion.div style={{ opacity, scale }} className="relative z-10">
        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs sm:text-sm tracking-[0.3em] text-muted-foreground mb-8 text-center overflow-hidden"
        >
          {["LARGEST", "STUDENT", "RUN", "HACKATHON"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Main Title Container */}
        <div className="relative">
          {/* Top Measurement with stagger */}
          <motion.div 
            className="flex justify-center gap-4 mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MeasurementLine label="20cm" direction="horizontal" className="w-32 sm:w-48" />
            <MeasurementLine label="25cm" direction="horizontal" className="w-32 sm:w-48" />
          </motion.div>

          {/* Title with letter-by-letter animation */}
          <div className="flex items-baseline justify-center gap-2 sm:gap-4 perspective-1000">
            <div className="flex">
              {hackLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-sketch text-6xl sm:text-8xl md:text-9xl text-sketch-blue inline-block"
                  style={{
                    textShadow: '2px 2px 0 hsl(var(--sketch-blue) / 0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [-5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <div className="flex">
              {nitrLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + hackLetters.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-sketch text-6xl sm:text-8xl md:text-9xl text-foreground inline-block"
                  style={{
                    fontFamily: 'serif',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    color: 'hsl(var(--sketch-blue))',
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Version Number with floating animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -right-4 sm:-right-16 bottom-0 flex items-end gap-2"
          >
            <motion.span 
              className="font-sketch text-4xl sm:text-6xl text-foreground"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontWeight: 700 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              7.0
            </motion.span>
            <MeasurementLine label="5cm" direction="vertical" className="h-12" />
          </motion.div>

          {/* Bottom Measurement */}
          <motion.div 
            className="flex justify-center mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <MeasurementLine label="0.5cm" direction="horizontal" className="w-16" />
          </motion.div>
        </div>

        {/* Date & Location with reveal effect */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="font-mono text-lg sm:text-xl mt-12 text-center"
        >
          <motion.span
            initial={{ backgroundSize: "0% 2px" }}
            animate={{ backgroundSize: "100% 2px" }}
            transition={{ delay: 1.8, duration: 0.8 }}
            style={{
              backgroundImage: "linear-gradient(hsl(var(--sketch-blue)), hsl(var(--sketch-blue)))",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 100%",
            }}
          >
            January 3rd–4th, 2026
          </motion.span>
          {" | NIT Rourkela"}
        </motion.p>

        {/* CTA Buttons with stagger and hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 relative overflow-hidden group">
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                <path d="M4 4h16v16H4z" />
              </svg>
              Apply With Devfolio
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="lg" variant="outline" className="font-mono border-2 border-foreground hover:bg-foreground hover:text-background relative overflow-hidden group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-muted-foreground rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};