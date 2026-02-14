type ArticleCardProps = {
  href: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
};

export default function ArticleCard({ href, title, excerpt, date, dateTime }: ArticleCardProps) {
  return (
    <article className="group pt-10 pb-4 border-b border-primary/25 dark:border-primary/30 last:border-b-0">
      <a className="block" href={href}>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary/80 transition-colors leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-base text-text-muted leading-relaxed">
          {excerpt}
        </p>
        <time
          className="mt-8 block text-terracotta/80 text-sm font-display font-medium tracking-wider uppercase"
          dateTime={dateTime}
        >
          {date}
        </time>
      </a>
    </article>
  );
}
