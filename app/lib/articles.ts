import fs from "node:fs/promises";
import path from "node:path";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";

import type { Locale } from "./i18n";

export type ArticleFrontmatter = {
  title: string;
  date: string;
  dateTime: string;
  readTime: string;
  excerpt: string;
  categories: string[];
  commentCount?: number;
};

export type ArticleSummary = ArticleFrontmatter & {
  slug: string;
};

export type ArticleDetail = ArticleFrontmatter & {
  slug: string;
  markdown: string;
  toc: { id: string; label: string }[];
};

const ARTICLES_DIR = path.join(process.cwd(), "articles");

const parseDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
};

const extractToc = (markdown: string) => {
  const slugger = new GithubSlugger();
  const toc: { id: string; label: string }[] = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)\s*$/.exec(line);
    if (!match) continue;
    const label = match[2].trim();
    if (!label) continue;
    const id = slugger.slug(label);
    toc.push({ id, label });
  }

  return toc;
};

const getLocaleDir = (locale: Locale) => path.join(ARTICLES_DIR, locale);

const toSlug = (filename: string) => filename.replace(/\.(md|markdown)$/i, "");

const ensureFrontmatter = (data: Record<string, unknown>, slug: string) => {
  const required = ["title", "date", "dateTime", "readTime", "excerpt", "categories"] as const;
  for (const key of required) {
    if (!(key in data)) {
      throw new Error(`Missing frontmatter key '${key}' in article '${slug}'.`);
    }
  }
};

const parseArticleFile = async (locale: Locale, slug: string) => {
  const basePath = path.join(getLocaleDir(locale), slug);
  const candidates = [`${basePath}.md`, `${basePath}.markdown`];
  let raw = "";

  for (const filePath of candidates) {
    try {
      raw = await fs.readFile(filePath, "utf8");
      break;
    } catch {
      continue;
    }
  }

  if (!raw) {
    throw new Error(`Article '${slug}' not found for locale '${locale}'.`);
  }
  const { data, content } = matter(raw);
  ensureFrontmatter(data, slug);

  const frontmatter = {
    ...data,
    categories: Array.isArray(data.categories)
      ? data.categories
      : [data.categories],
  } as ArticleFrontmatter;

  return {
    frontmatter,
    markdown: content.trim(),
  };
};

export const getAllArticles = async (locale: Locale): Promise<ArticleSummary[]> => {
  const dir = getLocaleDir(locale);
  let entries: string[] = [];

  try {
    entries = await fs.readdir(dir);
  } catch {
    return [];
  }

  const slugs = entries
    .filter((entry) => /\.md$|\.markdown$/i.test(entry))
    .map(toSlug);

  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await parseArticleFile(locale, slug);
      return {
        ...frontmatter,
        slug,
      } satisfies ArticleSummary;
    })
  );

  return articles.sort(
    (a, b) => parseDate(b.dateTime).getTime() - parseDate(a.dateTime).getTime()
  );
};

export const getArticleBySlug = async (
  locale: Locale,
  slug: string
): Promise<ArticleDetail | null> => {
  try {
    const { frontmatter, markdown } = await parseArticleFile(locale, slug);

    return {
      ...frontmatter,
      slug,
      markdown,
      toc: extractToc(markdown),
    };
  } catch {
    return null;
  }
};
