import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What could be the size of the team?',
    answer: "We're only looking for groups of 2 to 4 heroes this time. No solo adventurers allowed. Gather your buddies and get ready for an epic adventure together!",
  },
  {
    question: 'What is the participation fee?',
    answer: 'Only a creative mind, enthusiasm, and interest are required to participate in the hackathon. In short, the hackathon is entirely free and without monetary charges.',
  },
  {
    question: 'Will my travel expenses be reimbursed?',
    answer: 'Since HackNITR 7.0 is a student-run hackathon, we will not be able to cover your travel expenses.',
  },
  {
    question: 'Who can participate?',
    answer: 'Any student with a zeal to innovate and have some fun with creativity can apply. But the status of your application can be changed anytime by the organizing team.',
  },
  {
    question: 'Can I participate online?',
    answer: 'No, since HackNITR 7.0 is a completely offline hackathon, online participation is not encouraged.',
  },
  {
    question: 'What all things do you need to bring while attending the hackathon?',
    answer: 'You should bring your laptop, chargers, extension cords, and any other hardware you might need. A valid govt. ID and signed undertaking form from your college are mandatory.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faqs" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        FAQ's
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-line rounded-lg px-6 bg-card hover:border-primary transition-colors"
              >
                <AccordionTrigger className="font-mono text-sm md:text-base text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
