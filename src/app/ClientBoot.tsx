"use client";

import { useEffect } from "react";

export const THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export default function ClientBoot() {
  useEffect(() => {
    try {
      const meta = document.querySelector<HTMLMetaElement>(
        'meta[name="theme-color"]'
      );
      if (meta) {
        const ls = localStorage.getItem("theme");
        const wantsDark =
          ls === "dark" ||
          ((!ls || ls === "system") &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
        meta.setAttribute(
          "content",
          wantsDark ? THEME_COLORS.dark : THEME_COLORS.light
        );
      }
    } catch {}

    try {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        document.documentElement.classList.add("os-macos");
      }
    } catch {}
  }, []);

  return null;
}
