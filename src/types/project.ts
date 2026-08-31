export interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  isPrivate?: boolean;
}
