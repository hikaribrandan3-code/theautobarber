import { Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const GalleryPage = () => {
  return (
    <div>
      <SEO 
        title="Naples Detailing Gallery | Before & After Portfolio"
        description="See the mirror-finish results of our ceramic coating, paint correction, and mobile detailing in Naples, FL. Real transformations, real luxury."
      />
      <section className="py-16 lg:py-32 hero-gradient grid-bg">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
          <h1 className="text-4xl font-bold lg:text-6xl">Naples Detailing <span className="text-primary text-glow">Portfolio</span></h1>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Before and after transformations from our Naples detailing service.</p>
        </div>
      </section>

      <section className="py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Tesla Model Y", desc: "Full Decontamination & Ceramic Coating", img: "/images/portfolio/tesla-black.png" },
              { title: "Tesla Model 3", desc: "Multi-Stage Paint Correction", img: "/images/portfolio/tesla-blue.png" },
              { title: "Corvette C7 Stingray", desc: "Level 2 Paint Correction & Sealant", img: "/images/portfolio/vett-red-1.png" },
              { title: "Ford Mustang GT", desc: "Interior Restoration & Exterior Detail", img: "/images/portfolio/mustang-red.png" },
              { title: "Corvette C7 Profile", desc: "Hydrophobic Gloss Enhancement", img: "/images/portfolio/vett-red-2.png" },
            ].map((project, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-lg border border-border bg-card overflow-hidden">
                <img src={project.img} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="font-display font-bold text-white text-lg">{project.title}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">{project.desc}</p>
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
