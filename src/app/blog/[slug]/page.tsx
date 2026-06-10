import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileNav from "../../components/MobileNav";

// Static data for the blog posts so we can export them
const postsData: Record<string, any> = {
  "laayoune-guide": {
    title: "Laayoune Morocco Travel Guide 2025: The Complete Local Guide",
    category: "Laayoune", date: "June 1, 2025", readTime: 7, lang: "EN",
    content: `
      <p class="article-intro">Welcome to Laayoune (El Aaiún), the largest city in the Moroccan Sahara. If you're looking for an off-the-beaten-path destination that combines endless desert dunes, pristine Atlantic beaches, and a unique blend of Spanish-colonial and Sahrawi culture, you've found it.</p>
      <h2>How to Get to Laayoune</h2>
      <p>The easiest way to reach Laayoune is by flying into Hassan I Airport (EUN). Royal Air Maroc operates daily flights from Casablanca. If you are coming from the Canary Islands, Binter Canarias offers direct flights from Las Palmas (Gran Canaria) which take less than an hour!</p>
      <h2>Top Things to Do</h2>
      <ul>
        <li><strong>Visit Place Mechouar:</strong> The massive central square surrounded by stunning architecture and monuments.</li>
        <li><strong>Foum El Oued Beach:</strong> Just a 25-minute drive from the city center, this is a spectacular, uncrowded beach perfect for surfing or relaxing.</li>
        <li><strong>St. Francis of Assisi Cathedral:</strong> A beautiful reminder of the city's Spanish history, still serving the local Catholic community today.</li>
      </ul>
      <blockquote>"Laayoune is a city of contrasts. The moment you leave the modern avenues, the immense Sahara desert opens up before you."</blockquote>
      <h2>Where to Stay</h2>
      <p>For a premium experience, the Hotel Parador is a classic choice with great history and a central location. For budget travelers, there are numerous clean and friendly riads in the city center.</p>
    `
  },
  "dakhla-kitesurfing": {
    title: "Dakhla Kitesurfing: The Ultimate Guide for 2025",
    category: "Dakhla", date: "May 15, 2025", readTime: 6, lang: "EN",
    content: `<p class="article-intro">Dakhla is a world-class kitesurfing destination. With consistent winds, flat water lagoons, and incredible wave spots, it is a paradise for riders of all levels.</p>`
  },
  "sahara-road-trip": {
    title: "Sahara Road Trip from Laayoune: A Complete Itinerary",
    category: "Sahara", date: "April 20, 2025", readTime: 9, lang: "EN",
    content: `<p class="article-intro">Embarking on a road trip through the Sahara is an unforgettable adventure. Endless skies, wild camels, and a profound sense of peace.</p>`
  },
  "guide-laayoune": {
    title: "Guide de Voyage à Laâyoune 2025 – Tout ce qu'il faut savoir",
    category: "Laayoune", date: "June 1, 2025", readTime: 7, lang: "FR",
    content: `<p class="article-intro">Bienvenue à Laâyoune. Ce guide vous donnera toutes les informations nécessaires pour visiter cette magnifique ville du sud marocain.</p>`
  },
  "foum-el-oued-beach": {
    title: "Foum El Oued Beach: Laayoune's Hidden Paradise",
    category: "Laayoune", date: "March 10, 2025", readTime: 5, lang: "EN",
    content: `<p class="article-intro">Foum El Oued is the jewel of Laayoune's coastline. Find out how to get there and what to expect.</p>`
  },
  "practical-tips-southern-morocco": {
    title: "Practical Tips for Travelling Southern Morocco",
    category: "Practical Tips", date: "February 5, 2025", readTime: 8, lang: "EN",
    content: `<p class="article-intro">Before you travel, read these essential tips about currency, language, transport, and safety in the Moroccan Sahara.</p>`
  }
};

export function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = postsData[params.slug];
  if (!post) return { title: "Not Found" };
  return { title: post.title, description: post.content.substring(0, 150).replace(/<[^>]+>/g, '') };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = postsData[params.slug];
  if (!post) return <div className="section container"><h1>Post not found</h1></div>;

  return (
    <>
      <Header active="blog" />
      <article>
        <div className="post-hero">
          <div className="container" style={{ maxWidth: 1100 }}>
            <span className="cat-badge">{post.category}</span>
            <h1 className="serif">{post.title}</h1>
            <div className="post-meta">
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime} min read</span>
              <span>🗣️ {post.lang}</span>
            </div>
          </div>
        </div>
        <div className="post-layout">
          <div className="post-content">
            <div className="post-cover" style={{ background: "linear-gradient(135deg, #0F3460, #1A6FA5)" }}>
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
                {post.category === "Laayoune" ? "🏙️" : post.category === "Dakhla" ? "🏄" : "🐪"}
              </div>
            </div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="faq">
              <h2 className="serif">Frequently Asked Questions</h2>
              <div className="faq-item">
                <div className="faq-question">Is it safe to travel to Southern Morocco?</div>
                <div className="faq-answer">Yes, absolutely. The regions of Laayoune and Dakhla are very safe for tourists, with a strong police presence and incredibly welcoming locals.</div>
              </div>
              <div className="faq-item">
                <div className="faq-question">Do I need a visa?</div>
                <div className="faq-answer">It is the same as the rest of Morocco. Citizens of the US, UK, EU, and many other countries can enter visa-free for up to 90 days.</div>
              </div>
            </div>
          </div>
          <aside className="post-sidebar">
            <div className="toc">
              <h4>Table of Contents</h4>
              <a href="#" className="active">Introduction</a>
              <a href="#">How to Get There</a>
              <a href="#">Top Things to Do</a>
              <a href="#">Where to Stay</a>
              <a href="#">FAQ</a>
            </div>
          </aside>
        </div>
      </article>
      <Footer />
      <MobileNav active="blog" />
    </>
  );
}
