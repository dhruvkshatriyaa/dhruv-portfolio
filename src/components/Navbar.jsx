import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <a href="#home" className="navbar-logo">
  <span className="hello">Hello</span>
  <span className="world">World!</span>
</a>

      <div className="navbar-links">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15 + index * 0.06,
              duration: 0.4,
            }}
          >
            {item.name}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;