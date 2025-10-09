import type { Article, Note, Project } from "../types";
import { loadPosts } from "../utils/postLoader";

// 실제 포스트는 동적으로 로드
// 초기값은 빈 배열이지만, 컴포넌트에서 loadPosts()를 호출하여 채움
export let blogPosts: Article[] = [];

// 초기화 함수 (앱 시작 시 호출)
export async function initializeBlogPosts() {
  blogPosts = await loadPosts();
  return blogPosts;
}

export const notes: Note[] = [
  {
    id: "note-1",
    title: "Quick Git Commands Reference",
    description:
      "A cheat sheet of the most commonly used Git commands for daily development.",
    date: "October 6, 2025",
    link: "/notes/git-commands",
  },
  {
    id: "note-2",
    title: "VS Code Shortcuts for Productivity",
    description:
      "Essential keyboard shortcuts to speed up your coding workflow in VS Code.",
    date: "October 3, 2025",
    link: "/notes/vscode-shortcuts",
  },
  {
    id: "note-3",
    title: "Array Methods in JavaScript",
    description:
      "Quick reference for map, filter, reduce, and other array methods.",
    date: "September 29, 2025",
    link: "/notes/array-methods",
  },
  {
    id: "note-4",
    title: "Async/Await Patterns",
    description:
      "Common patterns and best practices for handling asynchronous code.",
    date: "September 25, 2025",
    link: "/notes/async-await",
  },
  {
    id: "note-5",
    title: "React Hooks Cheat Sheet",
    description:
      "Quick reference for useState, useEffect, and other essential React hooks.",
    date: "September 18, 2025",
    link: "/notes/react-hooks",
  },
  {
    id: "note-6",
    title: "CSS Flexbox Basics",
    description:
      "Understanding flexbox properties and how to use them effectively.",
    date: "September 12, 2025",
    link: "/notes/flexbox-basics",
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Personal Blog Platform",
    description:
      "A minimalist blog built with React, TypeScript, and Tailwind CSS.",
    date: "October 2025",
    link: "/projects/blog-platform",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects with drag-and-drop functionality.",
    date: "September 2025",
    link: "/projects/task-manager",
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description:
      "Real-time weather information dashboard using external APIs and data visualization.",
    date: "August 2025",
    link: "/projects/weather-dashboard",
  },
  {
    id: "project-4",
    title: "E-commerce Store",
    description:
      "Full-stack e-commerce platform with shopping cart and payment integration.",
    date: "July 2025",
    link: "/projects/ecommerce-store",
  },
  {
    id: "project-5",
    title: "Markdown Editor",
    description:
      "A real-time markdown editor with live preview and syntax highlighting.",
    date: "June 2025",
    link: "/projects/markdown-editor",
  },
  {
    id: "project-6",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills.",
    date: "May 2025",
    link: "/projects/portfolio",
  },
];
