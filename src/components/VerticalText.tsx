import { motion } from 'framer-motion';

interface VerticalTextProps {
  words: string[];
  position: 'left' | 'right';
}

export const VerticalText = ({ words, position }: VerticalTextProps) => {
  return (
    <div
      className={`fixed ${position === 'left' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-1`}
    >
      {words.map((word, wordIndex) => (
        <div key={word} className="flex flex-col items-center">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={`${word}-${letterIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (wordIndex * word.length + letterIndex) * 0.05 }}
              className={`font-mono text-xs tracking-widest ${
                wordIndex === 1 ? 'font-bold text-foreground' : 'text-muted-foreground'
              }`}
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <div className="h-4" />}
        </div>
      ))}
    </div>
  );
};
