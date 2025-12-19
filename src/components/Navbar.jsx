import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
      <Link to="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link>
      <Link to="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
    </nav>
  );
}

export default Navbar;
