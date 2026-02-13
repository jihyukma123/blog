type SiteHeaderProps = {
  title: string;
  tagline: string;
  homeHref: string;
  githubHref?: string;
  linkedInHref?: string;
};

export default function SiteHeader({
  title,
  tagline,
  homeHref,
  githubHref,
  linkedInHref,
}: SiteHeaderProps) {
  return (
    <header className="w-full max-w-[800px] mx-auto px-6 pt-12 pb-6 flex flex-col items-start">
      <div className="w-full flex items-center gap-4 mb-4">
        <a className="group cursor-pointer shrink-0" href={homeHref}>
          <h1 className="text-2xl font-bold tracking-tight leading-tight text-neutral-900 dark:text-neutral-100">
            {title}
          </h1>
        </a>

        {githubHref || linkedInHref ? (
          <nav className="flex items-center gap-3">
            {githubHref ? (
              <a
                aria-label="GitHub"
                className="text-text-muted hover:text-primary/80 transition-colors"
                href={githubHref}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.69.24 2.94.12 3.25.77.85 1.24 1.93 1.24 3.25 0 4.62-2.8 5.64-5.48 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
                </svg>
              </a>
            ) : null}

            {linkedInHref ? (
              <a
                aria-label="LinkedIn"
                className="text-text-muted hover:text-primary/80 transition-colors"
                href={linkedInHref}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.67H9.31V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.23 2.36 4.23 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
                </svg>
              </a>
            ) : null}
          </nav>
        ) : null}
      </div>
      <p className="text-terracotta font-medium tracking-wide uppercase text-xs mb-0">
        {tagline}
      </p>
    </header>
  );
}
