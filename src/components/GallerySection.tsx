import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
];

const ImageCard = ({ src, index }: { src: string; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        zIndex: 10,
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl"
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={src}
          alt={`HackNITR Gallery ${index + 1}`}
          className="w-72 h-48 object-cover"
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-primary/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* View label */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-mono text-xs text-foreground">View Memory</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const smoothX1 = useSpring(x1, { stiffness: 100, damping: 30 });
  const smoothX2 = useSpring(x2, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} className="py-20 px-4 overflow-hidden relative">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-2xl sm:text-3xl font-bold text-center mb-4 relative z-10"
      >
        HOW'S THE{' '}
        <motion.span 
          className="font-sketch text-sketch-blue inline-block"
          whileInView={{ rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          JOURNEY
        </motion.span>
        {' '}SO FAR
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 relative z-10"
      >
        HackNITR united 11,500+ registrations, 600+ colleges, and 4,000+ community innovators 
        under one banner of creativity and collaboration.
      </motion.p>

      {/* First row - scrolls left */}
      <motion.div 
        className="flex gap-6 mb-6"
        style={{ x: smoothX1 }}
      >
        {[...galleryImages, ...galleryImages].map((src, index) => (
          <ImageCard key={`row1-${index}`} src={src} index={index} />
        ))}
      </motion.div>

      {/* Second row - scrolls right */}
      <motion.div 
        className="flex gap-6"
        style={{ x: smoothX2 }}
      >
        {[...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()].map((src, index) => (
          <ImageCard key={`row2-${index}`} src={src} index={index} />
        ))}
      </motion.div>

      {/* Gradient overlays for seamless look */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
    </section>
  );
};