
export interface Project {
  title: string;
  github: string;
  stack: string[];
  period: string;
  description: string;
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  score: string;
  period: string;
  location: string;
}

export interface Achievement {
  title: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
