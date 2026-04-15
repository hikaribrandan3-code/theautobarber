import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { Shield, Star, Award, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  const { openQuote } = useOutletContext<{ openQuote: (service?: string) => void }>();

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <SEO
        title="About The Auto Barber | Seattle's Trusted Detailer Since 2020"
        description="The Auto Barber was built from the ground up — dealership experience, elite training at Metropolitan Detail, and over 160 five-star reviews. Seattle's standard for car protection."
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-[140px] pb-28 px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hikari-red-car.jpg"
            alt="Hikari Brandan — Founder, The Auto Barber"
            className="w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.25)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="text-[#C9A962] text-[10px] font-black uppercase tracking-[0.5em] mb-6">
            Est. 2020 · Seattle, WA
          </p>
          <h1 className="text-[60px] md:text-[100px] font-black leading-[0.85] tracking-tighter uppercase italic mb-8"
              style={{ textShadow: "0 10px 40px rgba(0,0,0,0.9)" }}>
            ABOUT THE<br />
            <span className="text-[#C9A962]">AUTO BARBER</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
            Built from the ground up. Refined in one of the country's top shops.
            Over 160 five-star reviews and a standard that doesn't change.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6 bg-[#0E0E0E] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* LEFT — Bio Text */}
            <div className="space-y-8">
              <div>
                <span className="text-[#C9A962] text-[10px] font-black uppercase tracking-[0.5em] block mb-4">
                  The Origin
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic mb-8">
                  WHERE IT <span className="text-[#C9A962]">STARTED</span>
                </h2>
              </div>

              <div className="space-y-6 text-white/75 text-sm md:text-base leading-relaxed font-medium border-l-2 border-[#C9A962]/30 pl-6">
                <p>
                  The Auto Barber officially opened in <strong className="text-white">2020</strong>, but the foundation was built long before that.
                </p>
                <p>
                  It started with years in high-end <strong className="text-white">Bellevue dealerships</strong>, then a paid internship at <strong className="text-white">Metropolitan Detail in Redmond</strong> — one of the top 10 detail shops in the country. That's where the craft was really refined: a year and a half of elite-level training that set the standard for everything that followed.
                </p>
                <p>
                  From there, it was a van and a grind. Within 8 months we moved into a vinyl wrap shop, and eventually into our own <strong className="text-white">brick-and-mortar location in Skyway</strong>. Over <strong className="text-white">160 five-star reviews</strong> later, the reputation speaks for itself — built on consistency and treating every car with the respect it deserves.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { stat: "2020", label: "Founded" },
                  { stat: "160+", label: "5-Star Reviews" },
                  { stat: "Top 10", label: "Training Pedigree" },
                ].map((s, i) => (
                  <div key={i} className="bg-[#0A0A0A] border border-white/10 p-5 text-center">
                    <div className="text-2xl md:text-3xl font-black italic text-[#C9A962] leading-none mb-2">{s.stat}</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Van Photo + caption */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#C9A962]/30 pointer-events-none z-10" />
              <div className="relative overflow-hidden">
                <img
                  src="/images/hikari-van.jpg"
                  alt="Founder Hikari Brandan with the original Auto Barber van"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-black text-base uppercase tracking-widest">Founder Hikari Brandan</p>
                  <p className="text-[#C9A962] text-[10px] font-bold uppercase tracking-[0.3em] mt-1 italic">This Is Where It Started</p>
                </div>
              </div>
              {/* Quote pull */}
              <div className="bg-[#0A0A0A] border border-white/10 border-t-2 border-t-[#C9A962] p-6 mt-0">
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">★★★★★ Google Review</p>
                <p className="text-white italic text-sm leading-relaxed">"Absolutely amazing job. Best detailing I've had on any of my cars. 100% recommended!"</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-2">— Manu GP, Tesla Model Y</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER PHOTO STRIP — 2 wide photos centered */}
      <section className="py-20 px-6 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto">

          {/* Section Label */}
          <div className="mb-10 text-center">
            <span className="text-[#C9A962] text-[10px] font-black uppercase tracking-[0.5em]">The Craft</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mt-2">
              FOUNDER <span className="text-[#C9A962]">HIKARI BRANDAN</span>
            </h2>
          </div>

          {/* Photo Grid — 2 now, ready for 3rd */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden group aspect-[4/5]">
              <img
                src="/images/hikari-van.jpg"
                alt="Founder Hikari Brandan — The Auto Barber van, day one"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-black text-sm uppercase tracking-widest">Day One</p>
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest italic mt-1">The Van & The Grind</p>
              </div>
            </div>

            <div className="relative overflow-hidden group aspect-[4/5]">
              <img
                src="/images/hikari-red-car.jpg"
                alt="Founder Hikari Brandan — The Auto Barber branded van with red corvette"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-black text-sm uppercase tracking-widest">The Studio Era</p>
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest italic mt-1">Skyway Location</p>
              </div>
            </div>

            {/* 3RD PHOTO PLACEHOLDER — drop in /images/hikari-photo3.jpg when ready */}
            {/* Uncomment when 3rd photo arrives:
            <div className="relative overflow-hidden group aspect-[4/5] md:col-span-2 lg:col-span-1">
              <img
                src="/images/hikari-photo3.jpg"
                alt="Hikari Brandan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-black text-sm uppercase tracking-widest">Founder Hikari Brandan</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* A NEW CHAPTER SECTION */}
      <section className="py-20 px-6 bg-[#0E0E0E] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — Text */}
            <div className="space-y-8">
              <div>
                <span className="text-[#C9A962] text-[10px] font-black uppercase tracking-[0.5em] block mb-4">
                  What's Next
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic mb-8">
                  A NEW CHAPTER,<br /><span className="text-[#C9A962]">SAME STANDARD.</span>
                </h2>
              </div>

              <div className="space-y-5 text-white/75 text-sm md:text-base leading-relaxed font-medium border-l-2 border-[#C9A962]/30 pl-6">
                <p>
                  The founder is relocating to Argentina, but <strong className="text-white">The Auto Barber isn't going anywhere.</strong>
                </p>
                <p>
                  His brother has been training under him for over a year, learning the craft the right way — <strong className="text-white">hands-on, no shortcuts.</strong>
                </p>
                <p className="text-white font-bold italic">
                  The ownership stays in the family. The standard stays the same.
                </p>
              </div>

              {[
                { icon: <Shield size={20} />, title: "Same Craft", desc: "Over a year of hands-on training. Every skill passed down directly." },
                { icon: <Award size={20} />, title: "Family Owned", desc: "Ownership stays in the family. Trust built over years, transferred properly." },
                { icon: <Star size={20} />, title: "Same Reviews", desc: "160+ five-star reviews set the floor. That standard doesn't drop." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 bg-[#0A0A0A] border border-white/10 p-5">
                  <div className="text-[#C9A962] mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-wide text-white mb-1">{item.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — CTA block */}
            <div className="bg-[#0A0A0A] border border-white/10 p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A962]" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#C9A962]/5 blur-3xl rounded-full pointer-events-none" />

              <p className="text-[#C9A962] text-[9px] font-black uppercase tracking-[0.5em] mb-2">No Commitment Required</p>
              <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-4 leading-none">
                BOOK YOUR SPOT
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 font-medium">
                Same studio. Same hands. Same obsession with doing it right. Schedule a quote and see the standard for yourself.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => openQuote()}
                  className="w-full bg-white text-black font-black uppercase tracking-[0.2em] px-8 py-5 text-xs hover:bg-[#C9A962] hover:text-white transition-all active:scale-95"
                >
                  REQUEST A QUOTE →
                </button>
                <a
                  href="tel:2538939452"
                  className="w-full block bg-transparent border border-white/20 text-white font-black uppercase tracking-[0.2em] px-8 py-5 text-xs hover:border-white transition-all text-center active:scale-95"
                >
                  (253) 893-9452
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-[#C9A962]" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">165 Reviews on Google · 4.9 avg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="py-16 px-6 bg-[#0A0A0A] border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C9A962] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Seattle's Car Protection Studio</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-8">
            YOUR CAR.<br /><span className="text-[#C9A962]">OUR CRAFT.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-black font-black uppercase tracking-[0.2em] px-10 py-5 text-xs hover:bg-[#C9A962] hover:text-white transition-all flex items-center gap-2 justify-center"
            >
              VIEW SERVICES <ChevronRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white font-black uppercase tracking-[0.2em] px-10 py-5 text-xs hover:bg-white hover:text-black transition-all"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-[120] lg:hidden grid grid-cols-2 border-t border-white/10 shadow-2xl">
        <a
          href="tel:2538939452"
          className="bg-[#0A0A0A] text-white font-black uppercase tracking-widest py-7 text-xs text-center border-r border-white/10 hover:bg-[#141414] transition-colors"
        >
          📞 Call Direct
        </a>
        <button
          onClick={() => openQuote()}
          className="bg-white text-black font-black uppercase tracking-widest py-7 text-xs hover:bg-gray-200 transition-colors shadow-[0_-4px_20px_rgba(255,255,255,0.1)]"
        >
          📅 Get A Quote
        </button>
      </div>
    </div>
  );
};

export default About;
