export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export interface Note extends Article {}

export interface Project extends Article {}
