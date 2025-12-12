import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
          <img 
          style={{
          width: "100px"
        }}
          src={logo}/>
        </div>

        <ul>
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/favorites">Ulubione</Link></li>
        </ul>

        <div 
          className="menu-toggle" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Strona główna</Link>
          <Link to="/favorites" onClick={() => setOpen(false)}>Ulubione</Link>
          <Link to="/about" onClick={() => setOpen(false)}>O aplikacji</Link>

        </div>
      )}
    </>
  );
}

export default Navbar;
