import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Footer = () => {
  return (
    <motion.footer 
      className="py-12 px-4 border-t border-line relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 100%, hsl(var(--primary)) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            variants={itemVariants}
          >
            <motion.div 
              className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center relative overflow-hidden group cursor-pointer"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-lg font-bold relative z-10">HN</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-sketch-blue"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div>
              <motion.span 
                className="font-sketch text-2xl text-sketch-blue"
                whileHover={{ scale: 1.05 }}
              >
                HackNITR
              </motion.span>
              <motion.span 
                className="font-mono text-lg ml-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                7.0
              </motion.span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center relative overflow-hidden group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={18} className="relative z-10 group-hover:text-primary-foreground transition-colors" />
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Tooltip */}
                <motion.span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {social.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
        >
          <motion.p 
            className="font-mono text-xs text-muted-foreground"
            whileHover={{ scale: 1.02 }}
          >
            Made with{' '}
            <motion.span
              className="inline-block text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            {' '}by DSC NIT Rourkela
          </motion.p>
          <motion.p 
            className="font-mono text-xs text-muted-foreground"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
          >
            © 2024 HackNITR. All rights reserved.
          </motion.p>
        </motion.div>

        {/* Animated line */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: "0%", left: "50%" }}
          whileInView={{ width: "100%", left: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </motion.footer>
  );
};