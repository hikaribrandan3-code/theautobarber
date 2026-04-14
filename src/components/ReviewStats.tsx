import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ReviewStats = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 165;
    const duration = 2000;
    const incrementTime = (duration / end);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <a 
      href="https://www.google.com/search?sca_esv=a28f41119e0f780b&sxsrf=ANbL-n7ELqA0mSDAaZCT4WDvjCz2OMP9cA:1776182353228&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXseABQsPkJP-kokoGJxdjMj-4ldRKgaNH91xedEFUX2Dre3REu3AYsPQxDpXXE2zh11Ufo7kKpVSt2SkCaDqLTmj-7c&q=The+Auto+Barber+Reviews&sa=X&ved=2ahUKEwjxuOHx2u2TAxWaEbkGHX2CArYQ0bkNegQIOBAH&biw=1024&bih=552&dpr=2" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-4 bg-[#141414] border border-white/10 px-6 py-3 hover:border-[#C9A962]/50 transition-colors group"
    >
      <div className="flex gap-1 text-[#C9A962]">
        {[1, 2, 3, 4, 5].map((s) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: s * 0.1 }}
          >
            <Star size={16} fill="currentColor" />
          </motion.div>
        ))}
      </div>
      <div>
        <span className="font-display font-black text-xl italic text-white tracking-widest leading-none">
          {count}+
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#adaaaa] ml-2 font-bold">
          Google Reviews
        </span>
      </div>
    </a>
  );
};

export default ReviewStats;
