import { Link, NavLink } from "react-router-dom";

const navItem =
  "text-sm font-medium text-slate-700 hover:text-mm-purple transition";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-mm-purple text-white grid place-items-center font-bold shadow-soft">
            MM
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-slate-900 font-poppins">
              Magical Maids
            </div>
            <div className="text-xs text-slate-500">
              Auburn, CA • Sparkle you can feel
            </div>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLink className={navItem} to="/services">Services</NavLink>
          <NavLink className={navItem} to="/about">About</NavLink>
          <NavLink className={navItem} to="/contact">Contact</NavLink>
        </nav>
        
        <Link to="/booking" className="btn-primary">
          Book a Clean
        </Link>
      </div>
    </header>
  );
}
