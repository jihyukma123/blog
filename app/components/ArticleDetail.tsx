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

export type NavLabels = {
  blog: string;
  about: string;
};

export type ArticleLabels = {
  tableOfContents: string;
  backToHome: string;
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
  homeHref?: string;
  navLabels?: NavLabels;
  labels?: ArticleLabels;
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
  homeHref = "/",
  navLabels = { blog: "Blog", about: "About" },
  labels = {
    tableOfContents: "Table of Contents",
    backToHome: "Back to Home",
  },
}: ArticleDetailProps) {
  const renderedMarkdown = markdown ? await renderMarkdown(markdown) : null;

  return (
    <>
      <header className="w-full flex justify-center py-8 px-4 md:px-8 border-b border-gray-200/50 dark:border-gray-800">
        <div className="max-w-[720px] w-full flex items-center justify-between">
          <a className="flex items-center gap-2 group" href={homeHref}>
            <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform">
              potted_plant
            </span>
            <span className="text-xl font-bold tracking-tight text-text-main dark:text-white">
              Notes by Ji
            </span>
          </a>
          <div className="flex items-center gap-6 md:gap-8">
            <nav className="flex items-center gap-6 md:gap-8">
              <a
                className="text-sm font-semibold text-text-main dark:text-white underline decoration-primary decoration-2 underline-offset-4"
                href="#"
              >
                {navLabels.blog}
              </a>
              <a
                className="text-sm font-medium text-text-main dark:text-gray-300 hover:text-primary transition-colors"
                href="#"
              >
                {navLabels.about}
              </a>
              <button className="material-symbols-outlined text-text-muted hover:text-primary transition-colors">
                search
              </button>
            </nav>
            {/*
              TODO: 로고 추가 및 위치 설정
              <div className="hidden sm:flex items-center gap-3">
                <a
                  aria-label="GitHub"
                  className="text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.69.24 2.94.12 3.25.77.85 1.24 1.93 1.24 3.25 0 4.62-2.8 5.64-5.48 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
                  </svg>
                </a>
                <a
                  aria-label="LinkedIn"
                  className="text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.67H9.31V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.23 2.36 4.23 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
                  </svg>
                </a>
              </div>
            */}
          </div>
        </div>
      </header>

      <main className="flex-1 flex justify-center px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-[720px] w-full relative">
          <article className="w-full">
            <header className="mb-12">
              <div className="flex items-center gap-3 text-sm font-bold text-primary mb-4 uppercase tracking-widest">
                {meta.categories.map((category, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="flex items-center gap-3"
                  >
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
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>{meta.readTime}</span>
                </div>
              </div>
            </header>

            <div className="max-w-none article-content">
              {renderedMarkdown ? (
                <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
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
                  <a
                    className="flex-1 md:text-right group"
                    href={nextPost.href}
                  >
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
                  href={homeHref}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    home
                  </span>
                  <span>{labels.backToHome}</span>
                </a>
              </div>
            </footer>
          </article>

          <aside className="hidden lg:block toc-rail">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
                  {labels.tableOfContents}
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
        <div className="max-w-180 w-full flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm text-center sm:text-right">
            Built with <span className="text-primary">♥</span> and Next.js.
            <br className="sm:hidden" />© 2023 Notes by Ji.
          </p>
        </div>
      </footer>
    </>
  );
}
