export interface Application {
  _id?: string;
  name: string;
  tagline: string;
  tech: string[];
  githubLink?: string;
  link: string;
  description: string;
  icon: string;
  status: number;
}
