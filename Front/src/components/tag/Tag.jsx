import React from "react";
import styles from "./Tag.module.scss";

export default function Tag({ img, text }) {
  return (
    <div className={`d-flex p-10 align-items-center ${styles.tag}`}>
      <img src={`${img}`} alt={`${text} tag`} className={`${styles.img}`} />
      <p>{text}</p>
    </div>
  );
}
