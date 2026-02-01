export default function Home() {
  return (
    <>
      <header className="w-full flex justify-center py-6 px-4 md:px-8">
        <div className="max-w-[720px] w-full flex items-center justify-between">
          <a className="flex items-center gap-2 group" href="/">
            <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform">
              potted_plant
            </span>
            <span className="text-xl font-bold tracking-tight text-text-main dark:text-white">
              Notes by Ji
            </span>
          </a>
          <nav className="flex items-center gap-6 md:gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4 text-text-main dark:text-gray-300"
              href="#"
            >
              Blog
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4 text-text-main dark:text-gray-300"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors hover:underline decoration-primary decoration-2 underline-offset-4 text-text-main dark:text-gray-300"
              href="#"
            >
              RSS
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center px-4 md:px-8 pb-16">
        <div className="max-w-[720px] w-full flex flex-col gap-12 md:gap-16 pt-8 md:pt-12">
          <section className="flex flex-col items-start gap-5">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-text-main dark:text-white">
                Hi, I&apos;m Alex. <br />
                Welcome to my{" "}
                <span className="relative inline-block whitespace-nowrap">
                  digital garden
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-full"></span>
                </span>
                .
              </h1>
            </div>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-[600px]">
              I write about JavaScript, calm design, and building for the web.
              This is a space for thoughts on code, philosophy, and the
              occasional doodle.
            </p>
            <div className="flex gap-4 pt-1">
              <button className="flex items-center gap-2 text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all hover:scale-105">
                <span>More about me</span>
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-12">
            <div className="flex items-center gap-2 pb-4 border-b border-dashed border-gray-300 dark:border-gray-600">
              <span className="material-symbols-outlined text-text-muted">
                history_edu
              </span>
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                Latest Writings
              </h2>
            </div>

            <article className="group cursor-pointer">
              <a className="flex flex-col gap-3" href="/article">
                <header className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                    Thinking in React Hooks
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <time dateTime="2023-10-24">Oct 24, 2023</time>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    <span>8 min read</span>
                  </div>
                </header>
                <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-[650px]">
                  A deep dive into mental models and how to stop fighting the
                  framework. We explore the &apos;why&apos; behind the dependency
                  array and how to escape the closure traps.
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read article{" "}
                  <span className="material-symbols-outlined text-[16px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </a>
            </article>

            <article className="group cursor-pointer">
              <a className="flex flex-col gap-3" href="#">
                <header className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                    Why I chose Next.js
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <time dateTime="2023-09-12">Sep 12, 2023</time>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    <span>5 min read</span>
                  </div>
                </header>
                <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-[650px]">
                  Performance matters, but so does developer experience. Here
                  is a breakdown of why I switched my entire portfolio from
                  vanilla CRA to the Next.js ecosystem.
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read article{" "}
                  <span className="material-symbols-outlined text-[16px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </a>
            </article>

            <article className="group cursor-pointer">
              <a className="flex flex-col gap-3" href="#">
                <header className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                    Digital Gardening 101
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <time dateTime="2023-08-05">Aug 05, 2023</time>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    <span>12 min read</span>
                  </div>
                </header>
                <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-[650px]">
                  Treating your blog like a living ecosystem rather than a
                  static archive. How to cultivate ideas over time and embrace
                  the messiness of learning in public.
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read article{" "}
                  <span className="material-symbols-outlined text-[16px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </a>
            </article>

            <article className="group cursor-pointer">
              <a className="flex flex-col gap-3" href="#">
                <header className="flex flex-col gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                    The Joy of CSS Grid
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <time dateTime="2023-07-15">Jul 15, 2023</time>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                    <span>6 min read</span>
                  </div>
                </header>
                <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-[650px]">
                  Forget floats and flexbox hacks. Let&apos;s rediscover the joy of
                  layout design with native CSS Grid properties and how they
                  simplify responsive UIs.
                </p>
                <div className="flex items-center text-primary font-bold text-sm mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read article{" "}
                  <span className="material-symbols-outlined text-[16px] ml-1">
                    arrow_forward
                  </span>
                </div>
              </a>
            </article>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
            <div className="relative z-10 flex flex-col gap-6 items-start">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-text-main dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  Stay in the loop
                </h2>
                <p className="text-text-muted max-w-md">
                  Get notified when I publish new posts. No spam, just cozy tech
                  updates delivered to your inbox once a month.
                </p>
              </div>
              <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  className="flex-1 bg-background-light dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-text-muted/60"
                  placeholder="your@email.com"
                  type="email"
                />
                <button
                  className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                  type="button"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-text-muted/70">
                Join 2,000+ other friendly developers.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full py-12 border-t border-gray-200 dark:border-gray-700 flex justify-center px-4">
        <div className="max-w-[720px] w-full flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              className="text-text-muted hover:text-primary transition-colors text-sm font-bold"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-text-muted hover:text-primary transition-colors text-sm font-bold"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-text-muted hover:text-primary transition-colors text-sm font-bold"
              href="#"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-text-muted text-sm text-center sm:text-right">
            Built with <span className="text-primary">♥</span> and Next.js.
            <br className="sm:hidden" />© 2023 Notes by Ji.
          </p>
        </div>
      </footer>
    </>
  );
}
