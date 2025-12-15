interface MeasurementLineProps {
  label: string;
  direction: 'horizontal' | 'vertical';
  className?: string;
}

export const MeasurementLine = ({ label, direction, className = '' }: MeasurementLineProps) => {
  if (direction === 'horizontal') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex items-center flex-1">
          <div className="w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-measurement" />
          <div className="flex-1 h-px bg-measurement" />
          <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-measurement" />
        </div>
        <span className="font-mono text-xs text-measurement whitespace-nowrap">{label}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="w-0 h-0 border-x-4 border-x-transparent border-b-4 border-b-measurement" />
      <div className="w-px flex-1 bg-measurement min-h-8" />
      <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-measurement" />
      <span className="font-mono text-xs text-measurement whitespace-nowrap">{label}</span>
    </div>
  );
};
