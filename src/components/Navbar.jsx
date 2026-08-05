import "../styles/navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-container">

        <h2 className="logo">
          Mahmud Ahmad
        </h2>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={
                activeSection === link.id
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;