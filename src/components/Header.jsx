import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/cat.png";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // 🔥 for active menu

  return (
    <header className="header">

      {/* LOGO */}
      <img
        src={logo}
        className="logo"
        alt="logo"
        onClick={() => {
          navigate("/");
          setOpen(false);
        }}
      />

      {/* MENU */}
      <nav className={`menu ${open ? "open" : ""}`}>

        {/* HOME */}
        <button
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => {
            navigate("/");
            setOpen(false);
          }}
        >
          ГЛАВНАЯ
        </button>

        {/* CATALOG */}
        <button
          className={location.pathname === "/catalog" ? "active" : ""}
          onClick={() => {
            navigate("/catalog");
            setOpen(false);
          }}
        >
          КАТАЛОГ ПРОДУКЦИИ
        </button>

        {/* PROGRAM */}
        <button
          className={location.pathname === "/program" ? "active" : ""}
          onClick={() => {
            navigate("/program");
            setOpen(false);
          }}
        >
          ПОДБОР ПРОГРАММЫ
        </button>

      </nav>

      {/* MOBILE MENU ICON */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </header>
  );
}

export default Header;
