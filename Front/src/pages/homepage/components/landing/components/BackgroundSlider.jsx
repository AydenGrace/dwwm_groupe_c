import React from "react";
import styles from "./BackgroundSlider.module.scss";

export default function BackgroundSlider({ slides }) {
  return (
    <div
      className={`absolute d-flex align-items-center justify-content-start mw-100 h-100p ${styles.Slider}`}
    >
      <div className={`${styles.Overlay}`}></div>
      {slides.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} className={`${styles.Item}`} />
        );
      })}
    </div>
  );
}
