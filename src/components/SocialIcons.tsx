import React from "react";
import { FaTwitch, FaDiscord, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons: React.FC = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: "https://twitter.com/rattecs",
      color: "text-[#000000] dark:text-white",
      size: "w-[18px] h-[18px]",
    },
    {
      name: "Twitch",
      icon: FaTwitch,
      url: "https://twitch.tv/rattecs",
      color: "text-[#9146FF]",
      size: "w-[18px] h-[18px]",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://discord.com/invite/gc2epPGDKP",
      color: "text-[#5865F2]",
      size: "w-[20px] h-[20px]",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:biz@ratte.xyz",
      color: "text-gray-400",
      size: "w-[18px] h-[18px]",
    },
  ];

  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} opacity-90 hover:opacity-100 transition-opacity duration-200 flex items-center`}
          aria-label={`Visit ${social.name}`}
        >
          <social.icon className={social.size} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
