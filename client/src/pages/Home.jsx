import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ReviewsSection from "../components/ReviewsSection.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { services as fallbackServices, team } from "../data.js";
import { useEffect, useState } from "react";
import { fetchServices } from "../api.js";
import ImageCarousel from "../components/ImageCarousel.jsx";


export default function Home() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    fetchServices()
      .then((data) => setServices(data))
      .catch(() => {
        // if server fails, we quietly keep using fallbackServices
      });
  }, []);

  const popular = services.filter((s) => s.popular);
  
  return (
    <>
      <Hero />
      
      <section className="section">
        <SectionHeader
          eyebrow="Services"
          title="Most-booked cleans"
          subtitle="Reliable, affordable, and consistent care."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {popular.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
      <ImageCarousel />
      <section className="section pt-0">
        <div className="grid md:grid-cols-3 gap-4">
          <Step n="1" title="Book in minutes" text="Tell us your home size, service, and preferred date." />
          <Step n="2" title="We confirm your quote" text="Most homes average ~$100. We’ll follow up fast." />
          <Step n="3" title="Enjoy the sparkle" text="A consistent, friendly team leaves your home fresh." />
        </div>
      </section>
      
      <ReviewsSection />
      
      <section className="section">
        <SectionHeader
          eyebrow="Team"
          title="Meet the Magical Maids"
          subtitle="Trusted locals who treat your home like their own."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {team.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </section>
      
      <FAQ />
      <CTA />
    </>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="rounded-3xl bg-white border shadow-soft p-6">
      <div className="h-10 w-10 rounded-xl bg-mm-aqua/15 text-mm-aqua grid place-items-center font-extrabold">
        {n}
      </div>
      <div className="mt-3 font-extrabold text-slate-900 font-poppins">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}
