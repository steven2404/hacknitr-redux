import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Communities', icon: '🌐' },
  { value: 1000, suffix: '+', label: 'Projects', icon: '💻' },
  { value: 11500, suffix: '+', label: 'Registrations', icon: '📝' },
  { value: 600, suffix: '+', label: 'Colleges', icon: '🎓' },
  { value: 15, suffix: '+', label: 'Countries', icon: '🌍' },
];

const AnimatedNumber = ({ value, suffix = '', inView }: { value: number; suffix?: string; inView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const displayValue = useSpring(rounded, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      count.set(value);
    }
  }, [inView, value, count]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return unsubscribe;
  }, [displayValue]);

  return (
    <motion.span 
      className="font-sketch text-5xl sm:text-6xl md:text-7xl text-sketch-blue block"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {display.toLocaleString()}{suffix}
    </motion.span>
  );
};

const StatCard = ({ stat, index, inView }: { stat: Stat; index: number; inView: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      className="text-center p-6 rounded-xl bg-card/50 border border-line hover:border-primary transition-colors relative overflow-hidden group"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, hsl(var(--primary) / 0.15), transparent 50%)`,
        }}
      />

      <motion.span 
        className="text-4xl block mb-4"
        animate={{ 
          y: inView ? [0, -10, 0] : 0,
          rotate: inView ? [0, 10, -10, 0] : 0,
        }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
      >
        {stat.icon}
      </motion.span>

      <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
      
      <motion.p 
        className="font-mono text-sm text-muted-foreground mt-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {stat.label}
      </motion.p>

      {/* Animated progress bar */}
      <div className="w-full h-1 mt-4 rounded-full overflow-hidden bg-secondary">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: '100%', opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary/60 relative"
        >
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-4"
      >
        <motion.span
          initial={{ display: "inline-block" }}
          whileInView={{ rotate: [0, -5, 5, 0] }}
          transition={{ delay: 0.5 }}
        >
          STATS
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-16 max-w-lg mx-auto"
      >
        Numbers that showcase our incredible journey
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
        ))}
      </div>
    </section>
  );
};