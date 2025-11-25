import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import BookingForm from "../components/BookingForm.jsx";
import { fetchServices } from "../api.js";
import { services as fallbackServices } from "../data.js";

export default function Booking() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    fetchServices()
      .then((data) => setServices(data))
      .catch(() => {});
  }, []);

  return (
    <section className="section">
      <SectionHeader
        eyebrow="Booking"
        title="Book your magical clean"
        subtitle="Tell us a bit about your home and we'll confirm your quote."
      />
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <BookingForm services={services} />
        <div className="rounded-3xl bg-white border shadow-soft p-6">
          <div className="font-extrabold text-slate-900 font-poppins">
            What happens next?
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>✓ We review your request within 1 business day.</li>
            <li>✓ We confirm your exact price and arrival window.</li>
            <li>✓ You relax — we handle the sparkle.</li>
          </ul>
          
          <div className="mt-5 rounded-2xl bg-mm-purple/5 border border-mm-purple/10 p-4">
            <div className="font-semibold text-slate-900">Service area</div>
            <p className="text-sm text-slate-600 mt-1">
              Auburn, CA and nearby foothill communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
