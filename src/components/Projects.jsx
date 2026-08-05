import "../styles/project.css";

// ==============================
// Placeholder Images
// Replace these with your screenshots later
// ==============================

import featuredImage from "../assets/react.svg";
import projectOneImage from "../assets/react.svg";
import projectTwoImage from "../assets/react.svg";
import projectThreeImage from "../assets/react.svg";

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
        "React",
        "REST API",
        "CSS",
      ],
    },

    {
      title: "Memory Card Game",

      description:
        "A React memory game that tests users by shuffling cards after every click.",

      image: projectTwoImage,

      tech: [
        "React",
        "Hooks",
        "CSS",
      ],
    },

    {
      title: "Personal Portfolio",

      description:
        "A modern developer portfolio showcasing projects, skills and experience.",

      image: projectThreeImage,

      tech: [
        "React",
        "CSS",
        "Responsive Design",
      ],
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

              <button className="primary-btn">

                {/* Demo Icon */}

                Live Demo

              </button>

              <button className="secondary-btn">

                {/* GitHub Icon */}

                GitHub

              </button>

              <button className="secondary-btn">

                {/* Arrow Icon */}

                Case Study

              </button>

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

                  <button>

                    {/* Demo Icon */}

                    Demo

                  </button>

                  <button>

                    {/* GitHub Icon */}

                    GitHub

                  </button>

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