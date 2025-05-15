interface TypingAnimationProps {
  fullText: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}
