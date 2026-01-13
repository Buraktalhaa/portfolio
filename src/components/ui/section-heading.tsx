export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}