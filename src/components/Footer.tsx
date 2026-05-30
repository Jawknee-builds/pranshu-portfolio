export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">PB</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pranshu B. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:cto@jlambert.in" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
