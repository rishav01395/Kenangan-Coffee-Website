import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Coffee,
  Copy,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Navigation,
  Phone,
  ShoppingBag,
  Star,
  X,
} from 'lucide-react';

const address = 'Shop No. 4, Regal Building, East, Connaught Place, New Delhi, Delhi 110001';
const whatsappUrl =
  'https://wa.me/918527894100?text=Hi%20Kenangan%20Coffee%2C%20could%20you%20share%20today%E2%80%99s%20menu%20and%20prices%3F';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
const orderUrl = 'https://inkk.onelink.me/aVOz/18rl5anm';

const menuItems = [
  { name: 'Kenangan Cold Coffee', tag: 'A chilled classic', icon: Coffee },
  { name: 'Iced Kenangan Latte', tag: 'Signature milk · gula aren', icon: Coffee },
  { name: 'Kenangan Cappuccino', tag: 'Espresso, softly finished', icon: Coffee },
  { name: 'OG Kenangan Latte', tag: 'A Kenangan original', icon: Coffee },
  { name: 'Kenangan Thala Filter Coffee', tag: 'A local favourite', icon: Coffee },
  { name: 'Titanic Avocado Ice Berg', tag: 'Cool, creamy, unexpected', icon: Leaf },
];

const navItems = [
  { label: 'Our story', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'The little moments', href: '#gallery' },
  { label: 'Find us', href: '#visit' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = mapUrl;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Kenangan Coffee home" data-testid="link-brand-home">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span>Kenangan Coffee</span>
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            data-testid="button-toggle-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <MenuIcon size={19} />}
          </button>
          <nav
            className={`nav-links${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                className="nav-link"
                href={item.href}
                key={item.href}
                data-testid={`link-nav-${item.href.slice(1)}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className="nav-visit"
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="link-nav-directions"
              onClick={closeMenu}
            >
              <MapPin size={14} aria-hidden="true" /> Come by
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="hero-kicker eyebrow reveal">A little Indonesian warmth in Connaught Place</div>
              <h1 className="serif reveal reveal-delay" id="hero-title">
                Coffee for<br />the <em>in-between.</em>
              </h1>
              <p className="hero-text reveal reveal-later">
                That pause between plans. The first sip after a long day. A new story, starting over coffee.
                Find your moment at Kenangan, Regal Building.
              </p>
              <div className="hero-actions reveal reveal-later">
                <a className="button-primary" href="#menu" data-testid="link-explore-menu">
                  Find your next favourite <ArrowRight size={15} aria-hidden="true" />
                </a>
                <a className="button-outline" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-hero-directions">
                  <Navigation size={14} aria-hidden="true" /> Get directions
                </a>
              </div>
              <div className="hero-footnote"><span /> Good coffee, good company, no rush.</div>
            </div>
            <div className="hero-art" role="img" aria-label="Illustration of a warm Kenangan coffee cup with palm sugar">
              <div className="art-sun" />
              <div className="art-orbit" />
              <div className="steam" />
              <div className="cup-lid" />
              <div className="cup-top" />
              <div className="coffee-cup"><div className="cup-logo">K</div></div>
              <div className="cup-shadow" />
              <div className="sugar-cube" />
              <div className="leaf" />
              <div className="art-stamp">MADE FOR<br /><strong>your</strong><br />MOMENTS</div>
              <div className="hero-index">01 — TAKE A BREATH</div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <div className="hero-bottom-note"><strong>Delhi, meet Indonesia</strong><span>—</span><span>Regal Building, CP</span></div>
              <div className="rating-inline" data-testid="text-rating-summary">
                <Star size={13} fill="currentColor" aria-hidden="true" />
                <strong>4.8</strong><small>343 reviews</small>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label="Our promise">
          <div className="container quote-inner">
            <div className="quote-mark" aria-hidden="true">“</div>
            <blockquote>We always serve coffee from our hearts, so that it stays in yours.</blockquote>
            <div className="quote-sign">The Kenangan way</div>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">A good place to begin</div>
                <h2 id="menu-title">The menu</h2>
              </div>
              <p>Signatures with a little Indonesian soul. Find your familiar, or try something new.</p>
            </div>
            <div className="menu-layout">
              <aside className="menu-intro">
                <div className="eyebrow">What makes it Kenangan</div>
                <h3>Sweetness with a story.</h3>
                <p>Our signature drinks bring together gula aren — Indonesian palm sugar — and signature milk for a cup that feels like its own kind of memory.</p>
                <div className="spend-note" data-testid="text-spend-range">
                  <Coffee size={18} aria-hidden="true" />
                  <div><strong>₹200–₹400</strong><span>Typical spend per person</span></div>
                </div>
              </aside>
              <div>
                <div className="menu-list" aria-label="Signature menu items">
                  {menuItems.map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <article className="menu-item" key={item.name} data-testid={`menu-item-${index + 1}`}>
                        <span className="menu-number">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                          <div className="menu-name">{item.name}</div>
                          <div className="menu-tags">{item.tag}</div>
                        </div>
                        <div className="menu-icon" aria-hidden="true"><ItemIcon size={15} /></div>
                      </article>
                    );
                  })}
                </div>
                <div className="menu-foot">
                  <p>Menu prices can change. Ask us on WhatsApp for today’s item prices before you visit.</p>
                  <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-menu-whatsapp">
                    Ask on WhatsApp <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section section-pad" id="about" aria-labelledby="story-title">
          <div className="container story-layout">
            <div className="story-copy">
              <div className="eyebrow">A name for the feeling</div>
              <h2 id="story-title">Kenangan means <em>memories.</em></h2>
              <p>
                The best coffee dates rarely stay just about coffee. They turn into an unhurried catch-up,
                a laugh you didn’t plan on, a familiar corner you start calling yours.
              </p>
              <p>
                We bring a little Indonesian coffee culture to the heart of New Delhi — and make room for
                whatever memory you’ll take home.
              </p>
              <div className="story-statement">“A cup is a small thing. The moment around it can stay for years.”</div>
              <a className="button-primary" href="#visit" data-testid="link-story-visit">
                Make a little time <ArrowDown size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="story-visual" role="img" aria-label="Graphic coffee cup against an Indonesian-inspired sunset">
              <div className="story-poster">
                <div className="poster-sun" />
                <div className="poster-arc" />
                <div className="poster-cup" />
                <div className="poster-caption">A cup for the chapters between</div>
              </div>
              <div className="story-label">Meet me<br />over coffee</div>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
          <div className="container">
            <div className="section-heading">
              <div><div className="eyebrow">Sips, little rituals, familiar faces</div><h2 id="gallery-title">A few favourites</h2></div>
              <p>Good things are even better shared. Start with a signature sip and something from the pastry case.</p>
            </div>
            <div className="gallery-grid" data-testid="gallery-highlights">
              <div className="gallery-tile">
                <div className="tile-illustration"><div className="tile-copy">A little<br /><em>indulgence.</em></div><div className="tile-cream" /></div>
                <span className="tile-index">01 / THE TREAT</span><span className="tile-word tile-sauce">Pistachio Cream Croissant</span>
              </div>
              <div className="gallery-tile">
                <div className="tile-illustration"><div className="tile-cold" /></div>
                <span className="tile-index">02 / THE CLASSIC</span><span className="tile-word">Cold Coffee</span>
              </div>
              <div className="gallery-tile">
                <div className="tile-illustration"><div className="tile-leaf" /></div>
                <span className="tile-index">03 / THE ORIGIN</span><span className="tile-word">A touch of Indonesia</span>
              </div>
              <div className="gallery-tile">
                <div className="tile-illustration"><div className="tile-sugar" /></div>
                <span className="tile-index">04 / THE SIGNATURE</span><span className="tile-word">Gula aren</span>
              </div>
            </div>
            <div className="gallery-caption"><span>Made for the moments in between</span><span>Connaught Place · New Delhi</span></div>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="container">
            <div className="visit-top">
              <div><div className="eyebrow">Right in the heart of CP</div><h2 id="visit-title">Come find us.</h2></div>
              <p>Passing through Connaught Place or making a day of it? Your coffee break is easy to find.</p>
            </div>
            <div className="visit-card">
              <div className="visit-info">
                <div className="visit-rating" data-testid="text-guest-rating">
                  <Star fill="currentColor" aria-hidden="true" /> 4.8 <span>343 reviews</span>
                </div>
                <div className="address-label eyebrow">Our Connaught Place cafe</div>
                <div className="address" data-testid="text-cafe-address">{address}</div>
                <div className="visit-details">
                  <div>
                    <div className="detail-label">Call us</div>
                    <a className="detail-value" href="tel:+918527894100" data-testid="link-phone-number">+91 85278 94100</a>
                  </div>
                  <div>
                    <div className="detail-label">Listing says</div>
                    <div className="detail-value" data-testid="text-closing-time"><Clock3 size={13} style={{ display: 'inline', verticalAlign: '-2px', marginRight: 5 }} />Closes at 11 PM</div>
                  </div>
                  <div>
                    <div className="detail-label">Typical spend</div>
                    <div className="detail-value">₹200–₹400 per person</div>
                  </div>
                  <div>
                    <div className="detail-label">Need a price?</div>
                    <div className="detail-value">Ask us for today’s menu</div>
                  </div>
                </div>
                <div className="visit-actions">
                  <a className="button-primary" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-map-directions">
                    <Navigation size={14} aria-hidden="true" /> Directions
                  </a>
                  <button className="button-outline" type="button" onClick={copyAddress} data-testid="button-copy-address">
                    {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                    {copied ? 'Address copied' : 'Copy address'}
                  </button>
                  <a className="button-outline" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-visit-whatsapp">
                    <MessageCircle size={14} aria-hidden="true" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Map to Kenangan Coffee at Shop No. 4, Regal Building, Connaught Place, New Delhi"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  data-testid="map-regal-building"
                />
                <a className="map-tag" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-map-label">
                  <strong>Kenangan Coffee</strong>Shop No. 4 · Regal Building, CP
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="container closing-inner">
            <div>
              <div className="eyebrow" style={{ color: '#d5a04b' }}>Your next good cup is nearby</div>
              <h2 className="closing-title" id="closing-title">Make today a <em>Kenangan.</em></h2>
            </div>
            <div className="closing-action">
              <a className="button-primary" href={orderUrl} target="_blank" rel="noreferrer" data-testid="link-order-online">
                <ShoppingBag size={15} aria-hidden="true" /> Order online <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <small>Or drop in at Regal Building, Connaught Place</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div>
            <div className="footer-brand">Kenangan Coffee</div>
            <div className="footer-note">Coffee from our hearts, to stay in yours.</div>
          </div>
          <div className="footer-links">
            <a href="#about" data-testid="link-footer-story">Our story</a>
            <a href="#menu" data-testid="link-footer-menu">Menu</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp">WhatsApp</a>
            <a href="tel:+918527894100" data-testid="link-footer-phone"><Phone size={12} aria-hidden="true" /> Call</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>Kenangan Coffee · Connaught Place, New Delhi</span>
          <span>Take a sip. Keep the moment.</span>
        </div>
      </footer>

      <a className="mobile-order" href={orderUrl} target="_blank" rel="noreferrer" data-testid="link-mobile-order">
        <ShoppingBag size={15} aria-hidden="true" /> Order online <ArrowUpRight size={13} aria-hidden="true" />
      </a>
    </div>
  );
}

export default App;