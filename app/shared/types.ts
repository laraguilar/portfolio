export interface Skill {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  externalLink?: string;
}