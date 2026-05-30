const impactStats = [
  { value: '3+', label: 'Systems Deployed', description: 'Across healthcare, clinical environments, and industrial R&D' },
  { value: '94%', label: 'ML Accuracy', description: 'Movement classification in rehabilitation monitoring' },
  { value: '24/7', label: 'Autonomous Uptime', description: 'Environmental monitoring systems running without human oversight' },
  { value: 'Published', label: 'Research Author', description: 'Peer-reviewed work on AI and electronics integration' },
];

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 block">
            Why This Matters
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Measurable outcomes,{' '}
            <span className="text-accent">not just prototypes.</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl text-lg">
            Every system I build is designed to run in production. These
            numbers reflect real deployments, not lab simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl font-extrabold text-accent mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-xs text-white/50 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Why this matters callout */}
        <div className="mt-14 p-8 bg-accent/10 border border-accent/20 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-3">Why this work matters</h3>
          <p className="text-white/70 leading-relaxed max-w-3xl">
            Healthcare professionals shouldn&apos;t have to choose between patient attention and data collection.
            Industrial teams shouldn&apos;t need a PhD to understand their sensor data.
            My work sits at the intersection of <strong className="text-white">complex engineering</strong> and{' '}
            <strong className="text-white">human usability</strong> — building systems that are sophisticated
            under the hood but simple where it counts: the interface your team actually uses.
          </p>
        </div>
      </div>
    </section>
  );
}
