import { Award, Star, Shield, Zap, Car, Heart, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import jasonPhoto from "/jason.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="The Craftsman | The Auto Barber Seattle"
        description="Meet the Barber of Metal. 15+ years of automotive obsession. We don't just detail; we perform surgery on clear coat. Seattle's standard for paint preservation."
      />
      {/* Hero Section */}
      <section className="relative border-b border-white/5 bg-[#0a0a0a] py-24 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/portfolio/shop-floor.jpg" alt="Shop Floor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-[#C9A962] mb-6 italic">The Master Barber</p>
            <h1 className="text-6xl lg:text-[8rem] font-display font-black leading-[0.9] uppercase tracking-tighter italic text-white mb-10">
              YOUR CAR.<br/>OUR CRAFT.
            </h1>
            <p className="text-xl lg:text-3xl font-display uppercase tracking-tight text-[#adaaaa] leading-tight italic">
              Seattle's car protection studio. Established 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 border-b border-white/5 bg-[#0e0e0e]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, number: "15+", label: "Years Mastery" },
              { icon: <Star size={32} />, number: "10-YR", label: "Warranty Standard" },
              { icon: <Car size={32} />, number: "$100M+", label: "Portfolio Value" },
              { icon: <Shield size={32} />, number: "100%", label: "Craftsman Bond" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-[#141414] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A962] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <span className="text-[#C9A962] mb-4 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                <p className="text-4xl lg:text-6xl font-display font-black text-white italic tracking-tighter mb-2 leading-none">{stat.number}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#adaaaa] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-48 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <div>
                 <span className="text-[#C9A962] font-display text-sm uppercase tracking-[0.5em] italic mb-4 block">The Division</span>
                 <h2 className="text-5xl lg:text-8xl font-display font-black uppercase tracking-tighter italic text-white leading-[0.8]">NO SECRETS.<br/><span className="text-[#C9A962]">JUST SURGERY.</span></h2>
               </div>
               <p className="font-mono text-sm text-[#adaaaa] leading-relaxed uppercase tracking-widest italic">
                 We don't talk about what happens in the bay. The results speak for themselves. 15 years of automotive obsession. Fully custom rig. Fully self-contained. 
                 We treat every vehicle as a master-level restoration, not a "quick wash."
               </p>
               <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                     <div className="w-12 h-12 bg-[#141414] border border-[#C9A962]/20 flex items-center justify-center shrink-0">
                        <Target className="text-[#C9A962]" size={24} />
                     </div>
                     <div>
                        <h4 className="font-display text-2xl font-black text-white uppercase italic tracking-wider mb-2">PRECISION DIAGNOSTICS</h4>
                        <p className="font-mono text-xs text-[#adaaaa] uppercase tracking-widest">We analyze clear coat depth and paint hardness before a single pad touches the car. Science first.</p>
                     </div>
                  </div>
                  <div className="flex gap-6 items-start">
                     <div className="w-12 h-12 bg-[#141414] border border-[#C9A962]/20 flex items-center justify-center shrink-0">
                        <Shield className="text-[#C9A962]" size={24} />
                     </div>
                     <div>
                        <h4 className="font-display text-2xl font-black text-white uppercase italic tracking-wider mb-2">THE CRAFTSMAN BOND</h4>
                        <p className="font-mono text-xs text-[#adaaaa] uppercase tracking-widest">Authorized STEK & XPEL installers. Lifetime warranty backup on all master-tier services.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               <div className="absolute -top-12 -left-12 w-48 h-48 border-l border-t border-[#C9A962]/30" />
               <img src="/images/portfolio/polisher-ready.jpg" alt="The Artisan" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
               <div className="mt-8 p-8 bg-[#141414] border border-white/5">
                  <h4 className="font-display text-2xl font-black text-white uppercase italic tracking-widest mb-4">CERTIFIED MASTERY</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex gap-3 items-center font-mono text-[10px] uppercase font-bold text-[#adaaaa] tracking-widest"><Shield className="text-[#C9A962] shrink-0" size={16} />STEK Authorized</li>
                    <li className="flex gap-3 items-center font-mono text-[10px] uppercase font-bold text-[#adaaaa] tracking-widest"><Shield className="text-[#C9A962] shrink-0" size={16} />XPEL Certified</li>
                    <li className="flex gap-3 items-center font-mono text-[10px] uppercase font-bold text-[#adaaaa] tracking-widest"><Shield className="text-[#C9A962] shrink-0" size={16} />3M Pro Trained</li>
                    <li className="flex gap-3 items-center font-mono text-[10px] uppercase font-bold text-[#adaaaa] tracking-widest"><Shield className="text-[#C9A962] shrink-0" size={16} />Fully Insured</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/5 py-32 bg-[#0e0e0e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A962]/10 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
          <p className="font-display text-sm uppercase tracking-[0.5em] text-[#C9A962] mb-6 italic">The Master's Call</p>
          <h2 className="text-5xl lg:text-9xl font-display font-black mb-10 uppercase tracking-tighter italic text-white leading-none">
            INVEST. PROTECT. <br/><span className="text-[#C9A962]">ENJOY.</span>
          </h2>
          <p className="font-mono text-xs lg:text-sm text-[#adaaaa] mb-12 uppercase tracking-[0.3em] font-bold italic">
            SEATTLE'S STANDARD FOR PAINT PRESERVATION.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#C9A962] px-12 py-6 font-display text-xl uppercase tracking-widest text-white hover:bg-[#A6884A] transition-all rounded-none italic shadow-[0_0_30px_rgba(0,102,255,0.3)]"
            >
              REQUEST THE CUT
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-white/20 px-12 py-6 font-display text-xl uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all rounded-none italic"
            >
              THE DIVISION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
