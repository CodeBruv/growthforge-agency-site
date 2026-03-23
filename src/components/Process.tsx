import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Audit & Strategy", desc: "We analyze your funnel, ad accounts, and analytics to identify the highest-impact opportunities." },
  { num: "02", title: "Execution", desc: "We launch and optimize campaigns with rigorous testing—creative, copy, audiences, and landing pages." },
  { num: "03", title: "Scale", desc: "Once we find what works, we double down—scaling spend while maintaining or improving ROAS." },
];

const Process = () => (
  <section id="process" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">How we work</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          A proven three-step system to turn ad spend into scalable revenue.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative card-surface p-8"
          >
            <span className="font-display text-5xl font-bold text-primary/15 absolute top-4 right-6">
              {s.num}
            </span>
            <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
