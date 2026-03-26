export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'C#', 'SQL', 'Bash'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Redis', 'Prisma', 'REST APIs'],
  },
  {
    label: 'Data and Analytics',
    skills: ['dbt', 'DuckDB', 'Polars', 'Prefect', 'Streamlit', 'Pandas', 'Medallion Architecture'],
  },
  {
    label: 'Cloud and DevOps',
    skills: [
      'AWS',
      'Docker',
      'GitHub Actions',
      'Bamboo',
      'Oracle Cloud',
      'Cloudflare Pages',
      'CI/CD',
    ],
  },
  {
    label: 'Tooling and Practices',
    skills: ['Git', 'Agile', 'Jira', 'Confluence', 'Vitest', 'Playwright', 'pytest', 'Linux'],
  },
];
