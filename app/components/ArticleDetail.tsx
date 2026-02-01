import type { ReactNode } from "react";
import { renderMarkdown } from "../lib/markdown";
import CodeBlockEnhancer from "./CodeBlockEnhancer";

export type TocItem = {
  id: string;
  label: string;
  active?: boolean;
};

export type AdjacentPost = {
  label: string;
  title: string;
  href: string;
};

export type ArticleMeta = {
  categories: string[];
  title: string;
  date: string;
  dateTime: string;
  readTime: string;
  commentCount?: number;
};

type ArticleDetailProps = {
  meta: ArticleMeta;
  content?: ReactNode;
  markdown?: string;
  toc?: TocItem[];
  previousPost?: AdjacentPost;
  nextPost?: AdjacentPost;
};

const defaultToc: TocItem[] = [
  { id: "intro", label: "Introduction", active: true },
  { id: "dependency-array", label: "The Dependency Array Myth" },
  { id: "breaking-habit", label: "Breaking the Habit" },
  { id: "conclusion", label: "Conclusion" },
];

export default async function ArticleDetail({
  meta,
  content,
  markdown,
  toc = defaultToc,
  previousPost,
  nextPost,
}: ArticleDetailProps) {
  const renderedMarkdown = markdown ? await renderMarkdown(markdown) : null;

  return (
    <>
      <header className="w-full flex justify-center py-8 px-4 md:px-8 border-b border-gray-200/50 dark:border-gray-800">
        <div className="max-w-[720px] w-full flex items-center justify-between">
          <a className="flex items-center gap-2 group" href="/">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform">
              potted_plant
            </span>
            <span className="text-xl font-bold tracking-tight text-text-main dark:text-white">
              Notes by Ji
            </span>
          </a>
          <nav className="flex items-center gap-6 md:gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4 text-text-main dark:text-gray-300"
              href="#"
            >
              Blog
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4 text-text-main dark:text-gray-300"
              href="#"
            >
              About
            </a>
            <button className="material-symbols-outlined text-text-muted hover:text-primary transition-colors">
              search
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex justify-center px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-[720px] w-full relative">
          <article className="w-full">
            <header className="mb-12">
              <div className="flex items-center gap-3 text-sm font-bold text-primary mb-4 uppercase tracking-widest">
                {meta.categories.map((category, index) => (
                  <div key={`${category}-${index}`} className="flex items-center gap-3">
                    <span>{category}</span>
                    {index < meta.categories.length - 1 ? (
                      <span className="w-1 h-1 rounded-full bg-primary/40"></span>
                    ) : null}
                  </div>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-main dark:text-white mb-6">
                {meta.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-text-muted border-b border-gray-200 dark:border-gray-800 pb-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    calendar_today
                  </span>
                  <time dateTime={meta.dateTime}>{meta.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>{meta.readTime}</span>
                </div>
              </div>
            </header>

            <div className="max-w-none article-content">
              {renderedMarkdown ? (
                <div
                  dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
                />
              ) : (
                content
              )}
              <CodeBlockEnhancer />
            </div>

            <footer className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                {previousPost ? (
                  <a className="flex-1 group" href={previousPost.href}>
                    <span className="text-xs font-bold text-text-muted uppercase tracking-widest block mb-2">
                      {previousPost.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary group-hover:-translate-x-1 transition-transform">
                        arrow_back
                      </span>
                      <span className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                        {previousPost.title}
                      </span>
                    </div>
                  </a>
                ) : null}
                {nextPost ? (
                  <a className="flex-1 md:text-right group" href={nextPost.href}>
                    <span className="text-xs font-bold text-text-muted uppercase tracking-widest block mb-2">
                      {nextPost.label}
                    </span>
                    <div className="flex items-center justify-end gap-3">
                      <span className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                        {nextPost.title}
                      </span>
                      <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </a>
                ) : null}
              </div>
              <div className="flex justify-center">
                <a
                  className="flex items-center gap-2 text-sm font-bold bg-transparent border border-gray-300 dark:border-gray-700 hover:border-primary text-text-muted hover:text-primary px-8 py-3 rounded-lg transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[18px]">home</span>
                  <span>Back to Home</span>
                </a>
              </div>
            </footer>
          </article>

          <aside className="hidden lg:block toc-rail">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
                  Table of Contents
                </h3>
                <nav className="flex flex-col gap-4 border-l border-gray-200 dark:border-gray-800">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      className={`toc-link text-sm font-medium hover:text-primary transition-colors pl-4 ${
                        item.active ? "active" : "text-text-muted"
                      }`}
                      href={`#${item.id}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* TODO: newletter 기능 활성화하기 */}
            </div>
          </aside>
        </div>
      </main>

      <footer className="w-full py-12 border-t border-gray-200 dark:border-gray-800 flex justify-center px-4 mt-auto">
        <div className="max-w-[720px] w-full flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              className="text-text-muted hover:text-primary transition-colors text-sm font-bold"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-text-muted hover:text-primary transition-colors text-sm font-bold"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-text-muted hover:text-primary transition-colors text-sm font-bold"
              href="#"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-text-muted text-sm text-center sm:text-right">
            Built with <span className="text-primary">♥</span> and Next.js.
            <br className="sm:hidden" />© 2023 Notes by Ji.
          </p>
        </div>
      </footer>
    </>
  );
}
