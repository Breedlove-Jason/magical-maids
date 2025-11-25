import Stars from "./Stars.jsx";

export default function ReviewCard({ review }) {
  return (
    <div className="rounded-2xl bg-white border shadow-soft p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-bold text-slate-900">{review.customerName}</div>
          <div className="text-xs text-slate-500">
            {review.location} • {review.serviceName}
          </div>
        </div>
        <Stars rating={review.rating} />
      </div>
      
      <p className="mt-3 text-slate-700 text-sm leading-relaxed">
        {review.quote}
      </p>
      
      <div className="mt-3 text-xs text-slate-400">
        {new Date(review.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
