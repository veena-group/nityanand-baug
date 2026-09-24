const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#flats', label: 'Flats' },
  { href: '#shops', label: 'Shops' },
  { href: '#committee', label: 'Committee' },
  { href: '#contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__brand">
          <img className="footer__mark" src="/images/logo.png" alt="Nityanand Baug CHS Ltd logo" />
          <span>Nityanand Baug CHS Ltd. &middot; Reg. No. BOM/HSG/942/1965</span>
        </div>
        <nav className="footer__links">
          {QUICK_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer__row footer__row--bottom">
        <p>Nityanand Baug CHS Ltd. &copy; 2026. All rights reserved.</p>
        <p>
          Designed and Developed by{' '}
          <a href="https://theveenagroup.com/" target="_blank" rel="noopener">
            Veena Infotech
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
