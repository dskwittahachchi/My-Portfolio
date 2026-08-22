import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ number, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-12", className)}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-cyber-cyan/70 tracking-widest">
          {number} //
        </span>
        <div className="h-[1px] w-12 bg-cyber-cyan/30" />
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-md">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-2 max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
