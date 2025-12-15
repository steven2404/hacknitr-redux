import { motion } from 'framer-motion';

interface TimelineItem {
  step: number;
  title: string;
  duration: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    step: 1,
    title: 'Registrations Open',
    duration: 'Duration - 5th Sept to 20th November',
    description: 'All Aboard! Save your spot at India\'s largest student-run hackathon.',
  },
  {
    step: 2,
    title: 'Acceptance mails roll out',
    duration: 'Duration - 1st week of December',
    description: 'The Golden Ticket Arrives - Keep an eye on your inbox.',
  },
  {
    step: 3,
    title: 'Registrations Close',
    duration: 'Last date - 20th November at 11:59 PM',
    description: 'Gate Closes - Last chance to join the hacker caravan.',
  },
  {
    step: 4,
    title: 'On-spot registration at venue',
    duration: 'Final check-in',
    description: 'Verify, settle in, and gear up to hack.',
  },
];

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        TIMELINE
      </motion.h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-line transform md:-translate-x-1/2" />

        {timelineItems.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`relative flex items-start mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Step Number */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
              <span className="font-sketch text-3xl text-primary">{item.step}</span>
            </div>

            {/* Content */}
            <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
              <div className="bg-card border border-line rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="font-mono text-lg font-bold mb-2">{item.title}</h3>
                <p className="font-mono text-xs text-sketch-blue mb-3">{item.duration}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
