import { notFound, redirect } from "next/navigation";
import { getAllArticles } from "../../lib/articles";
import { isLocale, locales } from "../../lib/i18n";

export const dynamicParams = false;

export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default async function ArticleLegacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const articles = await getAllArticles(resolvedParams.locale);
  const first = articles[0];
  if (!first) {
    notFound();
  }

  redirect(`/${resolvedParams.locale}/articles/${first.slug}`);
}
