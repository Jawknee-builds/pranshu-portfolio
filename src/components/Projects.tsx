'use client';

import { useState } from 'react';

const projects = [
  {
    id: 'rehab-system',
    badge: 'Healthcare',
    badgeColor: 'bg-success-light text-success',
    title: 'Smart Rehabilitation System',
    subtitle: 'Real-Time Patient Monitoring',
    simple: {
      what: 'Tracks patient movement during rehab sessions and evaluates recovery accuracy automatically — giving doctors real-time feedback without manual observation.',
      who: 'Physical therapists, rehabilitation clinics, and hospitals looking to improve patient outcomes with data-driven recovery tracking.',
      outcome: 'Doctors can monitor multiple patients simultaneously, with movement accuracy scored automatically. Stores progress over time so recovery trends are visible at a glance.',
    },
    technical: {
      architecture: 'IMU sensors (accelerometer + gyroscope) mounted on patient limbs stream motion data via MQTT to a ThingsBoard dashboard. An ML classification model evaluates movement quality against reference patterns.',
      stack: ['IMU Sensors', 'MQTT', 'ThingsBoard', 'Python', 'TensorFlow Lite', 'CSV Logging'],
      details: [
        'Real-time 6-axis motion data capture at 100Hz sampling rate',
        'MQTT broker handles bi-directional sensor communication',
        'ThingsBoard provides live dashboards for clinical staff',
        'ML motion classifier trained on labelled rehabilitation exercises',
        'Timestamped CSV exports for longitudinal analysis',
      ],
    },
    metrics: [
      { value: '100Hz', label: 'Sampling Rate' },
      { value: '94%', label: 'Classification Accuracy' },
      { value: '< 50ms', label: 'Latency' },
    ],
  },
  {
    id: 'env-monitor',
    badge: 'Smart Environments',
    badgeColor: 'bg-accent-light text-accent',
    title: 'IoT Environmental Monitor',
    subtitle: 'Clinical Air Quality & Safety',
    simple: {
      what: 'Monitors air quality, temperature, and humidity in clinical environments — and alerts staff automatically when conditions drift outside safe ranges.',
      who: 'Hospitals, laboratories, pharmaceutical storage facilities, and any environment where atmospheric conditions directly affect patient safety or product integrity.',
      outcome: 'Staff receive instant alerts instead of doing manual checks. Historical data helps identify patterns like overnight temperature drifts that could compromise sterile environments.',
    },
    technical: {
      architecture: 'ESP32 microcontrollers with BME280 (temp/humidity) and MQ-series (gas) sensors push readings to ThingsBoard via MQTT. Rule chains trigger alerts when thresholds are breached.',
      stack: ['ESP32', 'BME280', 'MQ Sensors', 'MQTT', 'ThingsBoard', 'Node-RED'],
      details: [
        'Multi-zone sensor deployment with ESP32 mesh networking',
        'ThingsBoard rule chains for automated threshold alerts',
        'Node-RED integration for SMS/email notification pipelines',
        'Historical data retention for compliance reporting',
        'Battery-backed sensors with offline data buffering',
      ],
    },
    metrics: [
      { value: '24/7', label: 'Monitoring' },
      { value: '< 5s', label: 'Alert Response' },
      { value: '99.8%', label: 'Uptime' },
    ],
  },
  {
    id: 'agentic-electronics',
    badge: 'Research & Development',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Agentic Electronics Platform',
    subtitle: 'AI-Driven Hardware Orchestration',
    simple: {
      what: 'A research platform that bridges AI software with physical hardware — enabling intelligent agents to control and optimise electronic systems autonomously.',
      who: 'Industrial automation teams, R&D labs, and manufacturing facilities looking to move beyond simple rule-based automation toward adaptive, self-optimising systems.',
      outcome: 'Physical systems that can learn, adapt, and self-correct in real-time. Reduces the gap between "digital automation" (software-only) and actual hardware execution.',
    },
    technical: {
      architecture: 'Combines LLM-based reasoning agents with embedded microcontroller interfaces. The agent layer interprets sensor telemetry, makes decisions, and actuates physical outputs through a standardised API bridge.',
      stack: ['Python', 'LangChain', 'ESP32', 'MQTT', 'Signal Processing', 'PCB Design'],
      details: [
        'Proprietary API bridge between LLM agents and microcontroller I/O',
        'Signal processing pipeline for real-time sensor fusion',
        'Custom PCB design for sensor-actuator integration modules',
        'Feedback loops enabling agent self-correction',
        'Published research on AI-electronics integration patterns',
      ],
    },
    metrics: [
      { value: 'Published', label: 'Research Paper' },
      { value: '3 Patents', label: 'In Progress' },
      { value: 'Novel', label: 'Architecture' },
    ],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header */}
      <div className="p-8 pb-0">
        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${project.badgeColor}`}>
          {project.badge}
        </span>
        <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm font-medium">{project.subtitle}</p>
      </div>

      {/* Metrics bar */}
      <div className="px-8 py-5">
        <div className="flex gap-6 py-4 border-y border-border">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent">{m.value}</div>
              <div className="text-xs text-muted-foreground font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 1: Simple */}
      <div className="px-8 pb-6 space-y-5">
        <div>
          <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">What it does</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">{project.simple.what}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Who it helps</h4>
          <p className="text-sm text-foreground/60 leading-relaxed">{project.simple.who}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-success uppercase tracking-wider mb-2">Real-world outcome</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">{project.simple.outcome}</p>
        </div>
      </div>

      {/* Layer 2: Technical (expandable) */}
      <div className="border-t border-border">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-8 py-4 flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          <span>{expanded ? 'Hide' : 'View'} Technical Details</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {expanded && (
          <div className="px-8 pb-8 space-y-6 animate-in fade-in duration-200">
            {/* Architecture */}
            <div>
              <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Architecture</h4>
              <p className="text-sm text-foreground/70 leading-relaxed bg-muted/50 rounded-lg p-4 border border-border/50">
                {project.technical.architecture}
              </p>
            </div>

            {/* Stack */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technical.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-foreground text-white px-3 py-1.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation details */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Implementation Details</h4>
              <ul className="space-y-2">
                {project.technical.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/70">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3 block">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Systems I&apos;ve engineered.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Each project starts with a real-world problem and ends with a working
            system. Click &quot;View Technical Details&quot; for implementation specifics.
          </p>
        </div>

        {/* For non-technical visitors */}
        <div className="mb-10 px-5 py-4 bg-accent-light/50 border border-accent/20 rounded-lg">
          <p className="text-sm text-accent font-medium">
            💡 <strong>For non-technical visitors:</strong> Each project below explains what the system
            does and who it helps first. Technical architecture is available on expansion for engineers and recruiters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
