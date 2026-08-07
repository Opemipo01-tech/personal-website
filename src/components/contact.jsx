import "../styles/contact.css";

 import Email from "../assets/mail.png";
 import Resume from "../assets/curriculum.png"
 import X from "../assets/twitter.png"
 import LinkedIn from "../assets/linkedin.png"
 import Github from "../assets/github.png"

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
              href="mailto:ahmad21mahmud@gmail.com"
              className="primary-btn"
            >
                <img
              src={Email}
              alt="Mail"
            />


              Send Email

            </a>

            <a
              href="https://flowcv.com/resume/cmtf3t6l54bb"
              className="secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
                <img
              src={Resume}
              alt="Resume"
            />


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
              href="https://github.com/Opemipo01-tech"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-icon">
                  <img
              src={Github}
              alt="Github"
            />

              </div>

              <div>

                <h5>GitHub</h5>

                <span>
                  View my repositories
                </span>

              </div>

            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-mahmud-69a65b345"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-icon">
                 <img
              src={LinkedIn}
              alt="linkedIn"
            />

              </div>

              <div>

                <h5>LinkedIn</h5>

                <span>
                  Let's connect professionally
                </span>

              </div>

            </a>

            <a
              href="https://x.com/opemipo_001?s=11"
              className="social-card"
              target="_blank"
              rel="noopener noreferrer"
            >

              <div className="social-icon">
                 <img
              src={X}
              alt="Twitter"
            />

              </div>

              <div>

                <h5>Twitter / X</h5>

                <span>
                  Follow my journey
                </span>

              </div>

            </a>

            <a
              href="mailto:ahmad21mahmud@gmail.com"
              className="social-card"
            >

              <div className="social-icon">
                 <img
              src={Email}
              alt="Mail"
            />

              </div>

              <div>

                <h5>Email</h5>

                <span>
                  ahmad21mahmud@gmail.com
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


        </div>

      </footer>

    </section>
  );
}

export default Contact;