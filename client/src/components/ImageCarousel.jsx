import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Kitchen Deep Clean",
    caption: "Stovetops, sinks, and surfaces that truly shine.",
    image: "http://www.placehold.co/800x800?text=Magical+Maids+1"
  },
  {
    id: 2,
    title: "Bathroom Refresh",
    caption: "Spotless showers, mirrors, and fixtures.",
    image: "http://www.placehold.co/800x800?text=Magical+Maids+2"
  },
  {
    id: 3,
    title: "Cozy Living Spaces",
    caption: "Dust-free, vacuumed, and guest-ready.",
    image: "http://www.placehold.co/800x800?text=Magical+Maids+3"
  }
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const current = slides[index];
  
  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  
  return (
    <section className="section pt-4 pb-2">
      {/* 2/3 width, centered, slightly squarer */}
      <div className="mx-auto w-full md:w-2/3 max-w-4xl rounded-3xl bg-white border border-slate-300 shadow-soft overflow-hidden block">
      
      <div className="relative">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-64 md:h-72 object-cover"
          />
          
          {/* Prev button with Font Awesome */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 text-sm font-semibold shadow-soft"
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          
          {/* Next button with Font Awesome */}
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white px-3 py-2 text-sm font-semibold shadow-soft"
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
          
          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Caption area – darker border + title */}
        <div className="px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-t border-slate-300">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              {current.title}
            </div>
            <p className="text-xs text-slate-600">{current.caption}</p>
          </div>
          <div className="text-xs text-slate-400">
            {index + 1} / {slides.length}
          </div>
        </div>
      </div>
    </section>
  );
}
