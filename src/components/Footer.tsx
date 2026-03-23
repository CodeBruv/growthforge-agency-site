const Footer = () => (
  <footer className="border-t border-border px-6 md:px-10 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#" className="font-display text-xl font-bold text-foreground">
        Growth<span className="gradient-text">Forge</span>
      </a>
      <div className="flex gap-8 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#case-studies" className="hover:text-foreground transition-colors">Case Studies</a>
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} GrowthForge. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
