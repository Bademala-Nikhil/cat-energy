import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3>CAT ENERGY</h3>
        </div>

        {/* CENTER (SVG ICONS) */}
        <div className="footer-center">

          {/* VK */}
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.25 4.05 9.55 9.26 9.95v-7.03H8.07v-2.92h3.19V9.8c0-3.15 1.87-4.89 4.74-4.89 1.37 0 2.81.25 2.81.25v3.1h-1.58c-1.56 0-2.05.97-2.05 1.97v2.37h3.49l-.56 2.92h-2.93v7.03C17.95 21.55 22 17.25 22 12c0-5.52-4.48-10-10-10z"/>
          </svg>

          {/* INSTAGRAM */}
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zm4.5-2.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
          </svg>

          {/* FACEBOOK */}
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z"/>
          </svg>

        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <span>HTML Academy</span>

          {/* SIMPLE ICON */}
          <svg className="html-icon" viewBox="0 0 24 24">
            <path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/>
          </svg>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
