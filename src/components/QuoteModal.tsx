import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const services = [
  "Spring Reset Special $249",
  "Interior Detailing",
  "Wax Package",
  "Mini Detail",
  "Full Detail",
  "Exterior Detail",
  "Water Spot Treatment",
  "One-Step Polish",
  "Two-Step Paint Correction",
  "Ceramic Coating",
  "PPF — Paint Protection Film",
  "Window Tint",
];

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
  defaultLocation?: string;
}

const QuoteModal = ({ open, onOpenChange, defaultService, defaultLocation }: QuoteModalProps) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(defaultService || "");
  const [location, setLocation] = useState(defaultLocation || "");

  useEffect(() => {
    if (open) {
      setStep(1);
      if (defaultService) setService(defaultService);
      if (defaultLocation) setLocation(defaultLocation);
    } else {
      setService("");
      setLocation("");
    }
  }, [open, defaultService, defaultLocation]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Quote request sent! We'll be in touch within 24 hours.");
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-white/5 bg-[#0a0a0a] rounded-none p-8">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-4xl font-display font-black uppercase italic tracking-tighter text-white">REQUEST THE <span className="text-[#C9A962] text-glow">CUT</span></DialogTitle>
            <span className="font-display text-[10px] text-[#C9A962] bg-[#C9A962]/5 border border-[#C9A962]/20 px-3 py-1 italic tracking-widest">PHASE {step}/2</span>
          </div>
          <p className="font-mono text-[10px] text-[#adaaaa] uppercase tracking-[0.2em] italic font-bold leading-relaxed">
            {step === 1 
              ? "Identify the target. Enter contact coordinates." 
              : "Define the level of restoration required."}
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 ? (
            <>
              <div className="grid grid-cols-1 gap-4">
                <Input placeholder="FIRST NAME" required className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none focus-visible:ring-[#C9A962]" />
                <Input placeholder="PHONE" type="tel" required className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none focus-visible:ring-[#C9A962]" />
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none">
                    <SelectValue placeholder="SELECT SERVICE" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#141414] border-white/10 rounded-none">
                    {services.map(s => (
                      <SelectItem key={s} value={s} className="font-display text-lg uppercase tracking-widest text-white focus:bg-[#C9A962] focus:text-white">{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-[#C9A962] text-white font-display text-xl uppercase tracking-widest font-black py-8 rounded-none italic shadow-[0_0_20px_rgba(0,102,255,0.2)]">
                VEHICLE SPECS →
              </Button>
            </>
          ) : (
            <>
              <Input 
                placeholder="EMAIL ADDRESS" 
                type="email" 
                required 
                className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none" 
              />
              <Input 
                placeholder="CITY / NEIGHBORHOOD (e.g. SEATTLE)" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                required 
                className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none" 
              />
              <div className="grid grid-cols-3 gap-3">
                <Input placeholder="YEAR" className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none" />
                <Input placeholder="MAKE" className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none" />
                <Input placeholder="MODEL" className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none" />
              </div>
              <Select>
                <SelectTrigger className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white h-14 rounded-none">
                  <SelectValue placeholder="CONDITION (1-10)" />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-white/10 rounded-none">
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)} className="font-display text-lg uppercase tracking-widest text-white focus:bg-[#C9A962]">{i + 1} — {i < 3 ? "Heavy Resto" : i < 6 ? "Daily Level" : i < 9 ? "Collector" : "Master Clone"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea placeholder="ADDITIONAL REQUISITION NOTES..." className="bg-[#141414] border-white/5 font-display text-lg uppercase tracking-widest text-white rounded-none" rows={3} />
              
              <div className="flex gap-4 pt-4">
                <Button 
                   type="button" 
                   variant="outline" 
                   onClick={() => setStep(1)}
                   className="flex-1 border-white/10 font-display text-lg uppercase tracking-widest text-white rounded-none h-14 hover:bg-white hover:text-black"
                >
                  BACK
                </Button>
                <Button 
                   type="submit" 
                   disabled={loading} 
                   className="flex-[2] bg-[#C9A962] text-white font-display text-xl uppercase tracking-widest font-black h-14 rounded-none italic shadow-[0_0_30px_rgba(0,102,255,0.2)]"
                >
                  {loading ? "REQUESTING..." : "GET QUOTE →"}
                </Button>
              </div>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
