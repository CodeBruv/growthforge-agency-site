import { motion } from "framer-motion";

const CtaSection = () => (
  <section id="cta" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center card-surface p-12 md:p-16 glow-shadow"
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
        Ready to turn your traffic into <span className="gradient-text">revenue</span>?
      </h2>
      <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
        Let's build a system that actually converts.
      </p>
      <a
        href="#"
        className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
      >
        Book a Strategy Call
      </a>
    </motion.div>
  </section>
);

export default CtaSection;
