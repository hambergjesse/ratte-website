import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Twitch?: {
      Player: any;
    };
  }
}

interface TwitchEmbedProps {
  channel: string;
  parent: string[];
}

export default function TwitchEmbed({ channel, parent }: TwitchEmbedProps) {
  const embedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function initPlayer() {
      if (!embedRef.current || !window.Twitch?.Player) return;

      // Clear previous embed to prevent duplicates
      embedRef.current.innerHTML = "";

      new window.Twitch.Player(embedRef.current, {
        channel,
        width: "100%",
        height: "100%",
        parent,
      });
    }

    const existingScript = document.getElementById(
      "twitch-embed-script"
    ) as HTMLScriptElement;

    if (existingScript) {
      if (window.Twitch?.Player) {
        initPlayer();
      } else {
        existingScript.addEventListener("load", initPlayer);
        return () => existingScript.removeEventListener("load", initPlayer);
      }
    } else {
      const script = document.createElement("script");
      script.id = "twitch-embed-script";
      script.src = "https://player.twitch.tv/js/embed/v1.js";
      script.async = true;
      script.addEventListener("load", initPlayer);
      document.body.appendChild(script);
      return () => script.removeEventListener("load", initPlayer);
    }
  }, [channel, parent]);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 bg-white/5 dark:bg-background backdrop-blur-sm transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 mb-12">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/5 dark:from-primary/0 dark:via-primary/10 dark:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Twitch embed container */}
      <div className="relative pt-[56.25%] min-h-[300px] min-w-[400px] rounded-xl overflow-hidden">
        <div ref={embedRef} className="absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  );
}
