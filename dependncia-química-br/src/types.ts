export interface Unit {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
  description: string;
}

export interface Testimonial {
  id: number;
  stars: number;
  text: string;
  author: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}
