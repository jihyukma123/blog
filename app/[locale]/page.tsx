import { notFound } from "next/navigation";
import { getAllArticles } from "../lib/articles";
import { getHomeContent } from "../lib/content";
import { isLocale, locales } from "../lib/i18n";

export const dynamicParams = false;

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const content = getHomeContent(resolvedParams.locale);
  const articles = await getAllArticles(resolvedParams.locale);
  const basePath = `/${resolvedParams.locale}`;

  return (
    <>
      <header className="w-full flex justify-center py-6 px-4 md:px-8">
        <div className="max-w-[720px] w-full flex items-center justify-between">
          <a className="flex items-center gap-2 group" href={basePath}>
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
                {content.nav.blog}
              </a>
              <a
                className="text-sm font-medium text-text-main dark:text-gray-300 hover:text-primary transition-colors"
                href="#"
              >
                {content.nav.about}
              </a>
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
      <main className="flex-1 flex flex-col items-center px-4 md:px-8 pb-16">
        <div className="max-w-[720px] w-full flex flex-col gap-12 md:gap-16 pt-8 md:pt-12">
          <section className="flex flex-col items-start gap-5">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-text-main dark:text-white">
                {content.hero.line1}
                <br />
                <span className="relative inline-block whitespace-nowrap">
                  {content.hero.line2Lead}
                  <span className="relative inline-block">
                    {content.hero.line2Highlight}
                    <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span>
                  </span>
                  {content.hero.line2Tail}
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-[600px]">
              {content.hero.subtitle}
            </p>
            <div className="flex gap-4 pt-1">
              <button className="flex items-center gap-2 text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all hover:scale-105">
                <span>{content.hero.cta}</span>
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-12">
            <div className="flex items-center gap-2 pb-4 border-b border-dashed border-gray-300 dark:border-gray-600">
              <span className="material-symbols-outlined text-text-muted">
                history_edu
              </span>
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                {content.latestWritings}
              </h2>
            </div>

            {articles.map((article, index) => (
              <article key={`${article.title}-${index}`} className="group cursor-pointer">
                <a
                  className="flex flex-col gap-3"
                  href={`${basePath}/articles/${article.slug}`}
                >
                  <header className="flex flex-col gap-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-text-muted">
                      <time dateTime={article.dateTime}>{article.date}</time>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      <span>{article.readTime}</span>
                    </div>
                  </header>
                  <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-[650px]">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {content.readArticle}{" "}
                    <span className="material-symbols-outlined text-[16px] ml-1">
                      arrow_forward
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </section>

          {/*
            TODO: 나중에 소식 받기 섹션 다시 추가하기.
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
              <div className="relative z-10 flex flex-col gap-6 items-start">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-text-main dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      mail
                    </span>
                    {content.newsletter.title}
                  </h2>
                  <p className="text-text-muted max-w-md">
                    {content.newsletter.description}
                  </p>
                </div>
                <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                  <input
                    className="flex-1 bg-background-light dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-text-muted/60"
                    placeholder={content.newsletter.placeholder}
                    type="email"
                  />
                  <button
                    className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                    type="button"
                  >
                    {content.newsletter.button}
                  </button>
                </form>
                <p className="text-xs text-text-muted/70">
                  {content.newsletter.footnote}
                </p>
              </div>
            </section>
          */}
        </div>
      </main>

      <footer className="w-full py-12 border-t border-gray-200 dark:border-gray-700 flex justify-center px-4">
        <div className="max-w-[720px] w-full flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm text-center sm:text-right">
            {content.footer.builtWith}
            <br className="sm:hidden" />© 2023 Notes by Ji.
          </p>
        </div>
      </footer>
    </>
  );
}
