import Stars from "./Stars.jsx";

export default function RatingSummary({ reviews = [] }) {
  const total = reviews.length || 1;
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1);
  
  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length
  }));
  
  return (
    <div className="rounded-3xl bg-white border shadow-soft p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-extrabold text-slate-900">
            {avg.toFixed(1)}
          </div>
          <Stars rating={avg} size="text-lg" />
          <div className="text-sm text-slate-500 mt-1">
            {reviews.length} reviews
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-slate-900">
            100% would recommend
          </div>
          <div className="text-xs text-slate-500">Auburn, CA locals</div>
        </div>
      </div>
      
      <div className="mt-5 space-y-2">
        {counts.map(({ star, count }) => {
          const pct = Math.round((count / total) * 100);
          return (
            <div key={star} className="flex items-center gap-2">
              <div className="w-10 text-xs font-semibold text-slate-700">
                {star}★
              </div>
              <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-amber-400" style={{ width: `${pct}%` }} />
              </div>
              <div className="w-8 text-xs text-slate-500 text-right">
                {pct}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
