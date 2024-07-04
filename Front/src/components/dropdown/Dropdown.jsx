import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

export default function Dropdown({ text, children }) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    if (open) {
      document.getElementById(`${text}_icon`).style.transform =
        "rotate(180deg)";
      document.getElementById(`${text}_lower`).style.maxHeight = "100vh";
    } else {
      document.getElementById(`${text}_icon`).style.transform = "rotate(0deg)";
      document.getElementById(`${text}_lower`).style.maxHeight = "0";
    }
    setOpen(!open);
  };

  return (
    <div className={`d-flex w-100 flex-column ${styles.dropdown}`}>
      <div
        className={`d-flex w-100 justify-content-sb align-items-center p-10 ${styles.upper}`}
        onClick={handleClick}
      >
        <h2>{text}</h2>
        <i
          className={`fa-solid fa-chevron-down c-p fa-2xl ${styles.icon}`}
          id={`${text}_icon`}
        ></i>
      </div>
      <div className={`d-flex w-100 ${styles.lower}`} id={`${text}_lower`}>
        {children}
      </div>
    </div>
  );
}
