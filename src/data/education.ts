export interface Module {
  name: string;
  notes?: string;
}

export interface AcademicYear {
  year: string;
  label: string;
  modules: Module[];
}

export interface Dissertation {
  id: string;
  title: string;
  subtitle: string;
  abstract: string;
  pdfPath: string;
  date: string;
}

export const degree = {
  title: "BSc (Hons) Software Engineering with Human Computer Interaction",
  institution: "University of Glasgow",
  school: "School of Computing Science",
  expectedGraduation: "July 2026",
  standing: "On track for first-class honours",
  type: "Graduate Apprenticeship (integrated degree and industry placement)",
} as const;

export const academicYears: AcademicYear[] = [
  {
    year: "1",
    label: "Year 1 (2022-2023)",
    modules: [
      { name: "How to Learn a New Language" },
      { name: "Foundations of Professional Software Engineering" },
      { name: "Web Application Systems" },
      { name: "Computer Architecture and Network Systems" },
      { name: "Testing and Improvement" },
      { name: "Academic Writing Skills Programme" },
    ],
  },
  {
    year: "2",
    label: "Year 2 (2023-2024)",
    modules: [
      { name: "Practical Algorithms" },
      { name: "Advanced Professional Software Engineering" },
      { name: "Algorithmics" },
      { name: "Data Science Fundamentals" },
      { name: "Data Storage and Retrieval" },
      { name: "Systems Programming" },
      { name: "User Interaction" },
    ],
  },
  {
    year: "3",
    label: "Year 3 (2024-2025)",
    modules: [
      { name: "Professional Issues in the Workplace" },
      { name: "Functional Programming" },
      { name: "Mobile Human Computer Interaction" },
      { name: "Patient Centred Health Technology" },
      { name: "Human Centred Security" },
      { name: "Conversational Interfaces" },
    ],
  },
  {
    year: "4",
    label: "Year 4 (2025-2026)",
    modules: [
      { name: "Research Methods and Techniques" },
      { name: "Computing Science Education Theory and Practice" },
      { name: "Software Engineering Release Practices" },
      { name: "Workplace Project Supplement", notes: "Elective second dissertation focused on workplace engineering" },
    ],
  },
];

export const dissertations: Dissertation[] = [
  {
    id: "wpa4",
    title: "Engineering Query and Injection Interfaces for an Inherited Autonomous Maritime System",
    subtitle: "Year 4 Workplace Project Assessment",
    abstract:
      "The project addressed the challenge of making an inherited autonomous maritime software stack more queryable, testable, and maintainable. The central delivered outcomes were a DDS Query Service - which exposed selected autonomy-relevant middleware data as structured JSON - and a Contact Injection Service, which allowed synthetic contacts to be introduced into the autonomy-facing data stream for repeatable engineering checks and scenario setup. These were reinforced by automated test suites (113 and 137 tests respectively, at 63% and 65% coverage), mock execution modes, and a containerised CI/CD path using Bamboo, Docker, and Harbor.",
    pdfPath: "/assets/docs/wpa4-project-report.pdf",
    date: "April 2026",
  },
  {
    id: "wps",
    title: "Complex Telemetry to Human-Readable Situations: A Lightweight Maritime Observability Dashboard",
    subtitle: "Workplace Project Supplement (Elective)",
    abstract:
      "This project reports on the design, implementation, and evaluation of a lightweight real-time situational awareness dashboard supporting development and debugging during software-in-the-loop (SIL) simulation runs for a UK maritime autonomy programme. The solution subscribes to selected middleware telemetry streams, decodes and normalises values into human-readable units, and presents own-ship state and nearby contacts in a browser with explicit connection and data-freshness indicators. An extension adds synthetic contact injection controls for repeatable local development and evaluation scenarios. The dashboard was developed iteratively through successive releases and evaluated using task-based walkthroughs and SUS scoring.",
    pdfPath: "/assets/docs/wps-project-report.pdf",
    date: "March 2026",
  },
];
