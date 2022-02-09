import { useRouter } from "next/router";

export function useLang() {
  const { locale, defaultLocale } = useRouter();
  return String(locale || defaultLocale);
}
