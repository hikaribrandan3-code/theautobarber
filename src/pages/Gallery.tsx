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
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="group aspect-[4/3] rounded-lg border border-border bg-card flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Sparkles className="mx-auto mb-2 text-primary/30 animate-pulse-glow" size={32} />
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Project {String(i + 1).padStart(2, "0")} — Coming Soon</p>
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
