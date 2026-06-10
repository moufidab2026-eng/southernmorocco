export default function Footer() {
  const base = "/southernmorocco";
  return (
    <footer>
      <div className="footer-grid">
        <div className="f-brand">
          <a href={base + "/"} className="logo">
            <span className="logo-s">Southern</span>
            <span className="logo-m">Morocco</span>
          </a>
          <p className="f-tagline">Authentic travel guides for southern Morocco — written by locals, for curious travellers.</p>
          <div className="f-social">
            <a href="#" className="soc-btn" aria-label="Instagram">📷</a>
            <a href="#" className="soc-btn" aria-label="Pinterest">📌</a>
            <a href="#" className="soc-btn" aria-label="YouTube">▶️</a>
          </div>
        </div>
        <div className="f-col">
          <h4>Destinations</h4>
          <a href={base + "/destinations"}>Laayoune</a>
          <a href={base + "/destinations"}>Dakhla</a>
          <a href={base + "/destinations"}>Western Sahara</a>
          <a href={base + "/destinations"}>Sahara Road Trip</a>
        </div>
        <div className="f-col">
          <h4>Languages</h4>
          <a href={base + "/"}>English</a>
          <a href="#">Français</a>
          <a href="#">العربية</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Southern Morocco</span>
        <span>Some links earn affiliate commission — at no extra cost to you.</span>
      </div>
    </footer>
  );
}
