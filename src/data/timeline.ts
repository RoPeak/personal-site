export interface TimelineEntry {
  id: string;
  title: string;
  period: string;
  employer: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  order: number;
}

export const timeline: TimelineEntry[] = [
  {
    id: 'twizzit',
    title: 'Full Stack Developer',
    period: 'September 2026 - Present',
    employer: 'Twizzit',
    location: 'Glasgow, Scotland',
    description:
      "Working within Twizzit's product engineering team on the continued development and support of its SaaS platform across frontend and backend systems. The role spans shaping solutions, implementation, code review, end-to-end testing, production delivery, and post-release support.",
    highlights: [
      'Developing new product features and improving existing functionality across the stack',
      'Investigating and resolving bugs, production issues, and ongoing application-support needs',
      'Contributing to product, technical, and design decisions from initial discussion through delivery',
      "Collaborating with developers and other teams within Twizzit's Shape Up development process",
    ],
    tags: ['Full Stack Development', 'Frontend', 'Backend', 'Code Review', 'Testing', 'Shape Up'],
    order: 1,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Operations and Architecture',
    period: '2022 - 2023',
    employer: 'Leidos',
    location: 'Glasgow, Scotland',
    description:
      'Worked in a cybersecurity operations environment as part of a broader software engineering apprenticeship. Gained exposure to security monitoring and investigation using AWS, Splunk, AWS WAF, GuardDuty, and CloudTrail, alongside cloud infrastructure and regulated-network practices.',
    highlights: [
      'Security monitoring and investigation',
      'AWS cloud and security tooling',
      'Splunk log analysis',
      'Cloud and network security fundamentals',
    ],
    tags: ['AWS', 'Splunk', 'AWS WAF', 'GuardDuty', 'CloudTrail', 'Cybersecurity'],
    order: 5,
  },
  {
    id: 'pipeline-plus',
    title: 'Legacy Systems Modernisation',
    period: '2023 - 2024',
    employer: 'Leidos',
    location: 'Glasgow, Scotland',
    description:
      'Investigated an unfamiliar legacy C application using older Oracle APIs, building an understanding of existing behaviour and researching modernisation approaches. Compared potential solutions, produced and tested a proof of concept, and documented recommendations for stakeholders.',
    highlights: [
      'Legacy C and Oracle API investigation',
      'Research and comparison of modernisation approaches',
      'Proof-of-concept implementation and testing',
      'Technical documentation and stakeholder recommendations',
    ],
    tags: ['C', 'Oracle', 'Legacy Modernisation', 'Systems Investigation', 'Proof of Concept'],
    order: 4,
  },
  {
    id: 'nws',
    title: 'Next Flood Warning Service',
    period: '2024',
    employer: 'Leidos',
    location: 'Glasgow, Scotland',
    description:
      "Contributed to the UK's Next Flood Warning Service, delivering user-facing React and Node.js functionality through the full delivery lifecycle. Work included geospatial upload and validation workflows for custom flood warning areas, interactive mapping, file validation, defect investigation, stakeholder demonstrations, and production support.",
    highlights: [
      'Geospatial upload, validation, and display workflows using interactive mapping and AWS S3',
      'React and Node.js feature delivery for a live public-sector service',
      'Testing, defect investigation, and stakeholder demonstrations',
      'Leidos STAR Award recipient',
    ],
    tags: ['React', 'Node.js', 'JavaScript', 'AWS S3', 'Interactive Mapping', 'Public Sector'],
    order: 3,
  },
  {
    id: 'lava',
    title: 'Maritime Autonomy R&D',
    period: '2024 - 2026',
    employer: 'Leidos',
    location: 'Glasgow, Scotland',
    description:
      'Contributed to maritime autonomy research and development through system investigation, simulation, log analysis, technical research, documentation, and knowledge sharing. The work supported engineering understanding and evaluation in a complex, evolving domain.',
    highlights: [
      'System investigation and simulation support',
      'Log analysis and technical research',
      'Documentation and knowledge sharing',
      'Independent learning in an unfamiliar engineering domain',
    ],
    tags: ['R&D', 'Simulation', 'Log Analysis', 'Technical Research', 'Documentation'],
    order: 2,
  },
];
