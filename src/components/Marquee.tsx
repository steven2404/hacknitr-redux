interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

export const Marquee = ({ items, reverse = false, className = '' }: MarqueeProps) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden py-4 bg-secondary ${className}`}>
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <div className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center mr-3">
              <span className="text-xs">🌐</span>
            </div>
            <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
