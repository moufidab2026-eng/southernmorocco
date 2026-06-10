import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  title: "Southern Morocco – Your local guide to Laayoune, Dakhla & the Sahara",
  description: "Discover southern Morocco through authentic local guides. Explore Laayoune, Dakhla, the Sahara desert and the Atlantic coast.",
};

const posts = [
  { slug: "laayoune-guide", title: "Laayoune Morocco Travel Guide 2025", excerpt: "Everything you need to know before visiting Laayoune — things to do, where to stay, how to get there from the Canary Islands, and insider tips.", category: "Laayoune", lang: "EN", readTime: 7, date: "June 1, 2025" },
  { slug: "dakhla-kitesurfing", title: "Dakhla Kitesurfing: The Ultimate Guide for 2025", excerpt: "Dakhla is world-famous for kitesurfing. Learn the best spots, seasons, schools and everything else you need for an epic kite session in the Atlantic.", category: "Dakhla", lang: "EN", readTime: 6, date: "May 15, 2025" },
  { slug: "sahara-road-trip", title: "Sahara Road Trip from Laayoune: A Complete Itinerary", excerpt: "Drive deep into the Western Sahara from Laayoune — stunning desert scenery, ancient caravan routes, and authentic nomadic culture await.", category: "Sahara", lang: "EN", readTime: 9, date: "April 20, 2025" },
  { slug: "guide-laayoune", title: "Guide de Voyage à Laâyoune 2025 – Tout ce qu'il faut savoir", excerpt: "Laâyoune est la capitale du Sahara marocain. Découvrez les meilleures choses à faire, où séjourner et comment y arriver depuis les Canaries.", category: "Laayoune", lang: "FR", readTime: 7, date: "June 1, 2025" },
  { slug: "foum-el-oued-beach", title: "Foum El Oued Beach: Laayoune's Hidden Paradise", excerpt: "Just 25km from Laayoune city, Foum El Oued is one of Africa's most spectacular and uncrowded beaches — wild Atlantic waves meet the Sahara.", category: "Laayoune", lang: "EN", readTime: 5, date: "March 10, 2025" },
  { slug: "practical-tips-southern-morocco", title: "Practical Tips for Travelling Southern Morocco", excerpt: "Currency, language, safety, visas, best time to visit — all the practical information you need before travelling to southern Morocco.", category: "Practical Tips", lang: "EN", readTime: 8, date: "February 5, 2025" },
];

const catColors: Record<string, string> = {
  "Laayoune": "#1A6FA5",
  "Dakhla": "#16C79A",
  "Sahara": "#C4883A",
  "Practical Tips": "#0F3460",
};

export default function HomePage() {
  return (
    <>
      <Header active="home" />

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">🌊 Local insider guide · Laayoune</span>
          <h1>Discover Southern Morocco</h1>
          <p className="hero-sub">Your authentic guide to Laayoune, Dakhla &amp; the Sahara — written by locals, for travellers who want the real experience.</p>
          <div className="hero-cta">
            <a href="/southernmorocco/blog" className="btn-primary">Read the guides</a>
            <a href="/southernmorocco/tours" className="btn-ghost">Browse tours</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="hero-stat-num">270k</span><span className="hero-stat-lbl">Residents</span></div>
            <div className="hero-stat"><span className="hero-stat-num">108km</span><span className="hero-stat-lbl">From Canary Islands</span></div>
            <div className="hero-stat"><span className="hero-stat-num">3,000km</span><span className="hero-stat-lbl">of Atlantic coastline</span></div>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="section">
        <div className="container">
          <h2 className="sec-title serif">Featured Destinations</h2>
          <p className="sec-sub">Three incredible places, one unforgettable region</p>
          <div className="dest-strip">
            {[
              { name: "Laayoune", desc: "Capital of the Sahara", cls: "bg-laayoune", href: "/southernmorocco/destinations" },
              { name: "Dakhla", desc: "Kitesurfing capital of Africa", cls: "bg-dakhla", href: "/southernmorocco/destinations" },
              { name: "Sahara Road Trip", desc: "Into the endless desert", cls: "bg-sahara", href: "/southernmorocco/destinations" },
            ].map((d) => (
              <a key={d.name} href={d.href} className="dest-card">
                <div className={`dest-card-bg ${d.cls}`} />
                <div className="dest-overlay" />
                <div className="dest-content">
                  <span className="dest-name">{d.name}</span>
                  <span className="dest-link">{d.desc} · Explore →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="section bg-paper">
        <div className="container">
          <h2 className="sec-title serif">From the Blog</h2>
          <p className="sec-sub">Latest travel guides &amp; insider tips</p>
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

      {/* WHY VISIT */}
      <section className="section">
        <div className="container">
          <h2 className="sec-title serif">Why Visit Southern Morocco?</h2>
          <p className="sec-sub">Three compelling reasons to make the trip</p>
          <div className="why-grid">
            {[
              { icon: "☀️", title: "Desert Warmth", desc: "Over 300 days of sunshine a year. The Sahara meets the Atlantic — a unique climate you won't find anywhere else on earth." },
              { icon: "🌊", title: "Atlantic Coast", desc: "Wild, unspoiled beaches stretching for hundreds of kilometres. World-class kitesurfing, surfing and fishing right on your doorstep." },
              { icon: "🗺️", title: "Local Knowledge", desc: "Our guides are written by people who actually live here. Real tips, honest reviews, and insider secrets you won't find on TripAdvisor." },
            ].map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <div className="why-title">{w.title}</div>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATE CTA */}
      <section className="section aff-section">
        <div className="container">
          <h2 className="sec-title serif" style={{ marginBottom: 8 }}>Plan Your Trip</h2>
          <p className="sec-sub">Book tours and accommodation with our trusted partners</p>
          <div className="aff-grid">
            <div className="aff-banner">
              <div>
                <div className="aff-text">Desert Tours from Laayoune</div>
                <div className="aff-sub">Verified by Viator · Free cancellation</div>
              </div>
              <a href="https://www.viator.com/Morocco/d5466-ttd" target="_blank" rel="nofollow sponsored noopener noreferrer" className="aff-btn aff-viator">🧭 Book on Viator</a>
            </div>
            <div className="aff-banner">
              <div>
                <div className="aff-text">Best Hotels in Laayoune</div>
                <div className="aff-sub">Free cancellation · Best price guaranteed</div>
              </div>
              <a href="https://www.booking.com/city/ma/laayoune.html" target="_blank" rel="nofollow sponsored noopener noreferrer" className="aff-btn aff-booking">🏨 Check Booking.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="nl-section">
        <div className="container">
          <h2 className="serif">Get Insider Tips</h2>
          <p>Join 2,000+ travellers who receive our weekly guides straight to their inbox.</p>
          {/* [NEWSLETTER_TODO] Connect to email service provider */}
          <form className="nl-form" action="/southernmorocco/subscribe" method="POST">
            <input type="email" placeholder="your@email.com" className="nl-input" />
            <button type="submit" className="nl-btn">Subscribe →</button>
          </form>
        </div>
      </section>

      <Footer />
      <MobileNav active="home" />
    </>
  );
}
