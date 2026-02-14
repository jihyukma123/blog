type SiteFooterProps = {
  copyright: string;
};

export default function SiteFooter({ copyright }: SiteFooterProps) {
  return (
    <footer className="mt-auto w-full max-w-[800px] mx-auto px-6 py-12 border-t border-primary/10 text-sm text-text-muted">
      <span className="sr-only">{copyright}</span>
    </footer>
  );
}
