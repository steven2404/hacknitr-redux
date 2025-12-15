import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItem {
  step: number;
  title: string;
  duration: string;
  description: string;
  icon: string;
}

const timelineItems: TimelineItem[] = [
  {
    step: 1,
    title: 'Registrations Open',
    duration: 'Duration - 5th Sept to 20th November',
    description: 'All Aboard! Save your spot at India\'s largest student-run hackathon.',
    icon: '🚀',
  },
  {
    step: 2,
    title: 'Acceptance mails roll out',
    duration: 'Duration - 1st week of December',
    description: 'The Golden Ticket Arrives - Keep an eye on your inbox.',
    icon: '📧',
  },
  {
    step: 3,
    title: 'Registrations Close',
    duration: 'Last date - 20th November at 11:59 PM',
    description: 'Gate Closes - Last chance to join the hacker caravan.',
    icon: '🚪',
  },
  {
    step: 4,
    title: 'On-spot registration at venue',
    duration: 'Final check-in',
    description: 'Verify, settle in, and gear up to hack.',
    icon: '✅',
  },
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    [index % 2 === 0 ? -100 : 100, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, x }}
      className={`relative flex items-start mb-12 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Step Number with pulse effect */}
      <motion.div 
        className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
        <span className="font-sketch text-3xl text-primary relative z-10">{item.step}</span>
      </motion.div>

      {/* Content */}
      <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
        <motion.div 
          className="bg-card border border-line rounded-xl p-6 relative overflow-hidden group cursor-pointer"
          whileHover={{ 
            scale: 1.02, 
            borderColor: "hsl(var(--primary))",
            boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.2)",
          }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-sketch-blue/5 opacity-0 group-hover:opacity-100"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />

          {/* Icon */}
          <motion.span
            className="text-3xl block mb-3"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
          >
            {item.icon}
          </motion.span>

          <motion.h3 
            className="font-mono text-lg font-bold mb-2 relative z-10"
            whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
          >
            {item.title}
          </motion.h3>

          <motion.p 
            className="font-mono text-xs text-sketch-blue mb-3 relative z-10"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            {item.duration}
          </motion.p>

          <p className="text-sm text-muted-foreground relative z-10">{item.description}</p>

          {/* Animated underline */}
          <motion.div
            className={`absolute bottom-0 h-1 bg-gradient-to-r from-primary to-sketch-blue ${
              index % 2 === 0 ? 'right-0' : 'left-0'
            }`}
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const TimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-20 px-4 relative" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-4"
      >
        <motion.span
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="inline-block"
        >
          TIMELINE
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-16 max-w-lg mx-auto"
      >
        Your journey to HackNITR 7.0
      </motion.p>

      <div className="max-w-4xl mx-auto relative">
        {/* Static background line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-line/30 transform md:-translate-x-1/2" />
        
        {/* Animated progress line */}
        <motion.div 
          className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-sketch-blue to-primary transform md:-translate-x-1/2 origin-top"
          style={{ height: lineHeight }}
        />

        {timelineItems.map((item, index) => (
          <TimelineCard key={item.step} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};