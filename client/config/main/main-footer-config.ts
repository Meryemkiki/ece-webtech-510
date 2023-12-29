import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/socials";
import { FooterType } from "@/types";
import { default as mainCategoryConfig } from "./main-category-config";

const mainFooterConfig: FooterType = {
  categories: mainCategoryConfig,
  pages: [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "About",
      slug: "/about",
    },
    {
      title: "Docs",
      slug: "/docs",
    },
    {
      title: "Changelogs",
      slug: "/changelogs",
    },
    {
      title: "Contact",
      slug: "/contact",
    },
  ],

  socials: [
    {
      name: "Facebook",
      url: "/",
      icon: FacebookIcon,
    },
    {
      name: "Github",
      url: "https://github.com/Meryemkiki/ece-webtech-510",
      icon: GithubIcon,
    },
    {
      name: "Instagram",
      url: "/",
      icon: InstagramIcon,
    },
    {
      name: "Twitter",
      url: "/",
      icon: TwitterIcon,
    },
    {
      name: "Youtube",
      url: "/",
      icon: YoutubeIcon,
    },
  ],
  legals: [
    {
      title: "Terms",
      slug: "/",
    },
    {
      title: "Policy",
      slug: "/",
    },
  ],
  copyright: "© 2023 ECE Blog",
};

export default mainFooterConfig;
