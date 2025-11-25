export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <div className="text-xs font-bold tracking-widest uppercase text-mm-purple">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-1 text-3xl font-extrabold text-slate-900 font-poppins">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}
