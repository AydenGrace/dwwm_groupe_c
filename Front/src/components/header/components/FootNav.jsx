// src > components > FootNav.jsx

import "./FootNav.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from 'react-i18next'

const FootNav = () => {
    const { t } = useTranslation("global");
  return (
    <div className="foot-nav">
      <a href="/explorer" className="nav-item">
        <FaSearch />
        <p>{t("footer.explore")}</p>
      </a>
      <a href="/carte" className="nav-item">
        <FaMapLocationDot />
        <p>{t("footer.map")}</p>
      </a>
      <a href="/accueil" className="nav-item">
        <TiHome size={20} />
        <p>{t("footer.home")}</p>
      </a>
      <a href="/favoris" className="nav-item">
        <FaHeart />
        <p>{t("footer.favorite")}</p>
      </a>
      <a href="/messages" className="nav-item">
        <IoIosSend />
        <p>{t("footer.message")}</p>
      </a>
    </div>
  );
};

export default FootNav;
