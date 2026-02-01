import { redirect } from "next/navigation";
import { getAllArticles } from "../lib/articles";
import { defaultLocale } from "../lib/i18n";

export default async function ArticleRootPage() {
  const articles = await getAllArticles(defaultLocale);
  const first = articles[0];

  if (!first) {
    redirect(`/${defaultLocale}`);
  }

  redirect(`/${defaultLocale}/articles/${first.slug}`);
}
