"use client";

import { useEffect } from "react";

const COPY_LABEL = "Copy";
const COPIED_LABEL = "Copied";

function attachCopyButton(pre: HTMLElement) {
  if (pre.querySelector("[data-copy-button='true']")) {
    return;
  }

  const code = pre.querySelector("code");
  if (!code) {
    return;
  }

  pre.classList.add("codeblock");

  const button = document.createElement("button");
  button.type = "button";
  button.dataset.copyButton = "true";
  button.className = "codeblock-copy";
  button.textContent = COPY_LABEL;
  button.setAttribute("aria-label", "Copy code");
  button.title = COPY_LABEL;

  button.addEventListener("click", async () => {
    const text = code.textContent ?? "";
    if (!text.trim()) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = COPIED_LABEL;
      button.classList.add("is-copied");
      window.setTimeout(() => {
        button.textContent = COPY_LABEL;
        button.classList.remove("is-copied");
      }, 1400);
    } catch {
      button.textContent = COPY_LABEL;
      window.setTimeout(() => {
        button.textContent = COPY_LABEL;
      }, 1400);
    }
  });

  pre.appendChild(button);
}

export default function CodeBlockEnhancer() {
  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLElement>(".article-content pre");
    blocks.forEach((pre) => attachCopyButton(pre));
  }, []);

  return null;
}
