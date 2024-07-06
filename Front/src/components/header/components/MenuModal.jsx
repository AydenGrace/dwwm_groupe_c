// src/components/MenuModal.jsx
import React from "react";
import "./MenuModal.css"; // Créez un fichier CSS pour le style
import { useTranslation } from 'react-i18next'

const MenuModal = ({ isOpen, onClose }) => {
  const {t } = useTranslation("global");
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <ul>
          <li>
            <a href="/explorer">{t("header.menu1")}</a>
          </li>
          <li>
            <a href="/Carte">{t("header.menu2")}</a>
          </li>
          <li>
            <a href="/favoris">{t("header.menu3")}</a> 
          </li>
          <li>
            <a href="/Message">{t("header.menu4")}</a> 
          </li>
        </ul>
        <button onClick={onClose}>{t("header.close")}</button>
      </div>
    </div>
  );
};

export default MenuModal;
