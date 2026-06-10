import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export const metadata: Metadata = {
  title: "Travel Guides",
  description: "All travel guides for southern Morocco — Laayoune, Dakhla, the Sahara and practical tips.",
};

const posts = [
  { slug: "laayoune-guide", title: "Laayoune Morocco Travel Guide 2025: The Complete Local Guide", excerpt: "Everything you need to know before visiting Laayoune — things to do, where to stay, how to get there from the Canary Islands, and insider tips from a local.", category: "Laayoune", lang: "EN", readTime: 7, date: "June 1, 2025" },
  { slug: "dakhla-kitesurfing", title: "Dakhla Kitesurfing: The Ultimate Guide for 2025", excerpt: "Dakhla is world-famous for kitesurfing. Learn the best spots, seasons, schools and everything else you need for an epic kite session.", category: "Dakhla", lang: "EN", readTime: 6, date: "May 15, 2025" },
  { slug: "sahara-road-trip", title: "Sahara Road Trip from Laayoune: A Complete Itinerary", excerpt: "Drive deep into the Western Sahara from Laayoune — stunning desert scenery, ancient caravan routes, and authentic nomadic culture.", category: "Sahara", lang: "EN", readTime: 9, date: "April 20, 2025" },
  { slug: "guide-laayoune", title: "Guide de Voyage à Laâyoune 2025 – Tout ce qu'il faut savoir", excerpt: "Laâyoune est la capitale du Sahara marocain. Découvrez les meilleures choses à faire, où séjourner et comment y arriver.", category: "Laayoune", lang: "FR", readTime: 7, date: "June 1, 2025" },
  { slug: "foum-el-oued-beach", title: "Foum El Oued Beach: Laayoune's Hidden Paradise", excerpt: "Just 25km from Laayoune city, Foum El Oued is one of Africa's most spectacular and uncrowded beaches — wild Atlantic waves meet the Sahara.", category: "Laayoune", lang: "EN", readTime: 5, date: "March 10, 2025" },
  { slug: "practical-tips-southern-morocco", title: "Practical Tips for Travelling Southern Morocco", excerpt: "Currency, language, safety, visas, best time to visit — all the practical information you need before travelling to southern Morocco.", category: "Practical Tips", lang: "EN", readTime: 8, date: "February 5, 2025" },
];

const catColors: Record<string, string> = {
  "Laayoune": "#1A6FA5", "Dakhla": "#16C79A", "Sahara": "#C4883A", "Practical Tips": "#0F3460",
};

export default function BlogPage() {
  return (
    <>
      <Header active="blog" />
      <section className="blog-hero">
        <h1 className="serif">Travel Guides</h1>
        <p>Authentic guides to southern Morocco, written by locals</p>
        <div className="filter-pills">
          {["All", "Laayoune", "Dakhla", "Sahara", "Practical Tips"].map((c) => (
            <span key={c} className={`pill${c === "All" ? " active" : ""}`}>{c}</span>
          ))}
        </div>
      </section>
      <main>
        <section className="section">
          <div className="container">
            <div className="blog-grid">
              {posts.map((p) => (
                <a key={p.slug} href={`/southernmorocco/blog/${p.slug}`} className="blog-card">
                  <div className="bc-img">
                    <div className="bc-img-inner" style={{ background: `linear-gradient(135deg, ${catColors[p.category] || "#0F3460"}, ${catColors[p.category] || "#1A6FA5"}88)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                      {p.category === "Laayoune" ? "🏙️" : p.category === "Dakhla" ? "🏄" : p.category === "Sahara" ? "🐪" : "📋"}
                    </div>
                    <div className="bc-badges">
                      <span className="badge-cat">{p.category}</span>
                      <span className="badge-lang">{p.lang}</span>
                    </div>
                  </div>
                  <div className="bc-body">
                    <div className="bc-title">{p.title}</div>
                    <div className="bc-excerpt">{p.excerpt}</div>
                    <div className="bc-foot">
                      <span>{p.readTime} min read</span>
                      <span>{p.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav active="blog" />
    </>
  );
}
