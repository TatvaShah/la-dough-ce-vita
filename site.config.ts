import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "La Dough.ce Vita",
  tagline: "Small batch, home-baked cookies in limited drops.",
  category: "Home-baked cookies",
  schemaType: "Bakery",
  area: "Markham, ON",
  siteUrl: "https://la-dough-ce-vita-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#3c180c" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Limited drops",
    headline: "Life is sweeter with cookies",
    subhead: "Small batch, home-baked cookies in limited drops. Christmas Collection preorders are now open. Order through the form.",
    images: [
      { src: "/images/post-1.jpg", alt: "Crackin' Around the Christmas Tree cookies by La Dough.ce Vita" },
      { src: "/images/post-4.jpg", alt: "The Holding You Over cookie collection by La Dough.ce Vita" },
      { src: "/images/post-7.jpg", alt: "A brown butter chocolate chip cookie by La Dough.ce Vita" },
    ],
    primaryCta: { label: "Order on the form", href: "https://forms.gle/b4KeVxkUHb1dsRqw6" },
    secondaryCta: { label: "See the cookies", href: "#menu" },
  },

  highlights: ["Small batch and home-baked", "Limited drops", "Pickup in Markham", "Orders through the form"],

  about: {
    title: "Welcome to La Dough.ce Vita",
    body: [
      "La Dough.ce Vita bakes small batch, home-baked cookies in limited drops. The Christmas Collection is open for preorders, with six festive flavours, including Crackin' Around the Christmas Tree, a brown butter cookie loaded with homemade Christmas Crack.",
      "Orders are placed through the form for each drop, with pickup in Markham on the posted evenings.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Crackin' Around the Christmas Tree cookies by La Dough.ce Vita" },
  },

  menu: {
    label: "Menu",
    title: "Cookie drops",
    variant: "list",
    groups: [
      {
        title: "Christmas Collection",
        note: "Preorders open",
        items: [
          { name: "Crackin' Around the Christmas Tree", description: "A chewy brown butter cookie loaded with homemade Christmas Crack: buttery toffee, chocolate, salted crackers and pretzels." },
          { name: "Six festive flavours", description: "The full Christmas Collection is listed on the order form." },
        ],
      },
      {
        title: "The Holding You Over Collection",
        items: [
          { name: "Salted Caramel Popcorn" },
          { name: "Chocolate Peanut Butter Pie" },
          { name: "Snackcident" },
          { name: "Brown Butter Chocolate Chip" },
          { name: "Strawberry Crumble" },
          { name: "Dolce de Leche Biscoff" },
        ],
      },
    ],
    footnote: "The October drop was posted at 6 for $30 or 12 for $55, with pickup in Markham. Christmas Collection pricing is on the order form.",
  },

  gallery: {
    title: "Recent drops",
    items: [
      { src: "/images/post-1.jpg", alt: "Crackin' Around the Christmas Tree cookies by La Dough.ce Vita", caption: "Christmas cookies" },
      { src: "/images/post-2.jpg", alt: "Christmas Collection preorders poster from La Dough.ce Vita", caption: "Christmas Collection" },
      { src: "/images/post-4.jpg", alt: "The Holding You Over cookie collection by La Dough.ce Vita", caption: "Holding You Over" },
      { src: "/images/post-7.jpg", alt: "The Chip Reaper brown butter chocolate chip cookie by La Dough.ce Vita", caption: "Brown butter chocolate chip" },
      { src: "/images/post-8.jpg", alt: "The Snackening cookie by La Dough.ce Vita", caption: "The Snackening" },
      { src: "/images/post-6.jpg", alt: "Nightmare on Peanut Street cookie by La Dough.ce Vita", caption: "Peanut butter cookie" },
      { src: "/images/post-9.jpg", alt: "Hocus Pocus vanilla sugar cookie by La Dough.ce Vita", caption: "Vanilla sugar cookie" },
      { src: "/images/post-10.jpg", alt: "Eye Want a Cookie black sugar cookie by La Dough.ce Vita", caption: "Black sugar cookie" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "ladough.ce.vita",
    embeds: [
      "https://www.instagram.com/p/DfktueGDnUW/",
      "https://www.instagram.com/p/DfSQwdtjnE7/",
      "https://www.instagram.com/reel/Dfnjx59hFZe/",
    ],
  },

  order: {
    label: "How to order",
    title: "Order through the form",
    intro: "Each drop has an order form. Fill it out for the current collection. Pickup is in Markham on the evenings posted with that drop.",
    dmMessage: "Hi La Dough.ce Vita! I would like to order cookies.\nCollection:\nQuantity:\nPickup date:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order on the form", href: "https://forms.gle/b4KeVxkUHb1dsRqw6" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Use the order form for the current drop. You can also send a message on Instagram." },
    { q: "Where is pickup?", a: "Pickup is in Markham, on the evenings posted with each drop." },
    { q: "Do you bake in limited drops?", a: "Yes. Cookies are small batch and home-baked, released as limited drops, including a Christmas Collection with preorders." },
  ],

  contact: {
    title: "Contact",
    area: "Markham, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/ladough.ce.vita/" }],
  },

  seo: {
    title: "La Dough.ce Vita | Home-baked cookies in Markham",
    description: "Small batch, home-baked cookies in limited drops, with pickup in Markham. Christmas Collection preorders are now open. Order through the form.",
    keywords: ["home-baked cookies Markham", "cookie drops GTA", "La Dough.ce Vita"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
