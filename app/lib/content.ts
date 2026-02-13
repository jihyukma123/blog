import type { Locale } from "./i18n";
import { t } from "./messages";

export type SiteContent = {
  title: string;
  tagline: string;
  footer: {
    copyright: string;
  };
};

export type HomeContent = {
  about: {
    name: string;
    roleLine: string;
    paragraphs: string[];
  };
  readPost: string;
  olderPosts: string;
};

export type ArticleLabels = {
  tableOfContents: string;
  backToHome: string;
  previousPost: string;
  nextPost: string;
};

export const getSiteContent = (locale: Locale): SiteContent => ({
  title: t(locale, "site.title"),
  tagline: t(locale, "site.tagline"),
  footer: {
    copyright: t(locale, "footer.copyright"),
  },
});

export const getHomeContent = (locale: Locale): HomeContent => ({
  about: {
    name: t(locale, "home.about.name"),
    roleLine: t(locale, "home.about.roleLine"),
    paragraphs: [
      t(locale, "home.about.p1"),
      t(locale, "home.about.p2"),
      t(locale, "home.about.p3"),
      t(locale, "home.about.p4"),
    ].filter(Boolean),
  },
  readPost: t(locale, "home.readPost"),
  olderPosts: t(locale, "home.olderPosts"),
});

export const getArticleLabels = (locale: Locale): ArticleLabels => ({
  tableOfContents: t(locale, "article.labels.toc"),
  backToHome: t(locale, "article.labels.backToHome"),
  previousPost: t(locale, "article.labels.previous"),
  nextPost: t(locale, "article.labels.next"),
});
