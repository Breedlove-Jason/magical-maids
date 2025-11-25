import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="section">
      <div className="rounded-3xl bg-mm-purple text-white p-8 md:p-10 shadow-soft grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold font-poppins">
            Ready for a magical clean?
          </h3>
          <p className="mt-2 text-white/90">
            Most homes average around $100. We’ll confirm your exact quote after a quick review.
          </p>
        </div>
        <div className="flex md:justify-end gap-3">
          <Link to="/booking" className="btn bg-white text-mm-purple px-5 py-3 font-semibold">
            Book now
          </Link>
          <Link to="/services" className="btn border border-white/30 text-white px-5 py-3 hover:bg-white/10">
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}
