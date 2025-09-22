import React from "react";
import { LinkData } from "../types";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaSteam,
  FaDiscord,
  FaTwitch,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { SiKick } from "react-icons/si";
import AffiliateBadge from "./AffiliateBadge";
import GamificationBadge from "./GamificationBadge";

// Import all images
import gearzggIcon from "../assets/gearzgg.jpg";
import skinportIcon from "../assets/skinport.jpg";
import csfloatIcon from "../assets/csfloat.jpg";
import eliteklanIcon from "../assets/eliteklan.jpg";
import acezoneIcon from "../assets/acezone.png";
import gamerbulkIcon from "../assets/gamerbulk.jpg";
import skinvaultIcon from "../assets/skinvault.png";
import pfpIcon from "../assets/pfp.png";

// Create a mapping of icon identifiers to actual images
const iconMap: Record<string, string> = {
  peripherals: gearzggIcon,
  skinport: skinportIcon,
  csfloat: csfloatIcon,
  eliteklan: eliteklanIcon,
  acezone: acezoneIcon,
  gamerbulk: gamerbulkIcon,
  skinvault: skinvaultIcon,
  pfp: pfpIcon,
};

// Default icons for different types of links
const defaultIcons: Record<string, React.ReactNode> = {
  // Social Media Icons
  "x.com": <FaXTwitter className="h-6 w-6 text-[#000000]" />,
  "twitter.com": <FaXTwitter className="h-6 w-6 text-[#000000]" />,
  "steamcommunity.com": <FaSteam className="h-6 w-6 text-[#1B2838]" />,
  "steamcommunity.com/tradeoffer": (
    <FaSteam className="h-6 w-6 text-[#1B2838]" />
  ),
  "discord.com": <FaDiscord className="h-6 w-6 text-[#5865F2]" />,
  "discord.gg": <FaDiscord className="h-6 w-6 text-[#5865F2]" />,
  "twitch.tv": <FaTwitch className="h-6 w-6 text-[#9146FF]" />,
  "youtube.com": <FaYoutube className="h-6 w-6 text-[#FF0000]" />,
  "tiktok.com": <FaTiktok className="h-6 w-6 text-[#000000]" />,
  "kick.com": <SiKick className="h-6 w-6 text-[#00FF47]" />,

  // Trading/Skin Sites
  "csfloat.com": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-primary dark:text-glow"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "skinport.com": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "skinvault.gg": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  // Default icons for categories
  social: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-primary dark:text-glow"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  ),
  affiliate: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z"
        clipRule="evenodd"
      />
    </svg>
  ),
  community: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-primary dark:text-glow"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  partner: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent dark:text-accent"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
  ),
  config: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-primary dark:text-glow"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  default: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-accent-gray dark:text-accent-gray"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

interface LinkCardProps {
  link: LinkData;
}

/**
 * Component for individual link cards with enhanced SEO and schema.org support.
 */
const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const {
    title,
    url,
    icon,
    clickCount,
    description,
    couponCode,
    seoKeywords,
    schemaType,
    analyticsId,
    isVerified,
    lastUpdated,
    discountPercentage,
    productDetails,
    category,
    affiliateCode,
    priority,
    successRate,
    isLimitedTime,
    remainingCodes,
    streakCount,
    pointsEarned,
    nextReward,
    isDealOfTheDay,
    rank,
  } = link;

  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  // Generate enhanced schema.org JSON-LD
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType || "WebPage",
      name: title,
      url: url,
      description: description,
      dateModified: lastUpdated,
      keywords: seoKeywords?.join(", "),
      isAccessibleForFree: true,
    };

    if (schemaType === "Product" && productDetails) {
      return {
        ...baseSchema,
        "@type": "Product",
        brand: {
          "@type": "Brand",
          name: productDetails.brand,
        },
        category: productDetails.category,
        offers: {
          "@type": "Offer",
          price: productDetails.offers.price,
          priceCurrency: productDetails.offers.priceCurrency,
          priceValidUntil: productDetails.offers.priceValidUntil,
          availability: `https://schema.org/${productDetails.offers.availability}`,
          url: productDetails.offers.url,
          seller: {
            "@type": "Organization",
            name: productDetails.offers.seller.name,
            url: productDetails.offers.seller.url,
          },
          // Add coupon information if available
          ...(couponCode && {
            discountCode: couponCode,
            discount: {
              "@type": "MonetaryAmount",
              currency: productDetails.offers.priceCurrency,
              value: (
                (productDetails.offers.price * (discountPercentage || 0)) /
                100
              ).toFixed(2),
            },
          }),
        },
        aggregateRating: productDetails.aggregateRating
          ? {
              "@type": "AggregateRating",
              ratingValue: productDetails.aggregateRating.ratingValue,
              reviewCount: productDetails.aggregateRating.reviewCount,
            }
          : undefined,
        // Add additional product details
        ...(isLimitedTime && {
          availabilityStarts: new Date().toISOString(),
          availabilityEnds: productDetails.offers.priceValidUntil,
        }),
        ...(remainingCodes && {
          inventoryLevel: {
            "@type": "QuantitativeValue",
            value: remainingCodes,
          },
        }),
        ...(successRate && {
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: successRate,
              bestRating: 100,
            },
          },
        }),
      };
    }

    return baseSchema;
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
      />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-3 group"
        data-analytics-id={analyticsId}
        aria-label={`Visit ${title}${description ? ` - ${description}` : ""}`}
      >
        <div
          className={`relative overflow-hidden rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 bg-white/5 dark:bg-background backdrop-blur-sm transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 ${
            isHovered ? "scale-[1.02]" : ""
          } ${isClicked ? "scale-[0.98]" : ""} ${
            priority === 1 ? "ring-2 ring-primary dark:ring-glow" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Priority badge */}
          {priority === 1 && (
            <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-primary/10 dark:bg-glow/10 text-primary dark:text-glow text-xs font-medium">
              Featured
            </div>
          )}

          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/5 dark:from-primary/0 dark:via-primary/10 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              isHovered ? "bg-primary/5 dark:bg-primary/10" : ""
            }`}
          ></div>

          <div className="relative p-4">
            <div className="flex items-start gap-4">
              {/* Icon with enhanced hover effect */}
              <div className="flex-shrink-0">
                {icon && iconMap[icon] ? (
                  <div
                    className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-300 ${
                      isHovered ? "ring-2 ring-primary dark:ring-glow" : ""
                    }`}
                  >
                    <img
                      src={iconMap[icon]}
                      alt={`${title} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-primary/10 dark:bg-glow/10" : ""
                    }`}
                  >
                    {Object.keys(defaultIcons).find((key) => url.includes(key))
                      ? defaultIcons[
                          Object.keys(defaultIcons).find((key) =>
                            url.includes(key)
                          )!
                        ]
                      : category && defaultIcons[category]
                      ? defaultIcons[category]
                      : defaultIcons.default}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-black dark:text-white group-hover:text-primary dark:group-hover:text-glow transition-colors truncate">
                      {title}
                      {isVerified && (
                        <span
                          className="ml-1.5 inline-block"
                          title="Verified Link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-primary"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </h3>
                    {description && (
                      <p className="text-sm text-black/60 dark:text-white/60 mt-1 line-clamp-2">
                        {description}
                      </p>
                    )}
                    {productDetails?.aggregateRating && (
                      <div className="mt-1 flex items-center gap-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${
                                i <
                                Math.floor(
                                  productDetails.aggregateRating?.ratingValue ||
                                    0
                                )
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-black/40 dark:text-white/40">
                          (
                          {productDetails.aggregateRating?.reviewCount?.toLocaleString() ||
                            "0"}{" "}
                          reviews)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Badges container */}
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    {/* Affiliate Badges */}
                    <AffiliateBadge
                      discountPercentage={discountPercentage}
                      isVerified={isVerified}
                      clickCount={clickCount}
                      lastUpdated={lastUpdated}
                      successRate={successRate}
                      isLimitedTime={isLimitedTime}
                      remainingCodes={remainingCodes}
                    />

                    {/* Gamification Badges */}
                    <GamificationBadge
                      streakCount={streakCount}
                      pointsEarned={pointsEarned}
                      nextReward={nextReward}
                      isDealOfTheDay={isDealOfTheDay}
                      rank={rank}
                    />
                  </div>
                </div>

                {/* URL and actions */}
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-xs text-black/40 dark:text-white/40 truncate min-w-0 flex-1 group-hover:text-primary/50 dark:group-hover:text-glow/50 transition-colors">
                    {url}
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    {couponCode && (
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded-md bg-primary/10 dark:bg-glow/10 text-primary dark:text-glow text-sm font-medium">
                          Code: {couponCode}
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleCopyCode(couponCode);
                          }}
                          className="p-1 rounded-md hover:bg-white/10 dark:hover:bg-background/50 transition-colors"
                          aria-label="Copy code"
                        >
                          {isCopied ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-green-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-black/60 dark:text-white/60"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    )}
                    <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-full bg-white/5 dark:bg-background border border-accent-gray/10 dark:border-accent-gray/20 text-black/40 dark:text-white/40 group-hover:text-primary/60 dark:group-hover:text-glow/60 group-hover:border-primary/20 dark:group-hover:border-primary/30 transition-colors inline-flex items-center justify-center min-w-[70px] h-[22px]">
                      Redirect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default LinkCard;
