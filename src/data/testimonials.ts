export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  linkedin?: string;
}

// Each entry renders as a quote card in the Testimonials section on the homepage.
export const testimonials: Testimonial[] = [
  {
    quote:
      "It was clear from the outset that he is an extremely competent engineer and was able to tackle complex tasks with little or no assistance, quickly becoming a highly dependable member of the team. His contribution to the NWS project was invaluable and he was a key part of the successful delivery of an important service.",
    author: "Kevin Burke",
    title: "Team Lead, Next Warning Service (former)",
    company: "Leidos",
    linkedin: "",
  },
  {
    quote:
      "From start to finish, everything Ronan did was professional and of high quality. I was very impressed by the maturity and professionalism Ronan showed. Very easy-going, smart and appears to enjoy a challenge.",
    author: "Alan Moss",
    title: "IT Project Manager",
    company: "Leidos",
    linkedin: "",
  },
  {
    quote:
      "It has been a great pleasure to work with Ronan. He is a bright young man with a keen interest in learning things. His enthusiasm was evident throughout, and I welcome the opportunity to work with him again.",
    author: "Paul Dean",
    title: "Principal Cyber Security Engineer",
    company: "Leidos",
    linkedin: "",
  },
  {
    quote:
      "You are self-sufficient and ready to take on tasks even if they don't fall in your area of expertise - I think you enjoy and thrive on a challenge. You show maturity and professionalism in your work and communication.",
    author: "Laurent Peny",
    title: "Senior Software Engineer",
    company: "Leidos",
    linkedin: "",
  },
  {
    quote:
      "I went back in and said we must take that Graduate on. I spent a few minutes in disbelief that you were just finishing school - you are a special talent.",
    author: "Mick Whitely",
    title: "Early Careers Lead (retired)",
    company: "Leidos",
    linkedin: "",
  },
  {
    quote:
      "Your contributions to NWS were greatly appreciated and genuinely impressive given where you are in your career.",
    author: "Tom Legge",
    title: "Senior Programme Manager",
    company: "Leidos",
    linkedin: "",
  },
  {
    quote:
      "Ronan demonstrates exceptional professionalism and is an absolute pleasure to work with. He is a mature, emotionally intelligent team member who consistently conducts himself with integrity.",
    author: "Catherine Fevre",
    title: "Project Manager",
    company: "Leidos",
    linkedin: "",
  },
  {
    quote:
      "Ronan is an exceptional student - academically at the top of the class, with excellent grades across all courses. Perhaps most significantly, he achieved the joint highest grade in the year for his third year work-based assessment. His conduct and demeanour are exemplary, demonstrating a superb level of maturity and an admirable commitment to excellence. Ronan is a wonderful ambassador for the university, his employer, and Graduate Apprenticeships in general.",
    author: "Matthew Barr",
    title: "Head of Section & Programme Director",
    company: "University of Glasgow",
    linkedin: "",
  },
];
