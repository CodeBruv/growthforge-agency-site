import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32 md:pt-40 overflow-hidden">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
          Turn your traffic into{" "}
          <span className="gradient-text">predictable revenue</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
          We help businesses scale through data-driven paid ads and conversion-focused landing pages—without wasting budget.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Book a Strategy Call
          </a>
          <a
            href="#case-studies"
            className="border border-border text-foreground px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-secondary transition-colors"
          >
            View Case Studies
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="rounded-2xl overflow-hidden glow-shadow">
          <img src={heroVisual} alt="Marketing dashboard visualization" className="w-full h-auto" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
