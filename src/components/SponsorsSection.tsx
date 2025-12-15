import { motion } from 'framer-motion';

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

export const SponsorsSection = () => {
  const tiers = ['alpha', 'beta', 'gamma', 'past'] as const;

  return (
    <section id="sponsors" className="py-20 px-4 bg-secondary/30">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        SPONSORS
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {tiers.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier);
          if (tierSponsors.length === 0) return null;

          return (
            <div key={tier}>
              <h3 className="font-mono text-lg text-center mb-8 text-muted-foreground">
                {tierLabels[tier]}
              </h3>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center`}>
                {tierSponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-background border border-line rounded-lg flex items-center justify-center hover:border-primary transition-all cursor-pointer ${tierStyles[tier]}`}
                  >
                    <span className="font-mono text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors">
                      {sponsor.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
