import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "GrowthForge didn't just run our ads, they rebuilt our entire acquisition strategy. Revenue is up 3x in four months.",
    author: "Alex Chen",
    role: "CEO, Optivex",
  },
  {
    quote: "We went from guessing to knowing exactly what drives our growth. Their data approach is world-class.",
    author: "Maria Lopez",
    role: "Head of Growth, NovaPay",
  },
  {
    quote: "Best ROI we've ever gotten from an agency. They treat our budget like it's their own.",
    author: "James O'Brien",
    role: "Founder, PeakScale",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">What our clients say</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-surface p-8"
          >
            <div className="text-primary text-3xl font-serif mb-4">"</div>
            <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
            <div>
              <p className="font-semibold text-sm">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
