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
    rss: string;
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
  articles: HomeArticle[];
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

export type ArticleContent = {
  nav: HomeContent["nav"];
  meta: {
    categories: string[];
    title: string;
    date: string;
    dateTime: string;
    readTime: string;
    commentCount: number;
  };
  toc: { id: string; label: string; active?: boolean }[];
  markdown: string;
  labels: {
    tableOfContents: string;
    backToHome: string;
    previousPost: string;
    nextPost: string;
  };
  adjacent: {
    previous: { title: string } | null;
    next: { title: string } | null;
  };
};

export const getHomeContent = (locale: Locale): HomeContent => ({
  nav: {
    blog: t(locale, "nav.blog"),
    about: t(locale, "nav.about"),
    rss: t(locale, "nav.rss"),
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
  articles: [
    {
      title: t(locale, "home.article1.title"),
      date: t(locale, "home.article1.date"),
      dateTime: "2023-10-24",
      readTime: t(locale, "home.article1.readTime"),
      excerpt: t(locale, "home.article1.excerpt"),
      href: "/article",
    },
    {
      title: t(locale, "home.article2.title"),
      date: t(locale, "home.article2.date"),
      dateTime: "2023-09-12",
      readTime: t(locale, "home.article2.readTime"),
      excerpt: t(locale, "home.article2.excerpt"),
      href: "#",
    },
    {
      title: t(locale, "home.article3.title"),
      date: t(locale, "home.article3.date"),
      dateTime: "2023-08-05",
      readTime: t(locale, "home.article3.readTime"),
      excerpt: t(locale, "home.article3.excerpt"),
      href: "#",
    },
    {
      title: t(locale, "home.article4.title"),
      date: t(locale, "home.article4.date"),
      dateTime: "2023-07-15",
      readTime: t(locale, "home.article4.readTime"),
      excerpt: t(locale, "home.article4.excerpt"),
      href: "#",
    },
  ],
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

export const getArticleContent = (locale: Locale): ArticleContent => ({
  nav: {
    blog: t(locale, "nav.blog"),
    about: t(locale, "nav.about"),
    rss: t(locale, "nav.rss"),
  },
  meta: {
    categories: [t(locale, "article.category1"), t(locale, "article.category2")],
    title: t(locale, "article.title"),
    date: t(locale, "article.date"),
    dateTime: "2023-10-24",
    readTime: t(locale, "article.readTime"),
    commentCount: 12,
  },
  toc: [
    { id: "introduction", label: t(locale, "article.toc.introduction"), active: true },
    { id: "the-dependency-array-myth", label: t(locale, "article.toc.dependency") },
    { id: "breaking-the-habit", label: t(locale, "article.toc.breaking") },
    { id: "conclusion", label: t(locale, "article.toc.conclusion") },
  ],
  markdown: t(locale, "article.markdown"),
  labels: {
    tableOfContents: t(locale, "article.labels.toc"),
    backToHome: t(locale, "article.labels.backToHome"),
    previousPost: t(locale, "article.labels.previous"),
    nextPost: t(locale, "article.labels.next"),
  },
  adjacent: {
    previous: { title: t(locale, "article.adjacent.previousTitle") },
    next: { title: t(locale, "article.adjacent.nextTitle") },
  },
});
