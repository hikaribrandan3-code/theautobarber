import SEO from "@/components/SEO";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#adaaaa] font-sans pt-16 pb-12 overflow-x-hidden selection:bg-[#C9A962] selection:text-white">
      <SEO 
        title="Seattle Detailing Gallery | Before & After Portfolio"
        description="See the mirror-finish results of our ceramic coating, paint correction, and mobile detailing in Seattle, FL. Real transformations, real luxury."
      />

      {/* HERO — DARK, NO WHITE */}
      <section className="relative px-6 pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#0e0e0e] flex flex-col items-center justify-center text-center border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C9A962]/10 border border-[#C9A962]/20 shadow-[0_0_20px_rgba(201,169,98,0.1)] mb-6">
            <span className="text-[10px] lg:text-xs font-bold text-[#C9A962] tracking-[0.3em] uppercase">Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black leading-[0.9] uppercase tracking-tighter italic text-white drop-shadow-2xl">
            PROOF OF <span className="text-[#C9A962]">WORK</span>
          </h1>
          <p className="mt-6 text-[#e5e5e5] text-base lg:text-lg font-medium leading-relaxed max-w-2xl px-4">
            Before and after transformations from our Seattle detailing service. Real cars. Real results.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tesla Model Y", desc: "Full Decontamination & Ceramic Coating", img: "/images/portfolio/tesla-black.png" },
              { title: "Tesla Model 3", desc: "Multi-Stage Paint Correction", img: "/images/portfolio/tesla-blue.png" },
              { title: "Corvette C7 Stingray", desc: "Level 2 Paint Correction & Sealant", img: "/images/portfolio/vett-red-1.png" },
              { title: "Ford Mustang GT", desc: "Interior Restoration & Exterior Detail", img: "/images/portfolio/mustang-red.png" },
              { title: "Corvette C7 Profile", desc: "Hydrophobic Gloss Enhancement", img: "/images/portfolio/vett-red-2.png" },
              { title: "Chevy Camaro Prep", desc: "Surface Decontamination & Tape-up", img: "/images/portfolio/camaro-prep.jpg" },
              { title: "BMW 50/50 Reveal", desc: "Master Level Paint Correction", img: "/images/portfolio/paint-correction-5050.jpg" },
              { title: "Red Corolla Shine", desc: "Ceramic Pro Top Coat Application", img: "/images/portfolio/ceramic-red-car.jpg" },
            ].map((project, i) => (
              <div key={i} className="group relative aspect-[4/3] border border-white/10 bg-[#131313] overflow-hidden">
                <img src={project.img} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="font-display font-black text-white text-lg uppercase tracking-tighter italic">{project.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#C9A962] mt-1">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
