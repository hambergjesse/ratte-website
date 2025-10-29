# Technical Specifications

## Technology Stack

- **Frontend Framework:** React
- **Bundler/Build Tool:** rspack/rsbuild
- **Styling:** Tailwind CSS v4 (with support for dark mode and a light mode switch)
- **Hosting & Deployment:**  
  The website will be deployed at [https://ratte.xyz/](https://ratte.xyz/) using Cloudflare Pages with the following optimizations:
  - Automatic HTTPS enforcement
  - Global CDN distribution
  - Edge caching
  - Automatic build and deployment
  - Custom domain support
  - SEO-friendly redirects and headers
- **SEO Tools:**
  - Comprehensive meta tags and structured data
  - Sitemap.xml and robots.txt
  - Schema.org markup for affiliate links and products
  - Open Graph and Twitter Card support
  - Canonical URLs
  - Performance optimizations

## Architecture Overview

The MVP is a statically generated, single-page application (SPA) built with:

- **React** for the UI
- **rspack/rsbuild** for optimized builds
- **Tailwind CSS** to provide fast, responsive styling with a built-in dark mode/light mode mechanism
- No backend: all the necessary data (links, affiliate codes, analytics counts) is embedded within local configuration files or directly in the front-end code
- **Open Access:**  
  The design intentionally leaves the content unprotected from scrapers and bots, ensuring maximum SEO indexation and ease of data aggregation by affiliate coupon sites

## Deployment Configuration

### Cloudflare Pages Setup

- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Node Version:** 18
- **Environment Variables:** None required for MVP
- **Custom Headers:**
  - Security headers (X-Frame-Options, X-Content-Type-Options)
  - SEO headers (Cache-Control, Link)
  - Performance headers (HSTS, Permissions-Policy)
- **Redirects:**
  - HTTP to HTTPS
  - Old domain to new domain

### SEO Configuration

- **Meta Tags:**
  - Title, description, and keywords
  - Open Graph and Twitter Card metadata
  - Canonical URLs
  - Viewport and theme-color
- **Structured Data:**
  - Schema.org markup for products and affiliate links
  - Rich snippets for coupons and discounts
  - Organization and person markup
- **Sitemap:**
  - XML sitemap with priority levels
  - Regular updates for affiliate links
  - Section-specific URLs
- **Robots.txt:**
  - Allow all crawlers
  - Explicit file type permissions
  - Sitemap reference

## Styling & Responsiveness

- **Tailwind CSS:**

  - Utilize Tailwind's utility classes to ensure fast development of responsive layouts
  - Implement dark mode using Tailwind's built-in features
  - Ensure that color contrasts, typography, and spacing comply with accessibility standards

- **Responsive Design:**
  - Use standard Tailwind breakpoints (mobile: ≤640px, tablet: 641px–1024px, desktop: >1024px) to optimize the site layout across all devices
  - Test the design on different browsers and devices to ensure consistency

## User Interactions & Features

- **Theme Toggle:**
  - Allow users to switch between light and dark modes with persistent preference storage
  - Implement theme detection based on system preferences as a fallback
  - Ensure all UI elements adapt properly to theme changes

## SEO & Performance Optimizations

- **SEO Considerations:**

  - Use semantic HTML5 (including `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`)
  - Optimize with metadata: title tags, meta descriptions, canonical links, and structured data (e.g., JSON-LD) specifically designed to support rich snippets for affiliate links and coupon codes
  - Ensure that all images include descriptive alt texts and that ARIA attributes are used where appropriate
  - **No Scraper Protection:**  
    The site intentionally leaves its content open and unprotected, ensuring that bots, scrapers, and search engines can index every element—including the affiliate information—without interference

- **Performance:**
  - Build production assets with rspack/rsbuild to generate minimized and optimized bundles
  - Optimize images and other static assets
  - Utilize caching strategies on Cloudflare Pages and ensure fast load times
  - Implement lazy loading for images and components
  - Use preconnect and preload for critical resources

## Analytics & Future Scalability

- **Static Analytics (MVP):**
  - Display preset click count placeholders with future plans for integrating more dynamic tracking via tools like Google Analytics or custom scripts
- **Extensibility:**
  - Future iterations may introduce dynamic content loading from headless CMS or JSON APIs
  - Enhancements could include interactive features for scheduling links or thumbnail updates, to be introduced with serverless functions or a backend as the project scales
  - Maintain the open access architecture to ensure affiliate and SEO benefits remain optimal

## Testing & Deployment

- **Testing:**

  - Use unit testing frameworks (Jest and React Testing Library) to validate components
  - Implement end-to-end tests (e.g., using Cypress) to simulate key user flows
  - Confirm cross-browser and cross-device compatibility
  - Ensure that no anti-scraping measures interfere with the content accessibility during testing

- **Deployment:**
  - Build using rspack/rsbuild to produce an optimized production bundle
  - Deploy the static site to [https://ratte.xyz/](https://ratte.xyz/) using Cloudflare Pages
  - Configure HTTPS, caching headers, and ensure that 404 fallbacks are managed, without introducing any content protection that could hinder SEO indexing
  - Monitor deployment status and performance metrics through Cloudflare Pages dashboard
