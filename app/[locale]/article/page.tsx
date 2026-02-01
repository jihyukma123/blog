import { notFound } from "next/navigation";
import ArticleDetail from "../../components/ArticleDetail";
import { getArticleContent } from "../../lib/content";
import { isLocale, locales } from "../../lib/i18n";

export const dynamicParams = false;

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const content = getArticleContent(resolvedParams.locale);
  const basePath = `/${resolvedParams.locale}`;

  return (
    <ArticleDetail
      navLabels={content.nav}
      labels={content.labels}
      meta={content.meta}
      toc={content.toc}
      markdown={content.markdown}
      previousPost={
        content.adjacent.previous
          ? {
              label: content.labels.previousPost,
              title: content.adjacent.previous.title,
              href: "#",
            }
          : undefined
      }
      nextPost={
        content.adjacent.next
          ? {
              label: content.labels.nextPost,
              title: content.adjacent.next.title,
              href: "#",
            }
          : undefined
      }
      homeHref={basePath}
    />
  );
}
