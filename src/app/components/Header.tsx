"use client";
import { useEffect, useState } from "react";

export default function Header({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const base = "/southernmorocco";
  const links = [
    { href: base + "/", label: "Home", key: "home" },
    { href: base + "/blog", label: "Blog", key: "blog" },
    { href: base + "/destinations", label: "Destinations", key: "destinations" },
    { href: base + "/tours", label: "Tours", key: "tours" },
  ];

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <a href={base + "/"} className="logo">
          <span className="logo-s">Southern</span>
          <span className="logo-m">Morocco</span>
        </a>
        <nav className="header-nav">
          {links.map((l) => (
            <a key={l.key} href={l.href} className={active === l.key ? "active" : ""}>{l.label}</a>
          ))}
        </nav>
        <div className="header-right">
          <div className="lang-sw">
            <button className="lang-btn active">EN</button>
            <button className="lang-btn">FR</button>
            <button className="lang-btn">ع</button>
          </div>
        </div>
      </div>
    </header>
  );
}
