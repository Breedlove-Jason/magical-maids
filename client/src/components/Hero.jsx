import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-violet-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-mm-purple shadow-soft">
            🦄 Magical care by Nicole Alderman’s local team
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-poppins">
            A magically clean home, without lifting a finger.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Recurring cleans, deep cleans, move-outs, and Airbnb turnovers —
            done with care, consistency, and a little sparkle.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/booking" className="btn-primary px-5 py-3">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn-secondary px-5 py-3">
              View Services
            </Link>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <Stat label="5-Star Reviews" value="250+" />
            <Stat label="Homes Cleaned" value="3,000+" />
            <Stat label="Eco Options" value="Always" />
          </div>
        </div>
        
        <div className="relative">
          <img
            className="rounded-3xl shadow-soft w-full h-[420px] object-cover"
            src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1400"
            alt="Clean home"
          />
          <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-soft border">
            <p className="text-sm font-semibold text-slate-900">
              Same-team consistency
            </p>
            <p className="text-xs text-slate-500">
              You’ll know your cleaner by name.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-soft border">
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}
