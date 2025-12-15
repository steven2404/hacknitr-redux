import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
        >
          What is <span className="font-sketch text-sketch-blue">Hack NITR</span> ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          HackNITR isn't just another hackathon—it's India's fastest-growing 36-hour coding battleground, 
          where <span className="text-foreground font-semibold">10,000+ innovators</span> and{' '}
          <span className="text-foreground font-semibold">4,000+ community members</span> unite to build 
          real-world tech solutions. HackNITR challenges you to dream big, code harder, and create impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {['36 Hours', 'In-Person', 'Free Entry'].map((item, index) => (
            <div
              key={item}
              className="bg-background border border-line rounded-lg p-6 hover:border-primary transition-colors"
            >
              <span className="font-sketch text-2xl text-sketch-blue">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
