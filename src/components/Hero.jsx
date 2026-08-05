import "../styles/hero.css";

import profileImage from "../assets/IMG_2405.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">

        {/* LEFT */}

        <div className="hero-content">

          <span className="hero-tag">
            Software Engineer
          </span>

          <h1>
            I build software that
            <span> solves problems.</span>
          </h1>

          <p>
            I'm Ahmad Mahmud, a software engineer passionate about
            building accessible, performant, and thoughtfully
            designed web applications. I enjoy turning ideas into
            products people actually love using.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Contact Me
            </button>

          </div>

          <div className="hero-stack">

            <span>React</span>

            <span>Node.js</span>

            <span>Express</span>

            <span>PostgreSQL</span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-image">

          <div className="image-wrapper">

            <img
              src={profileImage}
              alt="Ahmad Mahmud"
            />

            <div className="floating-card">

              <h3>Open to Internships</h3>

              <p>Frontend • Backend • Full Stack</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;