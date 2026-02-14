import type { ReactNode } from "react";
import { renderMarkdown } from "../lib/markdown";
import CodeBlockEnhancer from "./CodeBlockEnhancer";
import ArticleToc from "./ArticleToc";
import SiteFooter from "./SiteFooter";

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

export type ArticleLabels = {
  tableOfContents: string;
  backToHome: string;
};

export type ArticleMeta = {
  categories: string[];
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  readTime: string;
  commentCount?: number;
};

type SiteChrome = {
  title: string;
  tagline: string;
  copyright: string;
};

type ArticleDetailProps = {
  site: SiteChrome;
  meta: ArticleMeta;
  content?: ReactNode;
  markdown?: string;
  toc?: TocItem[];
  previousPost?: AdjacentPost;
  nextPost?: AdjacentPost;
  homeHref?: string;
  labels?: ArticleLabels;
};

export default async function ArticleDetail({
  site,
  meta,
  content,
  markdown,
  toc = [],
  previousPost,
  nextPost,
  homeHref = "/",
  labels = {
    tableOfContents: "Table of Contents",
    backToHome: "Back to Home",
  },
}: ArticleDetailProps) {
  const renderedMarkdown = markdown ? await renderMarkdown(markdown) : null;

  return (
    <>
      <main className="w-full max-w-[1000px] mx-auto px-6 pt-16 pb-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-14">
          <article className="min-w-0">
            <header className="mb-10">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight text-neutral-900 dark:text-neutral-100 mb-4">
                {meta.title}
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-text-muted mb-8">
                {meta.excerpt}
              </p>

              <time
                className="block text-terracotta/80 text-sm font-display font-medium tracking-wider uppercase border-b border-primary/10 pb-4"
                dateTime={meta.dateTime}
              >
                {meta.date}
              </time>
            </header>

            <div className="max-w-none article-content">
              {renderedMarkdown ? (
                <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
              ) : (
                content
              )}
              <CodeBlockEnhancer />
            </div>

            <footer className="mt-20 pt-10 border-t border-primary/10">
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
                      <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary/80 transition-colors">
                        {previousPost.title}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <a
                    className="flex-1 md:text-right group"
                    href={nextPost.href}
                  >
                    <span className="text-xs font-bold text-text-muted uppercase tracking-widest block mb-2">
                      {nextPost.label}
                    </span>
                    <div className="flex items-center justify-end gap-3">
                      <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary/80 transition-colors">
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
                  className="flex items-center gap-2 text-sm font-bold bg-transparent border border-primary/20 hover:border-primary text-text-muted hover:text-primary/80 px-8 py-3 rounded-lg transition-all"
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

          {toc.length > 0 ? (
            <aside className="hidden lg:block">
              <ArticleToc title={labels.tableOfContents} items={toc} />
            </aside>
          ) : null}
        </div>
      </main>

      <SiteFooter copyright={site.copyright} />
    </>
  );
}
