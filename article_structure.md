# Article Markdown Structure

Use this format for each article file in `articles/<locale>/<slug>.md`.

```md
---
title: "Your article title"
date: Human-friendly date (e.g., October 24, 2023)
dateTime: 2023-10-24
readTime: 8 min read
excerpt: "A short summary used in the list view."
categories:
  - Category One
  - Category Two
commentCount: 0
---

## Introduction

Write the content here.

## Another Section

More content...
```

Notes:
- `dateTime` should be `YYYY-MM-DD` and is used for sorting.
- `categories` should be a YAML list (array).
- `commentCount` is optional. Remove it if you don’t use comments.
- Use `##` or `###` headings for the Table of Contents (auto-generated).
- Quote values that include `:` to avoid YAML parsing errors.
