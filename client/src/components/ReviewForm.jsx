import { useState } from "react";
import Stars from "./Stars.jsx";

export default function ReviewForm({ onAdd }) {
  const [form, setForm] = useState({
    customerName: "",
    location: "Auburn, CA",
    serviceName: "Signature Sparkle Clean",
    rating: 5,
    quote: ""
  });
  const [status, setStatus] = useState("idle");
  
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  
  function submit(e) {
    e.preventDefault();
    setStatus("loading");
    const newReview = {
      ...form,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    onAdd?.(newReview);
    setForm((f) => ({ ...f, customerName: "", quote: "", rating: 5 }));
    setStatus("done");
    setTimeout(() => setStatus("idle"), 1000);
  }
  
  return (
    <form onSubmit={submit} className="rounded-3xl bg-white border shadow-soft p-6">
      <div className="text-lg font-extrabold text-slate-900 font-poppins">
        Leave a review
      </div>
      <p className="text-sm text-slate-500 mt-1">
        Your feedback helps Auburn neighbors find a cleaner home.
      </p>
      
      <label className="block mt-4">
        <div className="text-sm font-semibold text-slate-800 mb-1">Name</div>
        <input className="input" value={form.customerName} onChange={(e)=>set("customerName", e.target.value)} required />
      </label>
      
      <label className="block mt-3">
        <div className="text-sm font-semibold text-slate-800 mb-1">Service</div>
        <select className="input" value={form.serviceName} onChange={(e)=>set("serviceName", e.target.value)}>
          <option>Signature Sparkle Clean</option>
          <option>Deep Clean Deluxe</option>
          <option>Move-In / Move-Out Magic</option>
          <option>Airbnb / Short-Stay Turnover</option>
        </select>
      </label>
      
      <div className="mt-3">
        <div className="text-sm font-semibold text-slate-800 mb-1">Rating</div>
        <div className="flex items-center gap-2">
          <Stars rating={form.rating} size="text-xl" />
          <input type="range" min="1" max="5" value={form.rating} onChange={(e)=>set("rating", Number(e.target.value))} />
        </div>
      </div>
      
      <label className="block mt-3">
        <div className="text-sm font-semibold text-slate-800 mb-1">Review</div>
        <textarea className="input" rows="4" value={form.quote} onChange={(e)=>set("quote", e.target.value)} required />
        <div className="mt-1 text-xs text-slate-400">{form.quote.length}/600</div>
      </label>
      
      <button disabled={status === "loading"} className="mt-4 w-full btn-primary px-5 py-3">
        {status === "loading" ? "Submitting..." : status === "done" ? "Thanks! ✨" : "Submit Review"}
      </button>
    </form>
  );
}
