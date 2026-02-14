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

## A Better Fix: Functional Updates

The issue above isn't just "dependencies"—it's also about *how* state updates are
calculated. If your update depends on the previous value, use a functional
update and you avoid stale reads entirely:

```js
useEffect(() => {
  const interval = setInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

In short:

- `setCount(count + 1)` uses the value captured by the render that created the callback.
- `setCount((c) => c + 1)` always computes from the latest state.

## When to Use useEffect

`useEffect` is for synchronization after rendering. A quick checklist:

1. Are you integrating with a **browser API** (timers, events, observers)?
2. Are you integrating with an **external source** (fetch, sockets, subscriptions)?
3. Does something happen **outside React's render** that must stay in sync?

If you're just deriving UI data, prefer computing it during render.

## Avoid Derived State

It's common to ask: should this be state or a computed value? Derived values are
usually better computed:

```ts
const [query, setQuery] = useState("");
const filtered = items.filter((item) => item.name.includes(query));
```

Storing `filtered` as state creates an extra synchronization problem—and that's
where bugs grow.

## Split Concerns with Custom Hooks

Custom hooks help with reuse *and* intent. A small debounce hook is a good
real-world example:

```ts
import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, delayMs = 200) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(id);
  }, [value, delayMs]);

  return debounced;
}
```

Usage stays minimal:

```ts
const debouncedQuery = useDebouncedValue(query, 250);
```

## Common Symptoms → Cause → Fix

| Symptom | Common cause | Fix |
| --- | --- | --- |
| An effect seems to run twice | Strict Mode in dev | Write effects to be resilient/cleanup correctly |
| Values look stale | Stale closure, missing deps | Functional updates / include deps / refactor |
| Too many renders | Derived state stored as state | Compute derived values |
| Endless micro-optimizations | Overusing memo hooks | Measure first, optimize minimally |

---

Below is a quick block to preview image/link/emphasis styling.

![Globe](/globe.svg)

- Link: [React docs](https://react.dev/)
- Inline code: `useEffect`, `useMemo`
- Emphasis: **bold**, *italic*

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
