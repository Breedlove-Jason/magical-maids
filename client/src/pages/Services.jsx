import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CTA from "../components/CTA.jsx";
import { services as fallbackServices } from "../data.js";
import { fetchServices } from "../api.js";

export default function Services() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    fetchServices()
      .then((data) => setServices(data))
      .catch(() => {});
  }, []);

  return (
    <>
      <section className="section pb-6">
        <SectionHeader
          eyebrow="Services"
          title="Choose your clean"
          subtitle="Flexible options for every home in Auburn."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
      
      <section className="section pt-0">
        <div className="rounded-3xl bg-white border shadow-soft p-6">
          <div className="font-extrabold text-lg text-slate-900 font-poppins">
            Pricing notes
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Most cleans average around <b>$100</b>. Final pricing can vary depending on home size,
            condition, pets, and service type. We always confirm your quote before the clean.
          </p>
        </div>
      </section>
      
      <CTA />
    </>
  );
}
