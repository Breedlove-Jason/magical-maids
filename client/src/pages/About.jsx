import SectionHeader from "../components/SectionHeader.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { team } from "../data.js";

export default function About() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="About"
        title="A cleaner home, done with heart"
        subtitle="Magical Maids is a locally owned Auburn cleaning company led by Nicole Alderman."
      />
      
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="rounded-3xl bg-white border shadow-soft p-6">
          <h3 className="text-xl font-extrabold text-slate-900 font-poppins">
            Our mission
          </h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            We believe that a clean home is a calmer, happier home.
            Magical Maids brings reliable, consistent cleaning to Auburn families,
            short-stay hosts, and anyone who wants their space to feel brand new.
          </p>
          
          <h3 className="mt-6 text-xl font-extrabold text-slate-900 font-poppins">
            Our promise
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>✓ Trustworthy, background-checked team</li>
            <li>✓ Same-team consistency when possible</li>
            <li>✓ Eco-friendly products available</li>
            <li>✓ Satisfaction guaranteed</li>
          </ul>
        </div>
        
        <div className="rounded-3xl bg-white border shadow-soft p-6">
          <h3 className="text-xl font-extrabold text-slate-900 font-poppins">
            Why Auburn loves us
          </h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <Badge text="5-star local reputation" />
            <Badge text="Friendly, respectful crews" />
            <Badge text="On-time and consistent" />
            <Badge text="Clear pricing & communication" />
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {team.map((m) => (
          <TeamCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  );
}

function Badge({ text }) {
  return (
    <div className="rounded-2xl bg-slate-50 border p-3 text-center">
      {text}
    </div>
  );
}
