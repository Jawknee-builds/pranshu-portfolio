const capabilities = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Patient Monitoring',
    description:
      'Track recovery progress in real-time so doctors can make better decisions — without manual observation.',
    tags: ['Healthcare', 'Real-time', 'IoT'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01" />
        <path d="M17 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
    title: 'Smart Automation',
    description:
      'Replace repetitive manual processes with reliable, intelligent systems that run 24/7 without oversight.',
    tags: ['Automation', 'Efficiency', 'Industrial'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-8" />
      </svg>
    ),
    title: 'Data Intelligence',
    description:
      'Turn raw sensor data into actionable insights your team can actually use — dashboards, alerts, and reports.',
    tags: ['Analytics', 'ML', 'Dashboards'],
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 block">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Complex problems,{' '}
            <span className="text-accent">simple solutions.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            I take messy real-world challenges and engineer clean,
            reliable systems that non-technical teams can actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white rounded-xl border border-border p-8 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {cap.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {cap.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
