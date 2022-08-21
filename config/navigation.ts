export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Nos Tarifs & Services",
    href: "/tarifs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
