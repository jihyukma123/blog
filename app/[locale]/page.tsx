import { notFound } from "next/navigation";
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
          <nav className="flex items-center gap-6 md:gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4 text-text-main dark:text-gray-300"
              href="#"
            >
              {content.nav.blog}
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4 text-text-main dark:text-gray-300"
              href="#"
            >
              {content.nav.about}
            </a>
          </nav>
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

            {content.articles.map((article, index) => (
              <article key={`${article.title}-${index}`} className="group cursor-pointer">
                <a
                  className="flex flex-col gap-3"
                  href={article.href.startsWith("/") ? `${basePath}${article.href}` : article.href}
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
        </div>
      </main>

      <footer className="w-full py-12 border-t border-gray-200 dark:border-gray-700 flex justify-center px-4">
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
            {content.footer.builtWith}
            <br className="sm:hidden" />© 2023 Notes by Ji.
          </p>
        </div>
      </footer>
    </>
  );
}
