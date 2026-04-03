import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32 md:pt-40 overflow-hidden">

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-3xl opacity-40 pointer-events-none" />

    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Performance Marketing System
        </p>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
          Stop wasting ad spend.
          <br />
          Start generating <span className="gradient-text">predictable revenue</span>.
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          We build funnels and campaigns that turn clicks into consistent, measurable growth.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold"
          >
            Book a Strategy Call
          </a>

          <a
            href="#case-studies"
            className="px-6 py-4 rounded-xl hover:bg-secondary"
          >
            View Results →
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="rounded-2xl overflow-hidden border border-border/50">
          <img src={heroVisual} alt="Dashboard" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;