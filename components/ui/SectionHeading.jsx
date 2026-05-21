export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-0.5 w-8 bg-cyan-500"></div>
        <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm transition-colors duration-300">{subtitle}</span>
        <div className="h-0.5 w-8 bg-cyan-500"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight transition-colors duration-300">
        {title}
      </h2>
      <div className="mt-6 w-24 h-1 bg-linear-to-r from-orange-600 to-red-600"></div>
    </div>
  );
}