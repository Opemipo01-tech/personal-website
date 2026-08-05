import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-content">

          <span className="section-tag">
            WHO I AM
          </span>

          <h2>
            Building thoughtful digital experiences,
            one project at a time.
          </h2>

          <p>
            I'm Ahmad Mahmud, a Computer Science student and software
            engineer passionate about creating clean, performant and
            accessible web applications.
          </p>

          <p>
            I enjoy solving challenging problems, learning modern
            technologies and turning ideas into polished products.
            My goal is to become a well-rounded full-stack engineer
            who builds software that people genuinely enjoy using.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="about-facts">

          <div className="fact-card">

            <div className="fact-icon">
              {/* Icon */}
            </div>

            <div>

              <h4>Location</h4>

              <p>Lagos, Nigeria</p>

            </div>

          </div>

          <div className="fact-card">

            <div className="fact-icon">
              {/* Icon */}
            </div>

            <div>

              <h4>Education</h4>

              <p>Computer Science Student at LASU</p>

            </div>

          </div>

          <div className="fact-card">

            <div className="fact-icon">
              {/* Icon */}
            </div>

            <div>

              <h4>Current Goal</h4>

              <p>Full Stack Software Engineering</p>

            </div>

          </div>

          <div className="fact-card">

            <div className="fact-icon">
              {/* Icon */}
            </div>

            <div>

              <h4>Availability</h4>

              <p>Open to Internships</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;