import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="container">

        {/* ==========================================
                    CONTACT HEADER
        =========================================== */}

        <div className="contact-header">

          <span className="section-tag">
            CONTACT
          </span>

          <h2>
            Let's build something
            meaningful together.
          </h2>

          <p>
            Whether you have an internship opportunity,
            freelance project, collaboration idea or simply
            want to say hello, I'd love to hear from you.
          </p>

        </div>

        {/* ==========================================
                    CONTACT CTA
        =========================================== */}

        <div className="contact-card">

          <div className="contact-text">

            <span className="contact-label">
              Ready to connect?
            </span>

            <h3>
              I'm currently open to internships,
              freelance work and exciting projects.
            </h3>

            <p>
              Feel free to reach out if you think we'd be
              a great fit. I'll do my best to respond
              as soon as possible.
            </p>

          </div>

          <div className="contact-actions">

            <a
              href="mailto:your@email.com"
              className="primary-btn"
            >
              {/* Email Icon */}

              Send Email

            </a>

            <a
              href="#"
              className="secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Resume Icon */}

              Download Resume

            </a>

          </div>

        </div>

        {/* ==========================================
                    SOCIAL LINKS
        =========================================== */}

        <div className="social-section">

          <h4>
            Connect with me
          </h4>

          <div className="social-grid">

            <a
              href="#"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-icon">
                {/* GitHub Icon */}
              </div>

              <div>

                <h5>GitHub</h5>

                <span>
                  View my repositories
                </span>

              </div>

            </a>

            <a
              href="#"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-icon">
                {/* LinkedIn Icon */}
              </div>

              <div>

                <h5>LinkedIn</h5>

                <span>
                  Let's connect professionally
                </span>

              </div>

            </a>

            <a
              href="#"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-icon">
                {/* X Icon */}
              </div>

              <div>

                <h5>Twitter / X</h5>

                <span>
                  Follow my journey
                </span>

              </div>

            </a>

            <a
              href="mailto:your@email.com"
              className="social-card"
            >

              <div className="social-icon">
                {/* Email Icon */}
              </div>

              <div>

                <h5>Email</h5>

                <span>
                  your@email.com
                </span>

              </div>

            </a>

          </div>

        </div>

      </div>

      {/* ==========================================
                    FOOTER
      =========================================== */}

      <footer className="footer">

        <div className="container footer-container">

          <div className="footer-brand">

            <h3>
              Ahmad Mahmud
            </h3>

            <p>
              Building software that reads
              as clearly as it runs.
            </p>

          </div>

          <nav className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>

          <button
            className="back-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            ↑ Back to Top
          </button>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Ahmad Mahmud. All rights reserved.
          </p>

          <span>
            Designed & Built with React
          </span>

        </div>

      </footer>

    </section>
  );
}

export default Contact;