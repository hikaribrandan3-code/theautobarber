import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const AmbientUFO = () => {
  const { scrollYProgress } = useScroll();
  const [isCentered, setIsCentered] = useState(false);

  // Vertical Parallax: Slower than scroll (drift effect)
  // Maps 0-1 scroll progress to 10-90% vertical viewport position
  const yRange = useTransform(scrollYProgress, [0, 1], ["10vh", "90vh"]);
  const springY = useSpring(yRange, { stiffness: 50, damping: 20 });

  // Floating Sine Wave (Idle animation)
  const floatX = {
    x: [0, 15, -15, 0],
    rotateZ: [0, 5, -5, 0]
  };

  const floatTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  // Pulse/Lighting Trigger Logic
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // "Light up" specifically when in the middle of the scroll (focal zone)
      // Focus range: 0.15 to 0.85 (roughly center 70% of page)
      const focal = latest > 0.15 && latest < 0.85;
      setIsCentered(focal);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed right-12 z-0 pointer-events-none hidden lg:block"
      style={{ top: springY }}
      animate={floatX}
      transition={floatTransition}
    >
      <div className="relative w-[88px] h-[38px]">
        {/* Saucer Hull (Glassmorphism) */}
        <div className="absolute inset-0 bg-[#1a1b1a]/40 backdrop-blur-md rounded-[100%] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]" />
        
        {/* Cockpit Dome */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[26px] h-[13px] bg-cyan-500/20 rounded-[100%] border border-cyan-400/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* Pulsating Indicator Lights (Neon Green) */}
        <div className="absolute bottom-2 inset-x-0 flex justify-around px-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-[#00FF41]"
              animate={{ 
                opacity: isCentered ? [0.4, 1, 0.4] : 0.2,
                scale: isCentered ? [0.8, 1.2, 0.8] : 1,
                boxShadow: isCentered ? "0 0 10px #00FF41" : "none"
              }}
              transition={{ 
                duration: isCentered ? 1 : 2, 
                repeat: Infinity, 
                delay: i * 0.15 
              }}
            />
          ))}
        </div>

        {/* Ambient Glow Aura (Reactive) */}
        <motion.div 
          className="absolute inset-0 rounded-[100%] bg-[#00FF41]/5 blur-2xl"
          animate={{ 
            opacity: isCentered ? 1 : 0,
            scale: isCentered ? 1.5 : 1
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Engine Burn (Subtle) */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 opacity-10 blur-xl" />
      </div>

      {/* Narrative Label (Optional, but adds character) */}
      <motion.div 
        className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full ml-4"
        animate={{ opacity: isCentered ? 0.4 : 0 }}
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#00FF41] whitespace-nowrap">
          Scanning Territory...
        </span>
      </motion.div>
    </motion.div>
  );
};
