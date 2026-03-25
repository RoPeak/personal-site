export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  linkedin?: string;
}

// Add testimonials here once permission has been confirmed with each person.
// Each entry renders as a quote card in the Testimonials section on the homepage.
export const testimonials: Testimonial[] = [];
