// interfaces.ts
export interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}
