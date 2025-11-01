import React, { useMemo, useState, useEffect } from "react";
import LinkCard from "./LinkCard"; // Import the card component
import TwitchEmbed from "./TwitchEmbed";
import { LinkData } from "../types"; // Import the shared type
import { allLinks } from "../data/links"; // Import the actual link data
import pfpImage from "../assets/pfp2.png";
import SocialIcons from "./SocialIcons";

/**
 * Component to display a list of links using LinkCard components with enhanced organization and SEO.
 */
const LinkList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Organize links by category and priority
  const organizedLinks = useMemo(() => {
    const categories = {
      featured: allLinks.filter((link) => link.priority === 1),
      social: allLinks.filter((link) => link.category === "social"),
      affiliate: allLinks.filter((link) => link.category === "affiliate"),
      config: allLinks.filter((link) => link.category === "config"),
      steam: allLinks.filter((link) => link.category === "steam"),
      partner: allLinks.filter((link) => link.category === "partner"),
    };

    // Sort each category by priority (descending) and then by clickCount (descending)
    Object.keys(categories).forEach((category) => {
      categories[category as keyof typeof categories].sort((a, b) => {
        const priorityA = a.priority || 0;
        const priorityB = b.priority || 0;
        if (priorityA !== priorityB) return priorityB - priorityA;
        return (b.clickCount || 0) - (a.clickCount || 0);
      });
    });

    return categories;
  }, []);

  // Section render helper with enhanced SEO and visual hierarchy
  const renderSection = (
    title: string,
    links: LinkData[],
    icon: React.ReactNode,
    description?: string
  ) => {
    if (links.length === 0) return null;

    return (
      <section
        className="mb-8 sm:mb-12"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="numberOfItems" content={links.length.toString()} />
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-white/5 dark:bg-background border border-accent-gray/10 dark:border-accent-gray/20">
            {icon}
          </div>
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold text-black dark:text-white"
              itemProp="name"
            >
              {title}
            </h2>
            {description && (
              <p className="text-xs sm:text-sm text-black/60 dark:text-white/60 mt-0.5 sm:mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
        <div
          className="grid gap-3 sm:gap-4 grid-cols-1" // Always 1 column on mobile, implicit on larger
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          {links.map((link, index) => (
            <div
              key={link.id}
              itemProp="item"
              itemScope
              itemType="https://schema.org/Thing"
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              <LinkCard
                link={link}
                whiteIcon={
                  link.title === "TikTok" ||
                  link.title === "X (Twitter)" ||
                  link.title === "Steam" ||
                  link.title === "Trade Link"
                }
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Mobile category navigation with enhanced features
  const renderMobileNav = () => {
    if (!isMobile) return null;

    return (
      <div className="sticky top-0 z-20 bg-white/5 dark:bg-background backdrop-blur-sm border-b border-accent-gray/10 dark:border-accent-gray/20 mb-6 sm:mb-8">
        <div className="container mx-auto px-2 sm:px-4 py-1 sm:py-2">
          <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto">
            <div className="flex gap-1 sm:gap-2 pb-1 sm:pb-2 -mb-1 sm:-mb-2 flex-1 min-w-0">
              {Object.entries(organizedLinks).map(([category, links]) => {
                if (links.length === 0) return null;
                return (
                  <button
                    key={category}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === category ? null : category
                      )
                    }
                    className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                      activeCategory === category
                        ? "bg-primary/10 dark:bg-glow/10 text-primary dark:text-glow"
                        : "bg-white/5 dark:bg-background text-black/60 dark:text-white/60 hover:bg-white/10 dark:hover:bg-background/50"
                    }`}
                    aria-label={`${category} links`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    {links.length > 0 && (
                      <span className="ml-1 text-[10px] sm:text-xs bg-white/10 dark:bg-background/50 rounded-full px-1 py-0.5 sm:px-1.5 sm:py-0.5">
                        {links.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="p-1 sm:p-2 rounded-full bg-white/5 dark:bg-background hover:bg-white/10 dark:hover:bg-background/50 transition-colors flex-shrink-0"
                aria-label="Clear filter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 text-black/60 dark:text-white/60"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-w-[320px] max-w-3xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8">
      {/* Mobile Navigation */}
      {renderMobileNav()}

      {/* Profile Section with enhanced visual appeal */}
      <div className="mb-4 sm:mb-6 flex flex-col items-center">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-3 sm:mb-4">
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/30 dark:border-primary/20 bg-white dark:bg-background">
            <img
              src={pfpImage}
              alt="Ratte profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 blur-xl -z-10" />
        </div>

        <div className="text-center max-w-2xl flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2 sm:mb-3">
            ratte
          </h1>
          <div className="mb-3 sm:mb-4">
            <SocialIcons />
          </div>
          <p className="text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed px-2 sm:px-0">
            All of my cool links, thank you for your support! :3
          </p>
        </div>
      </div>

      {/* Featured Section with enhanced visual appeal */}
      {organizedLinks.featured.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="p-1 sm:p-2 rounded-lg sm:rounded-xl bg-primary/10 dark:bg-glow/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-glow"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                Featured Links
              </h2>
              <p className="text-xs sm:text-sm text-black/60 dark:text-white/60 mt-0.5 sm:mt-1">
                Check out these highlighted links and offers
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {organizedLinks.featured.map((link) => (
              <div key={link.id} className="relative">
                <LinkCard
                  link={link}
                  whiteIcon={
                    link.title === "TikTok" ||
                    link.title === "X (Twitter)" ||
                    link.title === "Steam" ||
                    link.title === "Trade Link"
                  }
                />
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                  <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-primary/10 dark:bg-glow/10 text-[10px] sm:text-xs font-medium text-primary dark:text-glow">
                    Featured
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="aspect-video w-full mb-8 sm:mb-12">
        {" "}
        {/* Responsive wrapper for embed */}
        <TwitchEmbed channel="rattecs" parent={["ratte.seweraim.com"]} />
      </div>

      {/* Link Sections with enhanced descriptions */}
      {(!isMobile || activeCategory === null || activeCategory === "social") &&
        renderSection(
          "Social Profiles",
          organizedLinks.social,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-glow"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>,
          "Connect with me across different platforms"
        )}

      {(!isMobile ||
        activeCategory === null ||
        activeCategory === "affiliate") &&
        renderSection(
          "Affiliate Links & Codes",
          organizedLinks.affiliate,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-accent dark:text-accent"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>,
          "Exclusive discounts and affiliate offers"
        )}

      {(!isMobile || activeCategory === null || activeCategory === "steam") &&
        renderSection(
          "Steam",
          organizedLinks.steam,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-glow"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>,
          "Steam profile and trading links"
        )}

      {(!isMobile || activeCategory === null || activeCategory === "partner") &&
        renderSection(
          "Partners",
          organizedLinks.partner,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-accent dark:text-accent"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>,
          "Official partnerships and collaborations"
        )}

      {(!isMobile || activeCategory === null || activeCategory === "config") &&
        renderSection(
          "Config & Settings",
          organizedLinks.config,
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-primary dark:text-glow"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>,
          "Configuration and setup guides"
        )}
    </div>
  );
};

export default LinkList;
