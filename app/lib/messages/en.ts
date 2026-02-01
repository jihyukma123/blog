const messages = {
  "nav.blog": "Blog",
  "nav.about": "About",
  "home.hero.line1": "Hi, I'm Alex.",
  "home.hero.line2Lead": "Welcome to my ",
  "home.hero.line2Highlight": "digital garden",
  "home.hero.line2Tail": ".",
  "home.hero.subtitle":
    "I write about JavaScript, calm design, and building for the web. This is a space for thoughts on code, philosophy, and the occasional doodle.",
  "home.hero.cta": "About Me",
  "home.latestWritings": "Latest Writings",
  "home.readArticle": "Read article",
  "home.article1.title": "Thinking in React Hooks",
  "home.article1.date": "Oct 24, 2023",
  "home.article1.readTime": "8 min read",
  "home.article1.excerpt":
    "A deep dive into mental models and how to stop fighting the framework. We explore the 'why' behind the dependency array and how to escape the closure traps.",
  "home.article2.title": "Why I chose Next.js",
  "home.article2.date": "Sep 12, 2023",
  "home.article2.readTime": "5 min read",
  "home.article2.excerpt":
    "Performance matters, but so does developer experience. Here is a breakdown of why I switched my entire portfolio from vanilla CRA to the Next.js ecosystem.",
  "home.article3.title": "Digital Gardening 101",
  "home.article3.date": "Aug 05, 2023",
  "home.article3.readTime": "12 min read",
  "home.article3.excerpt":
    "Treating your blog like a living ecosystem rather than a static archive. How to cultivate ideas over time and embrace the messiness of learning in public.",
  "home.article4.title": "The Joy of CSS Grid",
  "home.article4.date": "Jul 15, 2023",
  "home.article4.readTime": "6 min read",
  "home.article4.excerpt":
    "Forget floats and flexbox hacks. Let's rediscover the joy of layout design with native CSS Grid properties and how they simplify responsive UIs.",
  "newsletter.title": "Stay in the loop",
  "newsletter.description":
    "Get notified when I publish new posts. No spam, just cozy tech updates delivered to your inbox once a month.",
  "newsletter.placeholder": "your@email.com",
  "newsletter.button": "Subscribe",
  "newsletter.footnote": "Join 2,000+ other friendly developers.",
  "footer.builtWith": "Built with ♥ and Next.js.",
  "article.category1": "Engineering",
  "article.category2": "React",
  "article.title": "Thinking in React Hooks: Mental Models for Modern State",
  "article.date": "October 24, 2023",
  "article.readTime": "8 min read",
  "article.toc.introduction": "Introduction",
  "article.toc.dependency": "The Dependency Array Myth",
  "article.toc.breaking": "Breaking the Habit",
  "article.toc.conclusion": "Conclusion",
  "article.markdown": `
## Introduction

React Hooks changed everything. When they were introduced, they weren't just a
new API—they were a shift in **mental models**. Moving from class components to
functional components with hooks requires us to stop thinking about lifecycle
methods and start thinking about *synchronization*.

## The Dependency Array Myth

One of the most common stumbling blocks for developers new to hooks is the
\`useEffect\` dependency array. We often treat it as a trigger mechanism:
"Run this code when X changes." While practically true, this mindset leads to
bugs like stale closures.

\`\`\`js
useEffect(() => {
  const interval = setInterval(() => {
    // This count might be stale!
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []); // Empty array means it only runs once
\`\`\`

Instead, try to view hooks as a way to sync your component's state with the
external world. Whether it's the DOM, a subscription, or a data fetch, the hook
ensures that the UI reflects the current state of your data at any given point
in time.

## Breaking the Habit

Transitioning requires patience. You'll likely find yourself reaching for
\`useRef\` to mimic instance variables or \`useMemo\` for everything. The key is
to embrace the declarative nature of React. Trust the reconciliation process.

> "The most important thing to remember is that hooks are just functions, but
> they are functions with memory."

## Conclusion

As you continue your journey with React, keep experimenting with custom hooks.
They are the ultimate tool for logic reuse and will help you keep your
components clean and focused.
`,
  "article.labels.toc": "Table of Contents",
  "article.labels.backToHome": "Back to Home",
  "article.labels.previous": "Previous Post",
  "article.labels.next": "Next Post",
  "article.adjacent.previousTitle": "Why I chose Next.js",
  "article.adjacent.nextTitle": "Digital Gardening 101",
} as const;

export default messages;
