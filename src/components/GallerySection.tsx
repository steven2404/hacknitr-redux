import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
];

export const GallerySection = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-2xl sm:text-3xl font-bold text-center mb-4"
      >
        HOW'S THE <span className="font-sketch text-sketch-blue">JOURNEY</span> SO FAR
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
      >
        HackNITR united 11,500+ registrations, 600+ colleges, and 4,000+ community innovators 
        under one banner of creativity and collaboration.
      </motion.p>

      {/* Scrolling Gallery */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee">
          {[...galleryImages, ...galleryImages].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.1 }}
              className="flex-shrink-0"
            >
              <img
                src={src}
                alt={`HackNITR Gallery ${index + 1}`}
                className="w-64 h-44 object-cover rounded-lg border border-line hover:border-primary transition-colors"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
