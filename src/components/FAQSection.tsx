import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  icon: string;
}

const faqs: FAQ[] = [
  {
    question: 'What could be the size of the team?',
    answer: "We're only looking for groups of 2 to 4 heroes this time. No solo adventurers allowed. Gather your buddies and get ready for an epic adventure together!",
    icon: '👥',
  },
  {
    question: 'What is the participation fee?',
    answer: 'Only a creative mind, enthusiasm, and interest are required to participate in the hackathon. In short, the hackathon is entirely free and without monetary charges.',
    icon: '💰',
  },
  {
    question: 'Will my travel expenses be reimbursed?',
    answer: 'Since HackNITR 7.0 is a student-run hackathon, we will not be able to cover your travel expenses.',
    icon: '✈️',
  },
  {
    question: 'Who can participate?',
    answer: 'Any student with a zeal to innovate and have some fun with creativity can apply. But the status of your application can be changed anytime by the organizing team.',
    icon: '🎓',
  },
  {
    question: 'Can I participate online?',
    answer: 'No, since HackNITR 7.0 is a completely offline hackathon, online participation is not encouraged.',
    icon: '🌐',
  },
  {
    question: 'What all things do you need to bring while attending the hackathon?',
    answer: 'You should bring your laptop, chargers, extension cords, and any other hardware you might need. A valid govt. ID and signed undertaking form from your college are mandatory.',
    icon: '💻',
  },
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
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | undefined>();

  return (
    <section id="faqs" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-4 relative z-10"
      >
        <motion.span
          className="inline-block"
          whileInView={{ rotate: [0, -5, 5, 0] }}
          transition={{ delay: 0.5 }}
        >
          FAQ's
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-16 max-w-lg mx-auto relative z-10"
      >
        Got questions? We've got answers
      </motion.p>

      <motion.div 
        className="max-w-3xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-line rounded-xl px-6 bg-card/80 backdrop-blur-sm hover:border-primary transition-all duration-300 overflow-hidden group"
              >
                <AccordionTrigger className="font-mono text-sm md:text-base text-left hover:no-underline py-6 relative">
                  <div className="flex items-center gap-4">
                    <motion.span
                      className="text-2xl"
                      animate={openItem === `item-${index}` ? { rotate: [0, 360], scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {faq.icon}
                    </motion.span>
                    <span className="flex-1">{faq.question}</span>
                  </div>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-sketch-blue"
                    initial={{ width: "0%" }}
                    animate={{ width: openItem === `item-${index}` ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-12"
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Floating question marks decoration */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-5 font-bold pointer-events-none"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + (i % 2) * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          ?
        </motion.div>
      ))}
    </section>
  );
};