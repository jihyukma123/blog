import { notFound } from "next/navigation";
import ArticleDetail from "../../../components/ArticleDetail";
import { getAllArticles, getArticleBySlug } from "../../../lib/articles";
import { getArticleLabels, getSiteContent } from "../../../lib/content";
import { isLocale, locales } from "../../../lib/i18n";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const articles = await getAllArticles(locale);
    for (const article of articles) {
      params.push({ locale, slug: article.slug });
    }
  }

  return params;
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const [site, labels, articles, article] = await Promise.all([
    getSiteContent(resolvedParams.locale),
    getArticleLabels(resolvedParams.locale),
    getAllArticles(resolvedParams.locale),
    getArticleBySlug(resolvedParams.locale, resolvedParams.slug),
  ]);

  if (!article) {
    notFound();
  }

  const basePath = `/${resolvedParams.locale}`;
  const currentIndex = articles.findIndex(
    (item) => item.slug === resolvedParams.slug
  );

  const previous = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;

  return (
    <ArticleDetail
      site={{
        title: site.title,
        tagline: site.tagline,
        copyright: site.footer.copyright,
      }}
      labels={{
        tableOfContents: labels.tableOfContents,
        backToHome: labels.backToHome,
      }}
      meta={{
        categories: article.categories,
        title: article.title,
        excerpt: article.excerpt,
        date: article.date,
        dateTime: article.dateTime,
        readTime: article.readTime,
        commentCount: article.commentCount,
      }}
      toc={article.toc.length > 0 ? article.toc : undefined}
      markdown={article.markdown}
      previousPost={
        previous
          ? {
              label: labels.previousPost,
              title: previous.title,
              href: `${basePath}/articles/${previous.slug}`,
            }
          : undefined
      }
      nextPost={
        next
          ? {
              label: labels.nextPost,
              title: next.title,
              href: `${basePath}/articles/${next.slug}`,
            }
          : undefined
      }
      homeHref={basePath}
    />
  );
}
