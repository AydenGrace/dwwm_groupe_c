// src/components/MenuModal.jsx
import React from "react";
import "./MenuModal.css"; // Créez un fichier CSS pour le style

const MenuModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <ul>
          <li>
            <a href="/explorer">Explorer</a>
          </li>
          <li>
            <a href="/Carte">Carte</a>
          </li>
          <li>
            <a href="/favoris">Favoris</a> 
          </li>
          <li>
            <a href="/Message">Message</a> 
          </li>
        </ul>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default MenuModal;
