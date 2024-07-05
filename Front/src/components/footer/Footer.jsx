import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation("global");
  const importantLinks = [
    { label: t("footer.link1"), path: "/legals" },
    {
      label: t("footer.link2"),
      path: "/privacy",
    },
    { label: t("footer.link3"), path: "/help_center" },
    {
      label: t("footer.link4"),
      path: "/enterprise",
    },
    { label: t("header.map"), path: "/sitemap" },
  ];

  const navigationLinks = [
    { label: t("header.home"), path: "/" },
    { label: t("header.search"), path: "/search" },
    { label: t("header.concept"), path: "/concept" },
    { label: t("header.giftcard"), path: "/gift_card" },
    { label: t("header.putlodging"), path: "/set_online" },
    { label: t("header.helpcenter"), path: "/help_center" },
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
          {t("footer.accroche")}
        </p>
      </div>
      <div className={`${styles.footer_column}`}>
        <h2 className="c-w">{t("header.contact")}</h2>
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
        <h2 className="c-w">{t("footer.linktitle")}</h2>
        <ul>
          {importantLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.footer_column}`}>
        <h2 className="c-w">{t("header.navtitle")}</h2>
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className={`${styles.footer_copyright}`}>{t("header.copyright")}</p>
    </footer>
  );
};

export default Footer;
