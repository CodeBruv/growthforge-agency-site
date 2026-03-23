import { motion } from "framer-motion";

const brands = ["Flowbase", "Optivex", "Convertr", "PeakScale", "NovaPay"];

const testimonials = [
  { quote: "They helped us scale profitably within 60 days.", author: "Jordan M.", role: "E-commerce Founder" },
  { quote: "Our ad spend finally started making sense.", author: "Priya S.", role: "SaaS Operator" },
];

const SocialProof = () => (
  <section className="section-padding border-t border-border">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-10">
        Trusted by growing brands
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mb-16">
        {brands.map((b) => (
          <span key={b} className="font-display text-lg md:text-xl font-semibold text-muted-foreground/50">
            {b}
          </span>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {testimonials.map((t) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-surface p-6 text-left"
          >
            <p className="text-foreground leading-relaxed italic">"{t.quote}"</p>
            <p className="mt-4 text-sm text-muted-foreground">
              — {t.author}, <span className="text-primary">{t.role}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
