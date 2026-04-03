const Footer = () => (
  <footer className="border-t border-border px-6 md:px-10 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Logo */}
      <a href="#" className="font-display text-xl font-bold text-foreground">
        Growth<span className="gradient-text">Forge</span>
      </a>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#case-studies" className="hover:text-foreground transition-colors">Case Studies</a>
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-muted-foreground text-center md:text-right">
        © {new Date().getFullYear()} GrowthForge. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;