import { motion } from "framer-motion";
import { BarChart3, MousePointerClick, GitBranch, Activity } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Paid Advertising",
    desc: "High-ROI campaigns on Meta & Google that turn ad dollars into revenue, tracked down to the last cent.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimization",
    desc: "We test, iterate, and refine your pages until every click has the highest chance of converting.",
  },
  {
    icon: GitBranch,
    title: "Funnel Strategy",
    desc: "End-to-end funnel architecture designed to move prospects from awareness to purchase seamlessly.",
  },
  {
    icon: Activity,
    title: "Analytics & Tracking",
    desc: "Accurate attribution and real-time dashboards so you always know what's working and what's not.",
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">What we do</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Performance marketing services built for measurable growth.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-surface p-6 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
