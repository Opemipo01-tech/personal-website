import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">

        <h2>— Software Engineer</h2>

        <h1>
          I build software that reads as clearly as it runs.
        </h1>

        <p>
          I'm Ahmad Mahmud — a software engineer focused on building
          performant, accessible, and thoughtfully designed web
          applications. I enjoy solving complex problems while creating
          experiences that feel simple for users.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            View Projects
          </button>

          <button className="secondary-btn">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;