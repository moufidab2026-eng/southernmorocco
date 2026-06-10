import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

export const metadata: Metadata = {
  title: "Tours & Excursions",
  description: "Book the best authentic tours, desert excursions, and kitesurfing camps in southern Morocco.",
};

const tours = [
  { title: "3-Day Sahara Desert 4x4 Expedition from Laayoune", desc: "Venture deep into the Sahara with a local guide. Sleep under the stars in a traditional Bedouin tent, visit ancient rock art, and experience authentic Sahrawi hospitality.", price: "From €250", provider: "Viator", link: "https://www.viator.com/Morocco/d5466-ttd", type: "viator" },
  { title: "Dakhla Kitesurfing Camp: 5 Days All-Inclusive", desc: "Perfect for beginners and advanced riders. Includes accommodation in an eco-lodge, all meals, daily kite lessons, and airport transfers.", price: "From €590", provider: "Booking.com", link: "https://www.booking.com/city/ma/dakhla.html", type: "booking" },
  { title: "Laayoune City & Foum El Oued Day Trip", desc: "Discover the history of Laayoune in the morning, enjoy fresh seafood for lunch, and spend the afternoon relaxing or surfing at the stunning Foum El Oued beach.", price: "From €45", provider: "GetYourGuide", link: "https://www.getyourguide.com/morocco-l86/", type: "gyg" },
];

export default function ToursPage() {
  return (
    <>
      <Header active="tours" />
      <section className="page-hero">
        <h1 className="serif">Tours &amp; Experiences</h1>
        <p>Hand-picked excursions to make your trip unforgettable</p>
      </section>
      <main>
        <section className="section bg-paper">
          <div className="container" style={{ maxWidth: 800 }}>
            {tours.map((t, i) => (
              <div key={i} className="tour-card">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: "var(--night)" }}>{t.price}</span>
                  <a href={t.link} target="_blank" rel="nofollow sponsored noopener noreferrer" className={`aff-btn aff-${t.type}`}>Book on {t.provider}</a>
                </div>
                <div className="trust">
                  <span>✓ Free cancellation</span>
                  <span>✓ Verified reviews</span>
                  <span>✓ Instant confirmation</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav active="tours" />
    </>
  );
}
