// src/components/LanguageModal.jsx
import { useTranslation } from 'react-i18next'
import "./LanguageModal.css";

const LanguageModal = ({ isOpen, onClose }) => {
  const { i18n, t } = useTranslation("global");
  const handleLanguageClick = (language) => {
    i18n.changeLanguage(language);
    console.log(`Langue sélectionnée : ${language}`);
    onClose(); // Ferme la modal après la sélection
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">

        <h2>{t("header.chooselanguage")}</h2>
        <ul>
          <li onClick={() => handleLanguageClick("fr")}>FR - Français</li>
          <li onClick={() => handleLanguageClick("en")}>EN - English</li>
          <li onClick={() => handleLanguageClick("es")}>ES - Español</li>
          <li onClick={() => handleLanguageClick("de")}>DE - Deutsch</li>
          <li onClick={() => handleLanguageClick("py")}>PY - Русский</li>
          <li onClick={() => handleLanguageClick("jp")}>JP - 日本語</li>
          <li onClick={() => handleLanguageClick("ar")}>AR - للغة العربية" </li>
        </ul>
        <button onClick={onClose}>{t("header.close")}</button>
      </div>
    </div>
  );
};

export default LanguageModal;
