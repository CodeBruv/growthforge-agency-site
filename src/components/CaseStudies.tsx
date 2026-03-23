import { motion } from "framer-motion";

const cases = [
  {
    tag: "E-Commerce",
    problem: "Low conversion rate on product pages despite high traffic from paid ads.",
    solution: "Redesigned landing pages with A/B-tested layouts, restructured Meta campaigns for bottom-funnel intent.",
    results: [
      { metric: "+42%", label: "Conversion Rate" },
      { metric: "3.8x", label: "ROAS" },
    ],
  },
  {
    tag: "SaaS",
    problem: "Unsustainable cost per lead making it impossible to scale acquisition.",
    solution: "Rebuilt Google Ads account structure, launched retargeting funnels, and optimized lead-capture forms.",
    results: [
      { metric: "-35%", label: "Cost per Lead" },
      { metric: "2x", label: "Qualified Leads" },
    ],
  },
  {
    tag: "DTC Brand",
    problem: "Flat ad spend with no clear path to scaling beyond $2k/month.",
    solution: "Developed creative testing framework and progressive scaling strategy across Meta and TikTok.",
    results: [
      { metric: "$2k→$15k", label: "Monthly Ad Spend" },
      { metric: "4.2x", label: "ROAS Maintained" },
    ],
  },
];

const CaseStudies = () => (
  <section id="case-studies" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
          Results that <span className="gradient-text">speak for themselves</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Real outcomes from real campaigns. No vanity metrics.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div
            key={c.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="card-surface p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300"
          >
            <span className="inline-block self-start text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              {c.tag}
            </span>
            <h3 className="font-display text-base font-semibold mb-2 text-foreground">Problem</h3>
            <p className="text-sm text-muted-foreground mb-4">{c.problem}</p>
            <h3 className="font-display text-base font-semibold mb-2 text-foreground">Solution</h3>
            <p className="text-sm text-muted-foreground mb-6">{c.solution}</p>
            <div className="mt-auto grid grid-cols-2 gap-4 pt-4 border-t border-border">
              {c.results.map((r) => (
                <div key={r.label}>
                  <p className="font-display text-2xl font-bold gradient-text">{r.metric}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
