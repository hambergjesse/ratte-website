import React from "react";

/**
 * Footer component displaying contact information and copyright.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent dark:bg-dark/30 backdrop-blur-sm text-dark/60 dark:text-light/60 p-8 mt-12 border-t border-light/20 dark:border-steel/20">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start text-sm">
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-glow via-primary to-deep">
                ratte
              </h2>
              <p className="text-xs text-dark/50 dark:text-light/50">
                @rattecs
              </p>
            </div>
            <p>
              <a
                href="mailto:biz@ratte.xyz"
                className="hover:underline text-deep dark:text-glow transition-colors hover:text-primary dark:hover:text-accent-pink hover-lift inline-block"
              >
                biz@ratte.xyz
              </a>
            </p>
          </div>
        </div>

        <div className="w-full border-t border-light/10 dark:border-light/5 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark/40 dark:text-light/40">
            © {currentYear} All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-glow transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-glow transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-dark/40 dark:text-light/40 hover:text-primary dark:hover:text-glow transition-colors"
            >
              Affiliates
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
