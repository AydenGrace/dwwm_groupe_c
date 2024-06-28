import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  const importantLinks = [
    { label: "Conditions Générales", path: "/conditions-generales" },
    {
      label: "Politique de Confidentialité",
      path: "/politique-confidentialite",
    },
    { label: "Plan du Site", path: "/plan-du-site" },
    { label: "Fonctionnement du Site", path: "/fonctionnement-du-site" },
    {
      label: "Informations sur l'Entreprise",
      path: "/informations-entreprise",
    },
  ];

  const navigationLinks = [
    { label: "Accueil", path: "/" },
    { label: "Recherche", path: "/recherche" },
    { label: "Carte Cadeau", path: "/carte-cadeau" },
    { label: "Mettre en Ligne mon Gîte", path: "/mettre-en-ligne" },
    { label: "Centre d'Aide", path: "/centre-aide" },
  ];

  return (
    <footer className={`${styles.footer} d-flex flex-wrap justify-content-sb`}>
      <div className={`${styles.footer_column}`}>
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Logo%2FFichier%2013.webp?alt=media&token=3ede1b52-862f-4cc8-ab3f-2b39b7f3831d"
          }
          alt="Logo Co'Gite"
          className={`${styles.footer_logo}`}
        />
        <p>
          Ne cherchez plus, <br /> nous Co'Gîtons pour vous
        </p>
      </div>
      <div className={`${styles.footer_column}`}>
        <h2 className="c-w">Contact</h2>
        <p>
          <IoIosMail /> contact@cogite.com
        </p>
        <p>
          <FaPhone /> +33 6 44 80 21 65
        </p>
        <p>
          <FaMapMarkerAlt /> 19 rue des Arts, 59100 Lille, France
        </p>
      </div>
      <div className={`${styles.footer_column}`}>
        <h2 className="c-w">Liens Importants</h2>
        <ul>
          {importantLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.footer_column}`}>
        <h2 className="c-w">Navigation</h2>
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className={`${styles.footer_copyright}`}>Copyright 2024 © Co'Gite</p>
    </footer>
  );
};

export default Footer;
