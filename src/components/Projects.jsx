import "../styles/project.css";



import featuredImage from "../assets/fakemart.png";
import projectOneImage from "../assets/weather.png";
import projectTwoImage from "../assets/memory-game.png";
import projectThreeImage from "../assets/battleship.png";

function Projects() {
  const featuredProject = {
    title: "FakeMart E-Commerce",
    description:
      "A modern e-commerce web application built with React featuring product browsing, shopping cart functionality, routing, and responsive UI.",

    image: featuredImage,

    tech: [
      "React",
      "React Router",
      "Context API",
      "CSS",
    ],

    highlights: [
      "Responsive Layout",
      "Shopping Cart",
      "Dynamic Routing",
      "Reusable Components",
    ],
  };

  const projects = [
    {
      title: "Weather Application",

      description:
        "A weather application that fetches live weather data from an external API.",

      image: projectOneImage,

      tech: [
        "Javascript (ES6+)",
        "Fetch API",
        "CSS",
      ],
    demo: "https://opemipo01-tech.github.io/weather-app/",

    github: "https://github.com/Opemipo01-tech/weather-app",
    },

    {
      title: "Memory Card Game",

      description:
        "An interactive memory game where players test their memory by selecting unique cards without repeating a previous choice. Cards are shuffled after every click to increase the challenge, with real-time score tracking.",

      image: projectTwoImage,

      tech: [
        "React",
        "Hooks",
        "CSS",
        "Giphy API",
      ],
      demo: "https://memory-card-anime.vercel.app/",

    github: "https://github.com/Opemipo01-tech/memory-card",
    },

    {
      title: "Battleship game",

      description:
        "A browser-based implementation of the classic Battleship game featuring intelligent game logic, ship placement, turn-based gameplay, and an interactive interface built entirely with vanilla JavaScript.",

      image: projectThreeImage,

      tech: [
        "javascript(ES6+)",
      ],
    demo: "https://opemipo01-tech.github.io/battleship/",

    github: "https://github.com/Opemipo01-tech/battleship",
    },
  ];

  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="container">
        {/* ===================================
                SECTION HEADER
        ==================================== */}

        <div className="section-header">
          <span className="section-tag">
            FEATURED WORK
          </span>

          <h2>
            Projects that demonstrate how I think,
            design and build software.
          </h2>

          <p>
            Every project represents a step forward in my
            learning journey—from frontend interfaces to
            full-stack applications.
          </p>
        </div>

        {/* ===================================
            FEATURED PROJECT
        ==================================== */}

        <div className="featured-project">
          <div className="featured-image">

            {/* Replace Placeholder */}

            <img
              src={featuredProject.image}
              alt={featuredProject.title}
            />

          </div>

          <div className="featured-content">

            <span className="featured-label">
              Featured Project
            </span>

            <h3>
              {featuredProject.title}
            </h3>

            <p>
              {featuredProject.description}
            </p>

            {/* Tech Stack */}

            <div className="tech-stack">

              {featuredProject.tech.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

            {/* Highlights */}

            <div className="project-highlights">

              <h4>
                Highlights
              </h4>

              <ul>

                {featuredProject.highlights.map((item) => (

                  <li key={item}>

                    <div className="highlight-icon">
                      {/* Icon Placeholder */}
                    </div>

                    {item}

                  </li>

                ))}

              </ul>

            </div>

            {/* Buttons */}

            <div className="project-buttons">

              <a href="https://shopping-cart-eight-wine.vercel.app/" className="primary-btn"
                  target="_blank"
    rel="noopener noreferrer">

          

                Live Demo

              </a>

              <a href="https://github.com/Opemipo01-tech/shopping-cart" className="secondary-btn"
                  target="_blank"
    rel="noopener noreferrer">

           

                GitHub

              </a>


            </div>

          </div>
        </div>

        {/* ===================================
            OTHER PROJECTS
        ==================================== */}

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              key={project.title}
              className="project-card"
            >
              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-info">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tech-stack">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="card-buttons">

          <a
                 href={project.demo}
               className="primary-btn"
                 target="_blank"
               rel="noopener noreferrer"
          >
        Demo
        </a>

         <a
            href={project.github}
            className="secondary-btn"
          target="_blank"
             rel="noopener noreferrer"
           >
           GitHub
           </a>


                </div>

              </div>
            </article>

          ))}

        </div>


      </div>
    </section>
  );
}

export default Projects;