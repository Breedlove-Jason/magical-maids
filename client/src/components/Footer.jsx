import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-lg font-poppins text-slate-900">
            Magical Maids
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Premium home cleaning in Auburn, CA and nearby foothill communities.
          </p>
        </div>
        
        <div>
          <div className="text-sm font-bold text-slate-900">Explore</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li><Link className="hover:text-mm-purple" to="/services">Services</Link></li>
            <li><Link className="hover:text-mm-purple" to="/booking">Book</Link></li>
            <li><Link className="hover:text-mm-purple" to="/about">About</Link></li>
          </ul>
        </div>
        
        <div>
          <div className="text-sm font-bold text-slate-900">Contact</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Auburn, CA</li>
            <li>(530) 555-0199</li>
            <li>hello@magicalmaids.com</li>
          </ul>
        </div>
      </div>
      
      <div className="py-4 text-center text-xs text-slate-500 bg-slate-50">
        © {new Date().getFullYear()} Magical Maids • All rights reserved
      </div>
    </footer>
  );
}
