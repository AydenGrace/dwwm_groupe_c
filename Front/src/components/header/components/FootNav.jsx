// src > components > FootNav.jsx

import "./FootNav.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const FootNav = () => {
  return (
    <div className="foot-nav">
      <a href="/explorer" className="nav-item">
        <FaSearch />
        <p>Explorer</p>
      </a>
      <a href="/carte" className="nav-item">
        <FaMapLocationDot />
        <p>Carte</p>
      </a>
      <a href="/accueil" className="nav-item">
        <TiHome size={20} />
        <p>Accueil</p>
      </a>
      <a href="/favoris" className="nav-item">
        <FaHeart />
        <p>Favoris</p>
      </a>
      <a href="/messages" className="nav-item">
        <IoIosSend />
        <p>Messages</p>
      </a>
    </div>
  );
};

export default FootNav;
