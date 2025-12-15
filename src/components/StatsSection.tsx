import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Communities' },
  { value: 1000, suffix: '+', label: 'Projects' },
  { value: 11500, suffix: '+', label: 'Registrations' },
  { value: 600, suffix: '+', label: 'Colleges' },
  { value: 15, suffix: '+', label: 'Countries' },
];

const AnimatedNumber = ({ value, suffix = '', inView }: { value: number; suffix?: string; inView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="font-sketch text-5xl sm:text-6xl md:text-7xl text-sketch-blue">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="py-20 px-4 relative" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        STATS
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
            <p className="font-mono text-sm text-muted-foreground mt-2">{stat.label}</p>
            <div className="w-full h-2 mt-4 rounded-full overflow-hidden bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                className="h-full bg-gradient-to-r from-primary to-primary/60"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
