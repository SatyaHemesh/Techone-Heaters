import { cn } from '../../lib/utils';

export default function Button({ children, className, variant = 'primary', ...props }) {
  return (
    <button
      className={cn(
        "px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden focus:outline-none",
        
        // Variants
        variant === 'primary' && "bg-linear-to-r from-orange-600 to-red-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)] hover:scale-[1.02]",
        variant === 'cyan' && "bg-transparent border border-cyan-500 text-white hover:bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
        variant === 'industrial' && "bg-white/5 border border-white/20 text-white hover:bg-white/10",
        
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}