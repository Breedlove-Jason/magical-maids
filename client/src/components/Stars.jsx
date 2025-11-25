export default function Stars({ rating = 0, size = "text-base" }) {
  const rounded = Math.round(rating * 2) / 2;
  return (
    <div className={`flex items-center gap-0.5 ${size}`} aria-label={`${rating} stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rounded ? "text-amber-400" : "text-slate-300"}>
          ★
        </span>
      ))}
    </div>
  );
}
