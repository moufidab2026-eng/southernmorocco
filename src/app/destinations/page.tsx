import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export const metadata: Metadata = {
  title: "Destinations in Southern Morocco",
  description: "Explore the best destinations in southern Morocco: Laayoune, Dakhla, and the Western Sahara desert.",
};

const destinations = [
  { name: "Laayoune", desc: "The capital of the Moroccan Sahara. Known for its unique Spanish-colonial history, vast squares, modern development, and proximity to stunning untouched beaches like Foum El Oued.", cls: "bg-laayoune", link: "/southernmorocco/blog/laayoune-guide" },
  { name: "Dakhla", desc: "A world-renowned kitesurfing paradise where the Sahara desert meets a massive, crystal-clear Atlantic lagoon. The perfect blend of luxury eco-lodges and wild nature.", cls: "bg-dakhla", link: "/southernmorocco/blog/dakhla-kitesurfing" },
  { name: "Western Sahara", desc: "Endless dunes, nomadic culture, ancient caravan routes, and stargazing. A raw, authentic adventure for those looking to get off the beaten path.", cls: "bg-sahara", link: "/southernmorocco/blog/sahara-road-trip" },
];

export default function DestinationsPage() {
  return (
    <>
      <Header active="destinations" />
      <section className="page-hero">
        <h1 className="serif">Destinations</h1>
        <p>Explore the stunning regions of southern Morocco</p>
      </section>
      <main>
        <section className="section bg-paper">
          <div className="container">
            <div className="dest-page-grid">
              {destinations.map((d) => (
                <a key={d.name} href={d.link} className="dp-card">
                  <div className={`dp-img ${d.cls}`} />
                  <div className="dp-body">
                    <h2 className="dp-name">{d.name}</h2>
                    <p className="dp-desc">{d.desc}</p>
                    <span className="dp-link">Read the Guide →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav active="destinations" />
    </>
  );
}
