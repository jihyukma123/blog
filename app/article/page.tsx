import ArticleDetail from "../components/ArticleDetail";

const meta = {
  categories: ["Engineering", "React"],
  title: "Thinking in React Hooks: Mental Models for Modern State",
  date: "October 24, 2023",
  dateTime: "2023-10-24",
  readTime: "8 min read",
  commentCount: 12,
};

const toc = [
  { id: "intro", label: "Introduction", active: true },
  { id: "dependency-array", label: "The Dependency Array Myth" },
  { id: "breaking-habit", label: "Breaking the Habit" },
  { id: "conclusion", label: "Conclusion" },
];

export default function ArticlePage() {
  return (
    <ArticleDetail
      meta={meta}
      toc={toc}
      previousPost={{
        label: "Previous Post",
        title: "Why I chose Next.js",
        href: "#",
      }}
      nextPost={{
        label: "Next Post",
        title: "Digital Gardening 101",
        href: "#",
      }}
      content={
        <>
          <p id="intro">
            React Hooks changed everything. When they were introduced, they
            weren&apos;t just a new API—they were a shift in
            <strong> mental models</strong>. Moving from class components to
            functional components with hooks requires us to stop thinking about
            lifecycle methods and start thinking about <em>synchronization</em>.
          </p>
          <h2 id="dependency-array">The Dependency Array Myth</h2>
          <p>
            One of the most common stumbling blocks for developers new to hooks
            is the <code>useEffect</code> dependency array. We often treat it as
            a trigger mechanism: &quot;Run this code when X changes.&quot; While
            practically true, this mindset leads to bugs like stale closures.
          </p>
          <div className="my-8 rounded-xl overflow-hidden bg-[#2A3B3B] shadow-lg">
            <div className="flex items-center justify-between px-4 py-2 bg-[#233232] border-b border-white/5">
              <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">
                Example.js
              </span>
              <span className="material-symbols-outlined text-primary/50 text-sm">
                content_copy
              </span>
            </div>
            <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto text-gray-300">
              <code>{`useEffect(() => {
  const interval = setInterval(() => {
    // This count might be stale!
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []); // Empty array means it only runs once`}</code>
            </pre>
          </div>
          <p>
            Instead, try to view hooks as a way to sync your component&apos;s state
            with the external world. Whether it&apos;s the DOM, a subscription, or
            a data fetch, the hook ensures that the UI reflects the current
            state of your data at any given point in time.
          </p>
          <h2 id="breaking-habit">Breaking the Habit</h2>
          <p>
            Transitioning requires patience. You&apos;ll likely find yourself
            reaching for <code>useRef</code> to mimic instance variables or
            <code>useMemo</code> for everything. The key is to embrace the
            declarative nature of React. Trust the reconciliation process.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 italic text-xl text-text-main/80 font-serif">
            &quot;The most important thing to remember is that hooks are just
            functions, but they are functions with memory.&quot;
          </blockquote>
          <h2 id="conclusion">Conclusion</h2>
          <p>
            As you continue your journey with React, keep experimenting with
            custom hooks. They are the ultimate tool for logic reuse and will
            help you keep your components clean and focused.
          </p>
        </>
      }
    />
  );
}
