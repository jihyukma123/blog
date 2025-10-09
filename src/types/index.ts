export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
  content?: string; // Markdown 콘텐츠
}

export interface PostMetadata {
  title: string;
  date: string;
  description: string;
}

export interface Note extends Article {}

export interface Project extends Article {}
