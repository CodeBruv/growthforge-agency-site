import { motion } from "framer-motion";

const CtaSection = () => (
  <section id="cta" className="section-padding relative overflow-hidden">

    <div className="absolute inset-0 flex justify-center pointer-events-none">
      <div className="w-[600px] h-[300px] bg-primary/10 blur-3xl opacity-40" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative max-w-3xl mx-auto text-center card-surface p-12 md:p-16 rounded-2xl border border-border/50"
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
        You don’t need more traffic.
        <br />
        <span className="gradient-text">You need better conversion.</span>
      </h2>

      <p className="mt-5 text-muted-foreground text-lg max-w-lg mx-auto">
        We fix what’s already broken and turn your funnel into a revenue engine.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 mt-10 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold hover:brightness-110 transition"
      >
        Book Your Strategy Call →
      </a>

      <p className="mt-4 text-sm text-muted-foreground">
        No pressure. Just clarity on what to fix.
      </p>
    </motion.div>
  </section>
);

export default CtaSection;