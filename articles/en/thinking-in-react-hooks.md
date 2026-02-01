---
title: "Thinking in React Hooks: Mental Models for Modern State"
date: October 24, 2023
dateTime: 2023-10-24
readTime: 8 min read
excerpt: A deep dive into mental models and how to stop fighting the framework. We explore the "why" behind the dependency array and how to escape the closure traps.
categories:
  - Engineering
  - React
commentCount: 12
---

## Introduction

React Hooks changed everything. When they were introduced, they weren't just a
new API—they were a shift in **mental models**. Moving from class components to
functional components with hooks requires us to stop thinking about lifecycle
methods and start thinking about *synchronization*.

## The Dependency Array Myth

One of the most common stumbling blocks for developers new to hooks is the
`useEffect` dependency array. We often treat it as a trigger mechanism:
"Run this code when X changes." While practically true, this mindset leads to
bugs like stale closures.

```js
useEffect(() => {
  const interval = setInterval(() => {
    // This count might be stale!
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []); // Empty array means it only runs once
```

Instead, try to view hooks as a way to sync your component's state with the
external world. Whether it's the DOM, a subscription, or a data fetch, the hook
ensures that the UI reflects the current state of your data at any given point
in time.

## Breaking the Habit

Transitioning requires patience. You'll likely find yourself reaching for
`useRef` to mimic instance variables or `useMemo` for everything. The key is
to embrace the declarative nature of React. Trust the reconciliation process.

> "The most important thing to remember is that hooks are just functions, but
> they are functions with memory."

## Conclusion

As you continue your journey with React, keep experimenting with custom hooks.
They are the ultimate tool for logic reuse and will help you keep your
components clean and focused.
