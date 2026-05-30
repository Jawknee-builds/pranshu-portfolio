export function Hero() {
  return (
    <section id="top" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-light text-accent text-xs font-semibold rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
            Published Researcher · AI &amp; Electronics Engineer
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Building Technology That{' '}
            <span className="text-accent text-nowrap">Works for People.</span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            I design smart systems that help doctors track patient recovery
            and help businesses automate the boring stuff — so people can
            focus on what actually matters.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors text-sm"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
