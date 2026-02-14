"use client";

import type { TocItem } from "./ArticleDetail";

type ArticleTocProps = {
  title: string;
  items: TocItem[];
};

export default function ArticleToc({ title, items }: ArticleTocProps) {
  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      window.location.hash = encodeURIComponent(id);
      return;
    }

    target.scrollIntoView({ behavior: "auto", block: "start" });
    window.history.replaceState(null, "", `#${encodeURIComponent(id)}`);
  };

  return (
    <div className="sticky top-28">
      <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">
        {title}
      </h3>
      <nav className="flex flex-col gap-4 border-l border-primary/10">
        {items.map((item) => (
          <a
            key={item.id}
            className={`toc-link text-sm font-medium hover:text-primary/80 transition-colors pl-4 ${
              item.active ? "active" : "text-text-muted"
            }`}
            href={`#${encodeURIComponent(item.id)}`}
            onClick={(event) => {
              event.preventDefault();
              scrollTo(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
