export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  badge?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  quote: string;
}
