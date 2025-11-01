import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
// Import postcss plugins if needed, though Rsbuild often includes defaults
// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');

const pageTitle = "Ratte - Links";
const pageDescription =
  "Your central hub for RatteCS social media profiles (Twitch, Discord, YouTube, etc.), affiliate links (Gamerbulk, AceZone, SkinVault), coupon codes, and CS2 config.";
const pageKeywords =
  "rattecs, counter-strike, cs2, twitch, discord, youtube, kick, steam, csfloat, skinport, eliteklan, gamerbulk, acezone, skinvault, affiliate, coupon, code, settings, peripherals";
const canonicalUrl = "https://ratte-website.pages.dev/";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
  output: {
    distPath: {
      root: "dist",
      js: "static/js",
      css: "static/css",
      image: "static/image",
      media: "static/media",
    },
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  },
  html: {
    template: "./public/index.html",
    title: pageTitle,
    tags: [
      { tag: "meta", attrs: { name: "description", content: pageDescription } },
      { tag: "meta", attrs: { name: "keywords", content: pageKeywords } },
      { tag: "meta", attrs: { name: "author", content: "RatteCS" } },
      { tag: "link", attrs: { rel: "canonical", href: canonicalUrl } },
      { tag: "meta", attrs: { property: "og:title", content: pageTitle } },
      {
        tag: "meta",
        attrs: { property: "og:description", content: pageDescription },
      },
      { tag: "meta", attrs: { property: "og:type", content: "website" } },
      { tag: "meta", attrs: { property: "og:url", content: canonicalUrl } },
      {
        tag: "meta",
        attrs: { property: "og:site_name", content: "RatteCS Link Tree" },
      },
      { tag: "meta", attrs: { name: "twitter:card", content: "summary" } },
      { tag: "meta", attrs: { name: "twitter:title", content: pageTitle } },
      {
        tag: "meta",
        attrs: { name: "twitter:description", content: pageDescription },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      },
      {
        tag: "link",
        attrs: {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          rel: "stylesheet",
        },
      },
    ],
  },
  // Rsbuild usually detects Tailwind automatically.
  // If not, we might need to add tools.tailwindcss: {}
});
