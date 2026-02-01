import type { Locale } from "../i18n";
import en from "./en";
import ko from "./ko";

const messagesByLocale = {
  en,
  ko,
} as const;

export type MessageKey = keyof typeof en;

export const getMessages = (locale: Locale) => messagesByLocale[locale];

export const t = (locale: Locale, key: MessageKey) => {
  const messages = messagesByLocale[locale];
  return messages[key] ?? messagesByLocale.en[key];
};
