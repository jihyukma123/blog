import { notFound } from "next/navigation";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { getAllArticles } from "../lib/articles";
import { getHomeContent, getSiteContent } from "../lib/content";
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

  const site = getSiteContent(resolvedParams.locale);
  const content = getHomeContent(resolvedParams.locale);
  const articles = await getAllArticles(resolvedParams.locale);
  const basePath = `/${resolvedParams.locale}`;

  return (
    <>
      <SiteHeader
        title={site.title}
        tagline={site.tagline}
        homeHref={basePath}
        githubHref="https://github.com/jihyukma123"
        linkedInHref="https://www.linkedin.com/in/%EC%A7%80%ED%98%81-%EB%A7%88-423844196/"
      />

      <main className="w-full max-w-[800px] mx-auto px-6 pt-6 pb-12 flex-1">
        <div className="flex flex-col pt-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group py-10 border-b border-primary/25 dark:border-primary/30 last:border-b-0"
            >
              <time className="text-terracotta/80 text-sm font-display font-medium mb-2 block tracking-wider uppercase">
                {article.date}
              </time>
              <a className="block" href={`${basePath}/articles/${article.slug}`}>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary/80 transition-colors leading-tight">
                  {article.title}
                </h3>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-primary/10 flex justify-center">
          <button
            aria-disabled="true"
            className="bg-primary/5 hover:bg-primary/10 text-primary px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 group opacity-60 cursor-not-allowed"
            disabled
            type="button"
          >
            {content.olderPosts}
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
              keyboard_double_arrow_down
            </span>
          </button>
        </div>
      </main>

      <SiteFooter copyright={site.footer.copyright} />
    </>
  );
}
