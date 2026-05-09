import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-lime-400"
      : "text-gray-300 hover:text-lime-400 transition duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold tracking-wide cursor-pointer">
            Gaurav here<span className="text-lime-400">...</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkStyle}>
            Projects
          </NavLink>

          <NavLink to="/achievements" className={navLinkStyle}>
            Achievements
          </NavLink>

          <NavLink to="/resume" className={navLinkStyle}>
            Resume
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-lime-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>

          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Mobile Links */}
          <div className="md:hidden fixed top-20 left-0 w-full bg-black border-t border-zinc-800 flex flex-col px-6 py-6 gap-6 text-lg z-50">

            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/achievements"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Achievements
            </NavLink>

            <NavLink
              to="/resume"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

          </div>

        </>
      )}

    </nav>
  );
}

export default Navbar;