export const siteConfig = {
  name: "Chonza - NextJS UI Library Docs Template",
  url: "https://x.com/gonzalochale",
  description:
    "A NextJS UI Library Starter Template with TypeScript, TailwindCSS, and MDX, create your own UI Library with ease.",
  author: "Gonzalo Chalé",
  links: {
    twitter: "https://x.com/gonzalochale",
    github: "https://github.com/nuclear-app/uix",
    mainSite: "https://nuclearapp.com"
  },
  docs: [
    {
      title: "Introduction",
      path: "/docs",
      new: false,
    },
    {
      title: "Nuclear Logo",
      path: "/docs/logo-design"
    }
  ],
  components: [
    {
      title: "Confetti",
      path: "/components/confetti-button",
      new: true,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
