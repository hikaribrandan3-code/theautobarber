import { Award, Star, Shield, Zap, Car, Heart, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import jasonPhoto from "/jason.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Area 51 Detailing | Naples' Master Detailer Jason Midler"
        description="Meet the mind behind Area 51 Detailing. 15+ years of automotive expertise and 7+ years of professional mobile detailing in Naples, FL. Trusted with over $100M in luxury vehicles."
      />
      {/* Hero Section */}
      <section className="relative border-b border-border bg-card/30 py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/30 to-primary/5 blur-xl" />
              <img
                src={jasonPhoto}
                alt="Jason Midler - CEO of Area 51 Detailing"
                className="relative rounded-lg border border-border object-cover w-full aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded bg-background/90 backdrop-blur px-4 py-3 border border-border">
                <p className="font-display text-sm font-semibold">Jason Midler</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">CEO & Lead Detailer</p>
              </div>
            </div>

            {/* Intro */}
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">About Us</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl mb-6">
                <span className="lg:hidden text-glow">Naples' Master Detailer</span>
                <span className="hidden lg:inline">Meet the Mind Behind <span className="text-primary text-glow">Area 51 Naples</span></span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="lg:hidden">15 years. One mission. Perfect paint.</span>
                <span className="hidden lg:inline">
                  What began as a relentless pursuit of automotive perfection has evolved into Naples' premier mobile detailing experience. 
                  We're not just detailing cars — we're preserving high-value investments and exceeding the highest expectations, one vehicle at a time.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={24} />, number: "15+", label: "Years in Automotive" },
              { icon: <Star size={24} />, number: "7+", label: "Years Professional Detailing" },
              { icon: <Car size={24} />, number: "$100M+", label: "Cars Detailed" },
              { icon: <Heart size={24} />, number: "∞", label: "Passion for Perfection" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-border bg-card/50">
                <span className="text-primary mb-3 block">{stat.icon}</span>
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {/* Block 1 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="text-primary" size={20} />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold mb-3">
                  <span className="lg:hidden">Our Story</span>
                  <span className="hidden lg:inline">Built on a Foundation of Excellence</span>
                </h3>
                <div className="lg:hidden">
                  <p className="text-muted-foreground leading-relaxed">
                    We don't talk about what happens in the bay. But the results speak for themselves.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-foreground">15 years of automotive obsession.</strong> Fully mobile. Fully self-contained.
                    We come to you because your garage is the cleanest place to work.
                  </p>
                </div>
                <div className="hidden lg:block text-muted-foreground leading-relaxed">
                  <p>
                    With over <strong className="text-foreground">15 years in the automotive industry</strong> and 
                    <strong className="text-foreground"> 7+ years of professional detailing experience</strong>, I've honed my craft 
                    working on some of the most valuable vehicles in the world. My clients have collectively trusted me with 
                    over <strong className="text-foreground">$100 million worth of cars</strong> — from daily drivers to rare exotics.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold mb-3">Above & Beyond Is the Standard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you book Area 51 Detailing, you're not getting a quick wash and vacuum. You're getting
                  <strong className="text-foreground"> the highest level of detailing expertise</strong>, period.
                  We treat every car like it's our own.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="text-primary" size={20} />
                </div>
                <div className="w-px h-full bg-border mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold mb-3">The Mobile Revolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I saw a gap in the mobile detailing industry. Too many "mobile" detailers were cutting corners, 
                  showing up unprepared, or delivering results that didn't justify the price. I knew there was a better way. 
                  So I made the decision to build a <strong className="text-foreground">full custom detailing rig</strong> — 
                  complete with generator, pressure washer, water tank, and professional-grade equipment. 
                  Now I bring the <strong className="text-foreground">best detailing experience directly to your doorstep</strong>, 
                  fully self-sufficient, with zero compromise on quality.
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="text-primary" size={20} />
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-3">Certified</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3 items-center"><Shield className="text-primary shrink-0" size={16} />STEK Authorized Installer</li>
                  <li className="flex gap-3 items-center"><Shield className="text-primary shrink-0" size={16} />XPEL Certified</li>
                  <li className="flex gap-3 items-center"><Shield className="text-primary shrink-0" size={16} />3M Pro Series Trained</li>
                  <li className="flex gap-3 items-center"><Shield className="text-primary shrink-0" size={16} />Fully insured &amp; licensed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-primary mb-4">Ready to experience the difference?</p>
          <h2 className="text-3xl font-bold lg:text-4xl mb-6">
            Let us show you what <span className="text-primary">perfected</span> looks like.
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you drive a daily commuter or a garage queen, your vehicle deserves the Area 51 treatment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-display text-sm uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-display text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
