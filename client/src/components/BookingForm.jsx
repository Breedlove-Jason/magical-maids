import { useMemo, useState } from "react";
import { services } from "../data.js";

export default function BookingForm() {
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    serviceId: "",
    bedrooms: 2,
    bathrooms: 1,
    preferredDate: "",
    preferredTime: "09:00",
    notes: ""
  });
  const [status, setStatus] = useState("idle");
  
  const service = useMemo(
    () => services.find((s) => s.id === form.serviceId),
    [form.serviceId]
  );
  
  const estimated = service
    ? service.basePrice + Number(form.bedrooms) * 15 + Number(form.bathrooms) * 20
    : 0;
  
  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  
  function onSubmit(e) {
    e.preventDefault();
    setStatus("done");
  }
  
  if (status === "done") {
    return (
      <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-6 text-center shadow-soft">
        <h3 className="text-xl font-extrabold text-emerald-900 font-poppins">
          You’re booked! ✨
        </h3>
        <p className="mt-2 text-emerald-800 text-sm">
          Nicole will confirm your time shortly.
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white shadow-soft border p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full Name">
          <input name="customerName" value={form.customerName} onChange={onChange} required className="input" />
        </Field>
        <Field label="Email">
          <input type="email" name="email" value={form.email} onChange={onChange} required className="input" />
        </Field>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Phone">
          <input name="phone" value={form.phone} onChange={onChange} className="input" />
        </Field>
        <Field label="Address">
          <input name="address" value={form.address} onChange={onChange} required className="input" />
        </Field>
      </div>
      
      <Field label="Service">
        <select name="serviceId" value={form.serviceId} onChange={onChange} required className="input">
          <option value="">Select a service…</option>
          {services.map(s => (
            <option key={s.id} value={s.id}>{s.name} (from ${s.basePrice})</option>
          ))}
        </select>
      </Field>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Bedrooms">
          <input type="number" min="0" name="bedrooms" value={form.bedrooms} onChange={onChange} className="input" />
        </Field>
        <Field label="Bathrooms">
          <input type="number" min="0" name="bathrooms" value={form.bathrooms} onChange={onChange} className="input" />
        </Field>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Preferred Date">
          <input type="date" name="preferredDate" value={form.preferredDate} onChange={onChange} required className="input" />
        </Field>
        <Field label="Preferred Time">
          <select name="preferredTime" value={form.preferredTime} onChange={onChange} className="input">
            <option>09:00</option>
            <option>11:00</option>
            <option>13:00</option>
            <option>15:00</option>
          </select>
        </Field>
      </div>
      
      <Field label="Notes (pets, access, priorities)">
        <textarea name="notes" value={form.notes} onChange={onChange} rows="3" className="input" />
      </Field>
      
      {service && (
        <div className="rounded-2xl bg-slate-50 border p-4 text-sm flex items-center justify-between">
          <div>
            <div className="font-semibold text-slate-900">Estimated price</div>
            <div className="text-slate-600">Most cleans average around $100</div>
          </div>
          <div className="text-xl font-extrabold text-slate-900">${estimated}</div>
        </div>
      )}
      
      <button className="w-full btn-primary px-5 py-3">
        Request Booking
      </button>
    </form>
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
