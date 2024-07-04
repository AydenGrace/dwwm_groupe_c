// src/components/LanguageModal.jsx

import "./LanguageModal.css";

const LanguageModal = ({ isOpen, onClose }) => {
  const handleLanguageClick = (language) => {
    console.log(`Langue sélectionnée : ${language}`);
    onClose(); // Ferme la modal après la sélection
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Choisissez la langue</h2>
        <ul>
          <li onClick={() => handleLanguageClick("Français")}>FR - Français</li>
          <li onClick={() => handleLanguageClick("Anglais")}>EN - English</li>
          <li onClick={() => handleLanguageClick("Espagnol")}>ES - Español</li>
          <li onClick={() => handleLanguageClick("Allemand")}>DE - Deutsch</li>
          <li onClick={() => handleLanguageClick("Russe")}>PY - Русский</li>
          <li onClick={() => handleLanguageClick("Japonais")}>JP - 日本語</li>
          <li onClick={() => handleLanguageClick("Arabe")}>AR - للغة العربية" </li>
        </ul>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default LanguageModal;
