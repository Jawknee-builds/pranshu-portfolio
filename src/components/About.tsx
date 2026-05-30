export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-6">
              Pranshu B.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m a systems engineer and published researcher specialising in AI and electronics
              integration. My work focuses on building practical, production-ready systems that
              bridge the gap between complex sensor technology and human-friendly interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it&apos;s helping a rehabilitation clinic track patient movement in real-time
              or enabling a facility to monitor air quality autonomously — I care about engineering
              that works in the real world, not just in the lab.
            </p>

            {/* Contact link */}
            <a
              href="mailto:cto@jlambert.in"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              cto@jlambert.in
            </a>
          </div>

          {/* Right: Credentials */}
          <div className="space-y-6">
            {/* Academic */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Academic Foundation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm">AI &amp; Electronics Engineer</div>
                    <div className="text-xs text-muted-foreground">B.Tech / M.Tech — Electronics &amp; Communication</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm">Published Research Author</div>
                    <div className="text-xs text-muted-foreground">Peer-reviewed publications on AI-electronics integration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Embedded Systems', 'IoT Architecture', 'MQTT', 'ThingsBoard',
                  'Python', 'TensorFlow', 'Signal Processing', 'PCB Design',
                  'Sensor Fusion', 'Node-RED', 'Computer Vision', 'ESP32',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-foreground/70 bg-muted px-3 py-1.5 rounded-md border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* What drives me */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">What Drives Me</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe the best engineering is invisible to its end users. A doctor shouldn&apos;t
                need to understand MQTT protocols to monitor patient recovery. A facility manager
                shouldn&apos;t need to read sensor datasheets to keep their environment safe.
                My job is to make complex technology feel effortless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
