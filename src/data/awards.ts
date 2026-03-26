export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeImage?: string;
  verifyUrl?: string;
  links?: { label: string; url: string }[];
  type: 'award' | 'certification' | 'recognition' | 'volunteer';
  order: number;
}

export const awards: Award[] = [
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'February 2026',
    description:
      'Validates foundational knowledge of AWS cloud services, architecture, security, and pricing. Valid through February 2029.',
    badgeImage: '/assets/images/aws-certified-cloud-practitioner.png',
    verifyUrl: 'https://www.credly.com/badges/64cd3136-dee1-46ca-82f7-c93c6af479cc/public_url',
    type: 'certification',
    order: 1,
  },
  {
    id: 'scotlandis-rising-star',
    title: 'Digital Tech Rising Star - Finalist',
    issuer: 'ScotlandIS Digital Technology Awards',
    date: 'March 2026',
    description:
      'Shortlisted as a finalist for the Digital Tech Rising Star award at the ScotlandIS Digital Technology Awards 2026 in Glasgow - recognition of early-career impact in the Scottish tech industry.',
    badgeImage: '/assets/images/digital-tech-finalist-badge.jpg',
    links: [
      {
        label: 'Announcement post',
        url: 'https://www.linkedin.com/posts/ronan-peacock-556ba2331_im-incredibly-grateful-to-share-that-ive-activity-7422588823596863488-Lh4W',
      },
      {
        label: 'Awards night post',
        url: 'https://www.linkedin.com/posts/ronan-peacock-556ba2331_really-proud-to-have-attended-the-scotlandis-activity-7440764131944755200-sWuf',
      },
    ],
    type: 'recognition',
    order: 2,
  },
  {
    id: 'leidos-star',
    title: 'Leidos STAR Award',
    issuer: 'Leidos',
    date: 'October 2025',
    description:
      'Nominated by the Next Warning Service project manager for delivering the public-facing gov.uk website under tight deadlines and rapidly evolving requirements. Recognised for demonstrating agility, collaboration, and commitment throughout the project.',
    type: 'award',
    order: 3,
  },
  {
    id: 'stem-ambassador',
    title: 'UK STEM Ambassador',
    issuer: 'STEM Learning',
    date: '2023 - Present',
    description:
      'Certified STEM Ambassador with PVG (Protecting Vulnerable Groups) clearance. Regularly supports outreach events and works with school pupils to promote technology and engineering careers.',
    type: 'volunteer',
    order: 4,
  },
];
