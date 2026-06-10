"use client";
import { usePathname } from "next/navigation";

export default function MobileNav({ active }: { active?: string }) {
  const base = "/southernmorocco";
  const links = [
    { href: base + "/", label: "Home", icon: "🏠", key: "home" },
    { href: base + "/blog", label: "Blog", icon: "📝", key: "blog" },
    { href: base + "/destinations", label: "Destinations", icon: "📍", key: "destinations" },
    { href: base + "/tours", label: "Tours", icon: "🧭", key: "tours" },
    { href: base + "/blog", label: "More", icon: "•••", key: "more" },
  ];
  return (
    <nav className="mob-nav" aria-label="Mobile navigation">
      {links.map((l) => (
        <a key={l.key} href={l.href} className={active === l.key ? "active" : ""}>
          <span className="mob-icon">{l.icon}</span>
          <span>{l.label}</span>
        </a>
      ))}
    </nav>
  );
}
