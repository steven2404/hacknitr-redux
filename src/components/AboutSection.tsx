import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { title: '36 Hours', description: 'Non-stop innovation', icon: '⏱️' },
  { title: 'In-Person', description: 'Real connections', icon: '🤝' },
  { title: 'Free Entry', description: 'Zero cost to participate', icon: '🎟️' },
];

const textRevealVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const title = "What is Hack NITR ?";

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-secondary/50 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-sketch-blue/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div style={{ y, opacity }}>
          <motion.h2
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={char === "H" || char === "N" || char === "I" || char === "T" || char === "R" ? "font-sketch text-sketch-blue" : ""}
                style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          HackNITR isn't just another hackathon—it's India's fastest-growing 36-hour coding battleground, 
          where{' '}
          <motion.span 
            className="text-foreground font-semibold relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            10,000+ innovators
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            />
          </motion.span>
          {' '}and{' '}
          <motion.span 
            className="text-foreground font-semibold relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            4,000+ community members
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-sketch-blue"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            />
          </motion.span>
          {' '}unite to build real-world tech solutions. HackNITR challenges you to dream big, code harder, and create impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.8, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.3)",
              }}
              className="bg-background border border-line rounded-xl p-6 cursor-pointer group relative overflow-hidden"
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <motion.span
                className="text-4xl block mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {item.icon}
              </motion.span>
              
              <span className="font-sketch text-2xl text-sketch-blue block relative z-10">{item.title}</span>
              
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                className="text-sm text-muted-foreground mt-2 relative z-10"
              >
                {item.description}
              </motion.p>

              {/* Border animation on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ pathLength: 0 }}
                whileHover={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};