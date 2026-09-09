export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
  highlights: string[];
  architectureOverview?: {
    frontend?: string;
    backend?: string;
    database?: string;
    integration?: string;
    flow?: string[];
  };
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  iconName: string;
  category: string;
  level: string; // e.g. "Primary Stack", "Enterprise Production", "Advanced"
  focus: string; // concise description of practical usage
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  keyWins: string[];
}

export interface EngineeringHighlight {
  id: string;
  title: string;
  category: string;
  impact: string;
  details: string;
  status: string;
  tags: string[];
}

export interface Capability {
  id: number;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  stack: string[];
}

export interface EngineeringStep {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ValueProposition {
  title: string;
  description: string;
  iconName: string;
}
