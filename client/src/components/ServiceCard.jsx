export default function ServiceCard({ service }) {
  return (
    <div className="group rounded-3xl bg-white shadow-soft hover:shadow-lg transition overflow-hidden border">
      <img className="h-44 w-full object-cover" src={service.imageUrl} alt={service.name} />
      <div className="p-5">
        {service.popular && (
          <span className="text-xs font-bold text-white bg-mm-purple px-2 py-1 rounded-full">
            Popular
          </span>
        )}
        <h3 className="mt-2 text-xl font-extrabold text-slate-900 font-poppins">
          {service.name}
        </h3>
        <p className="mt-1 text-sm text-slate-600">{service.shortDescription}</p>
        
        <ul className="mt-3 space-y-1 text-sm text-slate-700">
          {service.highlights.slice(0, 3).map((h, i) => (
            <li key={i}>✓ {h}</li>
          ))}
        </ul>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="text-slate-900 font-bold">
            From ${service.basePrice}
          </div>
          <div className="text-xs text-slate-500">
            ~{service.durationMins} mins
          </div>
        </div>
      </div>
    </div>
  );
}
