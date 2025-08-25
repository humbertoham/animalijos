export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
  cta?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Productos",
    children: [
      { label: "Ver todo", href: "/productos" },
      { label: "Perros", href: "/productos?especie=perros" },
      { label: "Gatos", href: "/productos?especie=gatos" },
      { label: "Aves", href: "/productos?especie=aves" },
      { label: "Peces", href: "/productos?especie=peces" },
      { label: "Roedores", href: "/productos?especie=roedores" },
      { label: "Alimentos", href: "/productos?categoria=alimento" },
      { label: "Accesorios", href: "/productos?categoria=accesorios" },
      { label: "Snacks", href: "/productos?categoria=snacks" },
      { label: "Higiene & Cuidado", href: "/productos?categoria=higiene" },
    ],
  },
  { label: "Estética", href: "/estetica" },
  { label: "Veterinarios", href: "/veterinarios" },
  { label: "Consejos", href: "/consejos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Cotizar", href: "/contacto?intent=cotizar", cta: true },
];
