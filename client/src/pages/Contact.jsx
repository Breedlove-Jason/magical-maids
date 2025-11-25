import SectionHeader from "../components/SectionHeader.jsx";

export default function Contact() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s talk sparkle"
        subtitle="Questions or special requests? We’re happy to help."
      />
      
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <form className="rounded-3xl bg-white border shadow-soft p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name">
              <input className="input" required />
            </Field>
            <Field label="Email">
              <input type="email" className="input" required />
            </Field>
          </div>
          <Field label="Phone">
            <input className="input" />
          </Field>
          <Field label="Message">
            <textarea className="input" rows="5" required />
          </Field>
          
          <button className="btn-primary w-full py-3">Send message</button>
          <p className="text-xs text-slate-500 text-center">
            (This demo form does not send yet.)
          </p>
        </form>
        
        <div className="rounded-3xl bg-white border shadow-soft p-6">
          <div className="font-extrabold text-slate-900 font-poppins">
            Magical Maids
          </div>
          <div className="mt-2 text-sm text-slate-600 space-y-1">
            <div>Auburn, CA</div>
            <div>(530) 555-0199</div>
            <div>hello@magicalmaids.com</div>
          </div>
          
          <div className="mt-5 rounded-2xl bg-slate-50 border p-4">
            <div className="font-semibold text-slate-900">Hours</div>
            <div className="mt-1 text-sm text-slate-600">
              Mon–Fri 09:00–17:00<br />
              Sat 10:00–14:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-sm font-semibold text-slate-800 mb-1">{label}</div>
      {children}
    </label>
  );
}
