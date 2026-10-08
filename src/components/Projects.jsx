import "../styles/project.css";

import chatterImage from "../assets/chatter.png";
import featuredImage from "../assets/fakemart.png";
import weatherImage from "../assets/weather.png";
import memoryImage from "../assets/memory-game.png";
import battleshipImage from "../assets/battleship.png";
import blogImage from "../assets/blog.png";
import messengerImage from "../assets/messanger.png";

function Projects() {
  const featuredProject = {
    title: "Chatter",
    description:
      "A full-stack social media application where users can create accounts, build profiles, create posts, interact with other users, follow people, and manage their social connections.",
    image: chatterImage,

    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],

    highlights: [
      "User Authentication",
      "Social Profiles",
      "Posts & Interactions",
      "Follow System",
    ],

    demo: "https://chatter-gram.vercel.app/",
    github: "https://github.com/Opemipo01-tech/chatter_gram",
  };

  const projects = [
    {
      title: "FakeMart E-Commerce",

      description:
        "A React e-commerce application featuring product browsing, shopping cart functionality, dynamic routing, and a responsive user interface.",

      image: featuredImage,

      tech: [
        "React",
        "React Router",
        "Context API",
        "CSS",
      ],

      demo:
        "https://shopping-cart-eight-wine.vercel.app/",

      github:
        "https://github.com/Opemipo01-tech/shopping-cart",
    },

    {
      title: "Blog API",

      description:
        "A full-stack blogging application built around a REST API, allowing users to create, manage, and interact with blog content.",

      image: blogImage,

      tech: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
      ],

      demo: "https://blog-api-gules-theta.vercel.app/",

      github: "https://github.com/Opemipo01-tech/blog-api",
    },

    {
      title: "Messenger",

      description:
        "A real-time messaging application focused on user authentication, conversations, message handling, and building a responsive chat experience.",

      image: messengerImage,

      tech: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],

      demo: "https://messenger-alpha-black.vercel.app/",

      github: "https://github.com/Opemipo01-tech/messanger",
    },

    {
      title: "Weather Application",

      description:
        "A responsive weather application that fetches real-time weather data from an external API and presents current conditions through a clean interface.",

      image: weatherImage,

      tech: [
        "JavaScript",
        "Fetch API",
        "REST API",
        "CSS",
      ],

      demo:
        "https://opemipo01-tech.github.io/weather-app/",

      github:
        "https://github.com/Opemipo01-tech/weather-app",
    },

    {
      title: "Memory Card Game",

      description:
        "An interactive memory game where players select unique cards without repeating previous choices. Cards are shuffled after every selection to increase the challenge.",

      image: memoryImage,

      tech: [
        "React",
        "React Hooks",
        "JavaScript",
        "Giphy API",
      ],

      demo:
        "https://memory-card-anime.vercel.app/",

      github:
        "https://github.com/Opemipo01-tech/memory-card",
    },

    {
      title: "Battleship",

      description:
        "A browser-based implementation of the classic Battleship game featuring ship placement, turn-based gameplay, game logic, and an interactive interface.",

      image: battleshipImage,

      tech: [
        "JavaScript",
        "HTML",
        "CSS",
      ],

      demo:
        "https://opemipo01-tech.github.io/battleship/",

      github:
        "https://github.com/Opemipo01-tech/battleship",
    },
  ];

  return (
    <section id="projects" className="projects">

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
            A selection of applications I've built while
            developing my skills across frontend and
            full-stack web development.
          </p>

        </div>


        {/* ===================================
                    FEATURED PROJECT
        ==================================== */}

        <div className="featured-project">

          <div className="featured-image">

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
                      {/* Add icon here */}
                    </div>

                    {item}

                  </li>

                ))}

              </ul>

            </div>


            {/* Project Links */}

            <div className="project-buttons">

              <a
                href={featuredProject.demo}
                className="primary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Demo Icon */}

                Live Demo
              </a>

              <a
                href={featuredProject.github}
                className="secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* GitHub Icon */}

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

              {/* Project Image */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>


              {/* Project Information */}

              <div className="project-info">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* Tech Stack */}

                <div className="tech-stack">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>


                {/* Project Links */}

                <div className="card-buttons">

                  <a
                    href={project.demo}
                    className="primary-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Demo Icon */}

                    Demo
                  </a>

                  <a
                    href={project.github}
                    className="secondary-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* GitHub Icon */}

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