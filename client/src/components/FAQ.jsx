import SectionHeader from "./SectionHeader.jsx";
import { faqs } from "../data.js";

export default function FAQ() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="If you’re wondering it, you’re not alone."
      />
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-2xl bg-white border p-5 shadow-soft">
            <div className="font-semibold text-slate-900">{f.q}</div>
            <p className="mt-2 text-sm text-slate-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
