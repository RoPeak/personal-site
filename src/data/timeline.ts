export interface TimelineEntry {
  id: string;
  title: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  order: number;
}

export const timeline: TimelineEntry[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Operations and Architecture",
    period: "2022 - 2023",
    location: "Leidos, Glasgow",
    description:
      "Started my apprenticeship embedded in a cybersecurity operations environment. Gained hands-on experience performing vulnerability assessments, threat intelligence analysis, and incident response. Built foundational skills in cloud infrastructure - deploying and managing AWS EC2 instances, configuring Splunk log-forwarding pipelines, and working with Linux and Windows servers in a regulated network environment.",
    highlights: [
      "Vulnerability assessments and threat intelligence analysis",
      "AWS EC2 deployment and administration",
      "Splunk log-forwarding integration",
      "Network security fundamentals - subnets, security groups, access controls",
    ],
    tags: ["AWS", "Linux", "Windows Server", "Splunk", "Cybersecurity", "Networking"],
    order: 1,
  },
  {
    id: "pipeline-plus",
    title: "Legacy Systems Modernisation",
    period: "2023 - 2024",
    location: "Leidos, Glasgow",
    description:
      "Worked on modernising a legacy C and C++ application to Oracle Cloud Infrastructure. Independently researched and resolved complex technical challenges with limited prior documentation, and delivered a proof-of-concept that was presented to stakeholders with written and verbal recommendations. This rotation built real depth in systems-level programming and the realities of working with older codebases in a professional setting.",
    highlights: [
      "Refactored legacy C/C++ codebase for OCI deployment",
      "Independent technical research and problem resolution",
      "Proof-of-concept delivery with stakeholder presentation",
      "Deep exposure to C, legacy Oracle APIs, and OCI",
    ],
    tags: ["C", "C++", "Oracle Cloud", "Legacy Modernisation", "Systems Programming"],
    order: 2,
  },
  {
    id: "nws",
    title: "Public-Sector Frontend Delivery",
    period: "2024",
    location: "Leidos, Glasgow",
    description:
      "Delivered frontend features for a public-sector digital service using React and Node.js. Worked within a fully Agile team - participating in sprints, demos, and retrospectives - and frequently presented completed work directly to the customer. Received a Leidos STAR Award for agility, collaboration, and commitment after delivering under tight deadlines with evolving requirements and last-minute defect resolution.",
    highlights: [
      "React and Node.js frontend delivery for a live public-sector service",
      "Full Agile workflow - sprints, demos, retrospectives",
      "Regular customer-facing presentations",
      "Leidos STAR Award recipient",
    ],
    tags: ["React", "Node.js", "JavaScript", "Agile", "Git", "Public Sector"],
    order: 3,
  },
  {
    id: "lava",
    title: "Maritime Autonomy R&D",
    period: "2024 - Present",
    location: "Leidos, Glasgow",
    description:
      "Currently working in a fluid R&D environment on an autonomous surface vessel system. The work involves self-directed research spikes into technologies that are new to the team, microservice development, middleware integration, and building engineering tooling to support simulation-based testing. This rotation forms the basis of my final-year university dissertations.",
    highlights: [
      "Autonomous surface vessel software stack",
      "Middleware-facing microservice development",
      "Real-time observability dashboard for simulation environments",
      "CI/CD pipeline setup with Bamboo, Docker, and Harbor",
      "Self-managed research in a novel technical domain",
    ],
    tags: ["Python", "Microservices", "Docker", "CI/CD", "R&D", "Simulation", "Middleware"],
    order: 4,
  },
];
