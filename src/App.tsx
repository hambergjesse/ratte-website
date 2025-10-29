import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LinkList from "./components/LinkList";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";
import Favicon from "./assets/favicon.ico";

/**
 * The main application component that structures the page with enhanced SEO.
 */
const App: React.FC = () => {
  useEffect(() => {
    // Check if dark mode is preferred
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const siteData = {
    title: "ratte - links",
    description:
      "Official links and affiliate codes for RatteCS. Find all social media profiles, CS2 settings, and exclusive discount codes in one place.",
    url: "https://ratte.xyz/",
    image: "./assets/og-image.png",
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            @font-face {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
          `}
        </style>

        {/* Primary Meta Tags */}
        <title>{siteData.title}</title>
        <meta name="title" content={siteData.title} />
        <meta name="description" content={siteData.description} />
        <meta
          name="keywords"
          content="rattecs, cs2, counter-strike, gaming, streamer, content creator, affiliate codes, discount codes"
        />
        <meta name="author" content="RatteCS" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={siteData.url} />
        <link rel="icon" type="image/x-icon" href={Favicon} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteData.url} />
        <meta property="og:title" content={siteData.title} />
        <meta property="og:description" content={siteData.description} />
        <meta property="og:image" content={siteData.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteData.url} />
        <meta property="twitter:title" content={siteData.title} />
        <meta property="twitter:description" content={siteData.description} />
        <meta property="twitter:image" content={siteData.image} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteData.title,
            description: siteData.description,
            url: siteData.url,
            image: siteData.image,
            author: {
              "@type": "Person",
              name: "Ratte",
              url: "https://ratte.xyz/",
            },
            publisher: {
              "@type": "Organization",
              name: "RatteCS",
              logo: {
                "@type": "ImageObject",
                url: "https://ratte.xyz/logo.png",
              },
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "RatteCS",
                url: "https://ratte.xyz/",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "1000",
            },
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are affiliate links and how do they work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Affiliate links are special URLs that track when visitors make purchases. When you click an affiliate link and make a purchase, we may receive a small commission at no extra cost to you. This helps support our content creation.",
                },
              },
              {
                "@type": "Question",
                name: "How do I use the discount codes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Simply click on the affiliate link, add items to your cart, and enter the provided discount code at checkout. The discount will be automatically applied to your order.",
                },
              },
              {
                "@type": "Question",
                name: "Are the discount codes always valid?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most discount codes have a long validity period, but some may expire. We try to keep all codes up to date. If you encounter an expired code, please let us know.",
                },
              },
              {
                "@type": "Question",
                name: "Do I pay more when using affiliate links?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, using our affiliate links does not increase the price you pay. In fact, you often get exclusive discounts not available elsewhere.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know if a link is an affiliate link?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All affiliate links on our site are clearly marked with a 'Redirect' label and may include discount codes. We believe in transparency with our community.",
                },
              },
              {
                "@type": "Question",
                name: "What are the benefits of using your affiliate links?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Using our affiliate links not only supports our content creation but also gives you access to exclusive discounts, verified deals, and special promotions that aren't available elsewhere.",
                },
              },
              {
                "@type": "Question",
                name: "How do I track my savings and rewards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can track your savings and rewards through our gamification system. Each purchase earns you points, and you can see your streak, rank, and next reward on the link cards.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-background text-black dark:text-white transition-colors duration-300">
        <main>
          <LinkList />
          <FAQ />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
