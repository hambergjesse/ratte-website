import React from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who am I?",
      answer:
        "Hey, I'm Ratte. I love gaming and creating content about it. I also try to help people find good deals on gaming gear and peripherals.",
    },
    {
      question: "What can you find on my website?",
      answer:
        "My website has links to my social media, some codes for discounts on gaming gear, and a list of my favorite gaming peripherals. I tried to make it easy to navigate.",
    },
    {
      question: "How can I support you?",
      answer:
        "If you want to support me, you can use my affiliate links or codes when buying gaming gear. It helps me out and you might get a discount too.",
    },
    {
      question: "Where can I connect with you?",
      answer:
        "I'm on Twitch, YouTube, TikTok, and a few other places. Feel free to check out my social links and say hi. I love talking to other gamers.",
    },
    {
      question: "What gaming gear do you recommend?",
      answer:
        "I've put together a list of gaming peripherals and gear that I really like and use myself. Take a look if you're interested.",
    },
    {
      question: "How do I use your discount codes?",
      answer:
        'Just use the code "ratte" when you\'re checking out at stores like Gamerbulk, Acezone, or SkinVault to get a discount.',
    },
    {
      question: "Can I contact you directly?",
      answer:
        "Yeah, you can email me at biz@ratte.xyz. I'll try to get back to you as soon as I can, but it might take a bit if I'm busy.",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 dark:bg-background rounded-xl border border-accent-gray/10 dark:border-accent-gray/20 p-6"
          >
            <h3 className="text-lg font-medium text-black dark:text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-black/60 dark:text-white/60">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
