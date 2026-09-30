import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Coffee,
  Copy,
  Instagram,
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
const phoneNumber = '+91 85278 94100';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`;
const orderUrl = 'https://inkk.onelink.me/aVOz/18rl5anm';
const reserveUrl = 'https://www.district.in/dining/ncr/kenangan-coffee-connaught-place-new-delhi';
const instagramUrl = 'https://www.instagram.com/kenangancoffee.in/';
const whatsappUrl =
  'https://wa.me/918527894100?text=Hi%20Kenangan%20Coffee%2C%20could%20you%20share%20today%E2%80%99s%20menu%20and%20prices%3F';

const menuItems = [
  { name: 'Kenangan Cold Coffee', description: 'A chilled classic, made for a slow afternoon.', category: 'Coffee', image: '/gallery/coffee-table.jpg', alt: 'Three different coffees gathered together on a wooden table' },
  { name: 'Iced Kenangan Latte', description: 'Signature milk and gula aren, poured over ice.', category: 'Coffee', image: '/gallery/signature-coffee.jpg', alt: 'Freshly prepared latte beside leafy plants' },
  { name: 'Kenangan Cappuccino', description: 'Espresso, softly finished with a creamy cap.', category: 'Coffee', image: '/gallery/signature-coffee.jpg', alt: 'Latte art in a ceramic coffee cup' },
  { name: 'OG Kenangan Latte', description: 'An original worth making time for.', category: 'Coffee', image: '/gallery/coffee-table.jpg', alt: 'Coffee drinks ready to share at the table' },
  { name: 'Kenangan Thala Filter Coffee', description: 'A filter coffee favourite with a little character.', category: 'Coffee', image: '/gallery/barista-pour.jpg', alt: 'Carefully brewed coffee being poured by hand' },
  { name: 'Titanic Avocado Ice Berg', description: 'Cool, creamy, and a little unexpected.', category: 'Signature drinks', image: '/gallery/signature-coffee.jpg', alt: 'A row of drinks framed by green plants' },
  { name: 'Pistachio Cream Croissant', description: 'A flaky little companion for your coffee.', category: 'Bakery', image: '/gallery/cafe-interior.jpg', alt: 'Warmly lit cafe counter and menu board, an editorial cafe photograph' },
];

const filters = ['All', 'Coffee', 'Signature drinks', 'Bakery'];
const navItems = [
  { label: 'Our story', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'The gallery', href: '#gallery' },
  { label: 'Guest notes', href: '#reviews' },
  { label: 'Find us', href: '#visit' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleItems = useMemo(
    () => activeFilter === 'All' ? menuItems : menuItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.open(mapUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Kenangan Coffee home" data-testid="link-brand-home">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span className="brand-name">Kenangan <span>Coffee</span></span>
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
            {menuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
          <nav className={`nav-links${menuOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href} data-testid={`link-nav-${item.href.slice(1)}`} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-visit" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-nav-directions" onClick={closeMenu}>
              <MapPin size={15} aria-hidden="true" /> Come by <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-inner container">
            <div className="hero-copy">
              <div className="hero-kicker eyebrow"><span className="kicker-dot" /> A little Indonesian warmth in Connaught Place</div>
              <h1 className="serif" id="hero-title">Coffee for<br />the <em>in-between.</em></h1>
              <p className="hero-text">That pause between plans. The first sip after a long day. A new story, starting over coffee. Find your moment at Kenangan, Regal Building.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#menu" data-testid="link-explore-menu">View Menu <ArrowRight size={16} aria-hidden="true" /></a>
                <div className="hero-book-actions">
                  <a className="button-outline" href={orderUrl} target="_blank" rel="noreferrer" data-testid="link-hero-order"><ShoppingBag size={15} aria-hidden="true" /> Order online <ArrowUpRight size={13} aria-hidden="true" /></a>
                  <a className="quiet-link" href={reserveUrl} target="_blank" rel="noreferrer" data-testid="link-hero-reserve">Reserve a table <ArrowUpRight size={13} aria-hidden="true" /></a>
                </div>
              </div>
              <div className="hero-footnote"><span /> Good coffee, good company, no rush.</div>
              <a className="hero-scroll" href="#about" aria-label="Scroll to our story"><span>SCROLL A LITTLE</span><ArrowDown size={13} /></a>
            </div>
            <div className="hero-art">
              <div className="hero-photo-wrap">
                <img className="hero-photo" src="/gallery/barista-pour.jpg" width="1024" height="768" alt="A barista slowly pouring coffee into a glass brewer" fetchPriority="high" />
                <div className="photo-caption"><span>THE SLOW POUR</span><span>01 / 04</span></div>
              </div>
              <div className="hero-photo-stamp" aria-hidden="true"><span>GOOD THINGS</span><strong>take<br />a little<br /><em>time</em></strong><span>KENANGAN · DELHI</span></div>
              <div className="hero-image-note">A coffee moment, somewhere lovely.</div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <div className="hero-bottom-note"><strong>Delhi, meet Indonesia</strong><span className="note-separator">/</span><span>Regal Building, CP</span></div>
              <div className="rating-inline" data-testid="text-rating-summary"><Star size={14} fill="currentColor" aria-hidden="true" /><strong>4.8</strong><small>343 reviews · Google</small></div>
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label="The Kenangan promise">
          <div className="container quote-inner">
            <div className="quote-mark" aria-hidden="true">“</div>
            <blockquote>We always serve coffee from our hearts, so that it stays in yours.</blockquote>
            <div className="quote-sign">The Kenangan way</div>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
          <div className="container">
            <div className="section-heading reveal-on-scroll">
              <div><div className="eyebrow">A good place to begin</div><h2 id="menu-title">Something to <em>savour.</em></h2></div>
              <p>Signatures with a little Indonesian soul. Find your familiar, or try something new.</p>
            </div>
            <div className="menu-intro-row">
              <p>Sweetness with a story. Gula aren — Indonesian palm sugar — gives our signature drinks a flavour all their own.</p>
              <div className="spend-note" data-testid="text-spend-range"><span className="spend-note-label">TYPICAL SPEND / PERSON</span><strong>₹200–₹400</strong></div>
            </div>
            <div className="menu-controls">
              <div className="filter-list" role="group" aria-label="Filter menu by category" data-testid="menu-category-filters">
                {filters.map((filter) => (
                  <button
                    className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
                    type="button"
                    key={filter}
                    aria-pressed={activeFilter === filter}
                    data-testid={`button-filter-${filter.toLowerCase().replaceAll(' ', '-')}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}<span>{filter === 'All' ? menuItems.length : menuItems.filter((item) => item.category === filter).length}</span>
                  </button>
                ))}
              </div>
              <p className="price-honesty">Item prices change. Check the current menu before ordering.</p>
            </div>
            <div className="menu-grid" aria-live="polite" data-testid="menu-item-grid">
              {visibleItems.map((item, index) => (
                <article className="menu-card reveal-on-scroll" key={item.name} data-testid={`menu-item-${item.name.toLowerCase().replaceAll(' ', '-')}`}>
                  <a className="menu-card-image" href={orderUrl} target="_blank" rel="noreferrer" aria-label={`See current price for ${item.name}`} data-testid={`link-menu-image-${index + 1}`}>
                    <img src={item.image} width="1024" height="768" alt={item.alt} loading="lazy" />
                    <span className="menu-card-category">{item.category}</span>
                    <span className="menu-card-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
                  </a>
                  <div className="menu-card-copy">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a className="menu-price-link" href={orderUrl} target="_blank" rel="noreferrer" data-testid={`link-menu-price-${index + 1}`}>See current price <ArrowUpRight size={13} aria-hidden="true" /></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="menu-footer-row">
              <p>Menu availability and prices may change. We’d be happy to help you check today’s selection.</p>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-menu-whatsapp"><MessageCircle size={15} /> Ask on WhatsApp <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </section>

        <section className="story-section section-pad" id="about" aria-labelledby="story-title">
          <div className="container story-layout">
            <div className="story-copy reveal-on-scroll">
              <div className="eyebrow">A name for the feeling</div>
              <h2 id="story-title">Kenangan means <em>memories.</em></h2>
              <p>The best coffee dates rarely stay just about coffee. They turn into an unhurried catch-up, a laugh you didn’t plan on, a familiar corner you start calling yours.</p>
              <p>We bring a little Indonesian coffee culture to the heart of New Delhi — and make room for whatever memory you’ll take home.</p>
              <div className="story-statement">“We always serve coffee from our hearts, so that it stays in yours.”</div>
              <a className="button-primary" href="#visit" data-testid="link-story-visit">Make a little time <ArrowDown size={14} aria-hidden="true" /></a>
            </div>
            <div className="story-visual reveal-on-scroll">
              <img src="/gallery/signature-coffee.jpg" width="819" height="1024" loading="lazy" alt="Coffee cups nestled among leafy plants" data-testid="img-story-coffee" />
              <div className="story-visual-caption"><span>One cup, one new memory.</span><span>KENANGAN / 01</span></div>
              <div className="story-label">Meet me<br />over coffee</div>
            </div>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title">
          <div className="container">
            <div className="section-heading reveal-on-scroll">
              <div><div className="eyebrow">Sips, little rituals, familiar faces</div><h2 id="gallery-title">A few good <em>moments.</em></h2></div>
              <p>A visual moodboard for coffee, company, and taking a moment. These are illustrative stock photographs, not photos of this Connaught Place branch.</p>
            </div>
            <div className="gallery-grid" data-testid="gallery-highlights">
              <figure className="gallery-tile gallery-tile-large reveal-on-scroll">
                <img src="/gallery/coffee-table.jpg" width="1024" height="768" alt="Three cups of coffee gathered together in a toast" loading="lazy" data-testid="img-gallery-coffee-table" />
                <figcaption><span>01 / GOOD COMPANY</span><strong>A table made for sharing</strong></figcaption>
              </figure>
              <figure className="gallery-tile gallery-tile-tall reveal-on-scroll">
                <img src="/gallery/signature-coffee.jpg" width="819" height="1024" alt="A heart of latte art in a white cup, surrounded by green leaves" loading="lazy" data-testid="img-gallery-signature-coffee" />
                <figcaption><span>02 / THE LITTLE RITUAL</span><strong>Stay for one more sip</strong></figcaption>
              </figure>
              <figure className="gallery-tile reveal-on-scroll">
                <img src="/gallery/barista-pour.jpg" width="1024" height="768" alt="A careful hand pour with a kettle over a glass coffee brewer" loading="lazy" data-testid="img-gallery-barista-pour" />
                <figcaption><span>03 / THE SLOW POUR</span><strong>Good things take a moment</strong></figcaption>
              </figure>
              <figure className="gallery-tile reveal-on-scroll">
                <img src="/gallery/cafe-interior.jpg" width="1024" height="768" alt="A softly lit cafe counter with a chalkboard menu and pendant lights" loading="lazy" data-testid="img-gallery-cafe-interior" />
                <figcaption><span>04 / A PLACE TO PAUSE</span><strong>Find your own corner</strong></figcaption>
              </figure>
            </div>
            <div className="gallery-caption"><span>For the moments in between</span><span>Illustrative imagery · not this branch</span></div>
          </div>
        </section>

        <section className="reviews-section section-pad" id="reviews" aria-labelledby="reviews-title">
          <div className="container">
            <div className="reviews-heading reveal-on-scroll">
              <div><div className="eyebrow">A few kind words</div><h2 id="reviews-title">Heard over <em>coffee.</em></h2></div>
              <a className="rating-card" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-google-rating">
                <span className="rating-stars" aria-label="Rated 4.8 out of 5"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></span>
                <strong>4.8 <span>/ 5</span></strong><small>343 reviews · Google</small>
                <span className="rating-open">See on Google <ArrowUpRight size={13} /></span>
              </a>
            </div>
            <div className="review-grid">
              <article className="review-card review-card-featured reveal-on-scroll" data-testid="review-google-featured">
                <div className="review-source"><span className="review-quote-mark">“</span><span>GOOGLE REVIEW</span></div>
                <blockquote>“Awesome coffee!!”</blockquote>
                <div className="review-byline"><span className="review-avatar">G</span><span><strong>Guest review</strong><small>Google</small></span></div>
              </article>
              <article className="review-card reveal-on-scroll" data-testid="review-district-farhaan">
                <div className="review-source"><span className="review-quote-mark">“</span><span>DISTRICT · CONNAUGHT PLACE</span></div>
                <blockquote>“Liked the place, the cafe vibe and ethos”</blockquote>
                <p>“The taste of their frappe is mind-blowing.”</p>
                <div className="review-byline"><span className="review-avatar">F</span><span><strong>Farhaan</strong><small>District listing</small></span></div>
              </article>
              <article className="review-card reveal-on-scroll" data-testid="review-district-garima">
                <div className="review-source"><span className="review-quote-mark">“</span><span>DISTRICT · CONNAUGHT PLACE</span></div>
                <blockquote>“Coffee is top notch, ambience is good, staff are cooperative.”</blockquote>
                <div className="review-byline"><span className="review-avatar">G</span><span><strong>Garima</strong><small>District listing</small></span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="container">
            <div className="visit-top reveal-on-scroll">
              <div><div className="eyebrow">Right in the heart of CP</div><h2 id="visit-title">Come find us.</h2></div>
              <p>Passing through Connaught Place or making a day of it? Your coffee break is easy to find.</p>
            </div>
            <div className="visit-card">
              <div className="visit-info">
                <div className="visit-rating" data-testid="text-guest-rating"><Star fill="currentColor" aria-hidden="true" /> 4.8 <span>343 reviews · Google</span></div>
                <div className="address-label eyebrow">Our Connaught Place cafe</div>
                <address className="address" data-testid="text-cafe-address">{address}</address>
                <div className="visit-details">
                  <div><div className="detail-label">Hours listed</div><div className="detail-value" data-testid="text-opening-hours"><Clock3 size={14} /> 8:00 AM–11:00 PM</div></div>
                  <div><div className="detail-label">Call us</div><a className="detail-value" href="tel:+918527894100" data-testid="link-phone-number"><Phone size={14} /> {phoneNumber}</a></div>
                  <div><div className="detail-label">Typical spend</div><div className="detail-value" data-testid="text-typical-spend">₹200–₹400 per person</div></div>
                  <div><div className="detail-label">Want today’s prices?</div><a className="detail-value detail-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-visit-price-whatsapp">Ask on WhatsApp <ArrowUpRight size={13} /></a></div>
                </div>
                <div className="visit-actions">
                  <a className="button-primary" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-map-directions"><Navigation size={15} /> Directions</a>
                  <button className="button-outline" type="button" onClick={copyAddress} data-testid="button-copy-address" aria-live="polite">{copied ? <Check size={15} /> : <Copy size={14} />}{copied ? 'Address copied' : 'Copy address'}</button>
                  <a className="button-outline" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-visit-whatsapp"><MessageCircle size={15} /> WhatsApp</a>
                </div>
              </div>
              <div className="map-frame">
                <iframe title="Map to Kenangan Coffee at Regal Building, Connaught Place, New Delhi" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-testid="map-regal-building" />
                <a className="map-tag" href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-map-label"><strong>Kenangan Coffee</strong><span>Shop No. 4 · Regal Building, CP</span><span className="map-tag-action">Open directions <ArrowUpRight size={12} /></span></a>
              </div>
            </div>
            <div className="visit-reservation"><span>Planning to linger?</span><a href={reserveUrl} target="_blank" rel="noreferrer" data-testid="link-visit-reserve">Reserve a table through District <ArrowUpRight size={14} /></a></div>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="container closing-inner">
            <div><div className="eyebrow closing-kicker">Your next good cup is nearby</div><h2 className="closing-title" id="closing-title">Make today a <em>Kenangan.</em></h2></div>
            <div className="closing-action">
              <a className="button-primary" href={orderUrl} target="_blank" rel="noreferrer" data-testid="link-order-online"><ShoppingBag size={15} /> Order online <ArrowUpRight size={14} /></a>
              <a className="closing-reserve" href={reserveUrl} target="_blank" rel="noreferrer" data-testid="link-reserve-table">Reserve a table <ArrowUpRight size={13} /></a>
              <small>Or drop in at Regal Building, Connaught Place</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div><a className="footer-brand" href="#home" data-testid="link-footer-home">Kenangan Coffee</a><div className="footer-note">Coffee from our hearts, to stay in yours.</div></div>
          <div className="footer-links">
            <a href="#about" data-testid="link-footer-story">Our story</a>
            <a href="#menu" data-testid="link-footer-menu">Menu</a>
            <a href="#visit" data-testid="link-footer-visit">Find us</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Kenangan Coffee on Instagram" data-testid="link-footer-instagram"><Instagram size={15} /> Instagram</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp"><MessageCircle size={14} /> WhatsApp</a>
            <a href="tel:+918527894100" data-testid="link-footer-phone"><Phone size={13} /> Call</a>
          </div>
        </div>
        <div className="container footer-bottom"><span>Kenangan Coffee · Connaught Place, New Delhi</span><a href={mapUrl} target="_blank" rel="noreferrer" data-testid="link-footer-directions">Shop No. 4, Regal Building <ArrowUpRight size={12} /></a><a href="#home" data-testid="link-back-to-top">Back to top ↑</a></div>
      </footer>

      <div className="mobile-order" aria-label="Quick actions">
        <a href={reserveUrl} target="_blank" rel="noreferrer" data-testid="link-mobile-reserve">Reserve</a>
        <a href={orderUrl} target="_blank" rel="noreferrer" data-testid="link-mobile-order"><ShoppingBag size={15} /> Order online <ArrowUpRight size={13} /></a>
      </div>
    </div>
  );
}

export default App;