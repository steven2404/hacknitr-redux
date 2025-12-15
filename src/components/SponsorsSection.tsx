import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Sponsor {
  name: string;
  tier: 'alpha' | 'beta' | 'gamma' | 'past';
}

const sponsors: Sponsor[] = [
  { name: 'Devfolio', tier: 'alpha' },
  { name: 'ETH India', tier: 'beta' },
  { name: 'Verbwire', tier: 'gamma' },
  { name: 'Lovable', tier: 'gamma' },
  { name: 'Orkes', tier: 'past' },
  { name: 'Quine', tier: 'past' },
  { name: 'MongoDB', tier: 'past' },
  { name: 'Auth0', tier: 'past' },
  { name: 'Replit', tier: 'past' },
  { name: 'Polygon', tier: 'past' },
];

const tierStyles = {
  alpha: 'col-span-full md:col-span-2 p-8',
  beta: 'col-span-1 p-6',
  gamma: 'col-span-1 p-4',
  past: 'col-span-1 p-3',
};

const tierLabels = {
  alpha: 'Alpha Sponsors',
  beta: 'Beta Sponsors',
  gamma: 'Gamma Sponsors',
  past: 'Past Sponsors',
};

const SponsorCard = ({ sponsor, index, tier }: { sponsor: Sponsor; index: number; tier: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ z: 50 }}
      className={`bg-background border border-line rounded-xl flex items-center justify-center cursor-pointer relative overflow-hidden group ${tierStyles[tier as keyof typeof tierStyles]}`}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-sketch-blue/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <motion.span 
        className="font-mono text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors relative z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        {sponsor.name}
      </motion.span>

      {/* Decorative corners */}
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-primary"
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-primary"
        transition={{ duration: 0.2, delay: 0.1 }}
      />
    </motion.div>
  );
};

export const SponsorsSection = () => {
  const tiers = ['alpha', 'beta', 'gamma', 'past'] as const;

  return (
    <section id="sponsors" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(var(--sketch-blue) / 0.05) 0%, transparent 50%)`,
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-4 relative z-10"
      >
        <motion.span
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            background: "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--primary)), hsl(var(--foreground)))",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SPONSORS
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-16 max-w-lg mx-auto relative z-10"
      >
        Backed by industry leaders who believe in innovation
      </motion.p>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10" style={{ perspective: "1000px" }}>
        {tiers.map((tier, tierIndex) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier);
          if (tierSponsors.length === 0) return null;

          return (
            <motion.div 
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tierIndex * 0.1 }}
            >
              <motion.h3 
                className="font-mono text-lg text-center mb-8 text-muted-foreground"
                whileInView={{ 
                  opacity: [0.5, 1],
                  scale: [0.95, 1],
                }}
                viewport={{ once: true }}
              >
                {tierLabels[tier]}
              </motion.h3>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center`}>
                {tierSponsors.map((sponsor, index) => (
                  <SponsorCard key={sponsor.name} sponsor={sponsor} index={index} tier={tier} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};