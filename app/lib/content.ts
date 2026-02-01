import type { Locale } from "./i18n";
import { t } from "./messages";

export type HomeArticle = {
  title: string;
  date: string;
  dateTime: string;
  readTime: string;
  excerpt: string;
  href: string;
};

export type HomeContent = {
  nav: {
    blog: string;
    about: string;
  };
  readArticle: string;
  hero: {
    line1: string;
    line2Lead: string;
    line2Highlight: string;
    line2Tail: string;
    subtitle: string;
    cta: string;
  };
  latestWritings: string;
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    footnote: string;
  };
  footer: {
    builtWith: string;
  };
};

export type ArticleLabels = {
  tableOfContents: string;
  backToHome: string;
  previousPost: string;
  nextPost: string;
};

export const getHomeContent = (locale: Locale): HomeContent => ({
  nav: {
    blog: t(locale, "nav.blog"),
    about: t(locale, "nav.about"),
  },
  readArticle: t(locale, "home.readArticle"),
  hero: {
    line1: t(locale, "home.hero.line1"),
    line2Lead: t(locale, "home.hero.line2Lead"),
    line2Highlight: t(locale, "home.hero.line2Highlight"),
    line2Tail: t(locale, "home.hero.line2Tail"),
    subtitle: t(locale, "home.hero.subtitle"),
    cta: t(locale, "home.hero.cta"),
  },
  latestWritings: t(locale, "home.latestWritings"),
  newsletter: {
    title: t(locale, "newsletter.title"),
    description: t(locale, "newsletter.description"),
    placeholder: t(locale, "newsletter.placeholder"),
    button: t(locale, "newsletter.button"),
    footnote: t(locale, "newsletter.footnote"),
  },
  footer: {
    builtWith: t(locale, "footer.builtWith"),
  },
});

export const getArticleLabels = (locale: Locale): ArticleLabels => ({
  tableOfContents: t(locale, "article.labels.toc"),
  backToHome: t(locale, "article.labels.backToHome"),
  previousPost: t(locale, "article.labels.previous"),
  nextPost: t(locale, "article.labels.next"),
});
