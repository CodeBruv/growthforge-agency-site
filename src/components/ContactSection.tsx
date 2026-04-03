import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-3xl mx-auto text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold"
      >
        Book a Strategy Call
      </motion.h2>

      <p className="text-muted-foreground mt-4 max-w-md mx-auto">
        Tell us about your business. We’ll show you exactly where you're leaking revenue.
      </p>

      {/* FORM */}
      <form
        action="https://formspree.io/f/yourformid"  // ← REPLACE THIS
        method="POST"
        className="mt-10 space-y-4 text-left"
      >

        {/* Name */}
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone (e.g. +1 801 234 5678)"
          className="w-full p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          placeholder="yourmail@example.com"
          className="w-full p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
        />

        {/* Message */}
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you trying to scale?"
          className="w-full p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
        />

        {/* Hidden config */}
        <input type="hidden" name="_subject" value="New Strategy Call Request" />
        <input type="hidden" name="_captcha" value="false" />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
        >
          Get My Growth Plan →
        </button>

        {/* Micro trust */}
        <p className="text-xs text-muted-foreground text-center">
          No spam. Just strategy.
        </p>
      </form>
    </div>
  </section>
);

export default ContactSection;