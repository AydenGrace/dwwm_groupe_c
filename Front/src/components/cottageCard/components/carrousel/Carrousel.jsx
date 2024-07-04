import React, { useEffect, useState } from "react";
import styles from "./Carrousel.module.scss";

export default function Carrousel({ slides, isFavorite, id }) {
  const [favorite, setFavorite] = useState(isFavorite);
  const [current, setCurrent] = useState(0);
  const [seeLeft, setSeeLeft] = useState(false);
  const [seeRight, setSeeRight] = useState(true);
  //   const id = Math.floor(Math.random() * 1000000);

  const handleDotClick = async (e, idx) => {
    e.stopPropagation();
    setCurrent(idx);
    changePage(idx);
  };

  const handleArrowClick = async (e, isRight) => {
    e.stopPropagation();
    if (isRight) {
      changePage(current + 1);
      setCurrent(current + 1);
    } else {
      changePage(current - 1);
      setCurrent(current - 1);
    }
  };

  const setArrowVisibility = (idx) => {
    if (idx <= 0) {
      setSeeLeft(false);
      setSeeRight(true);
      return;
    }
    if (idx >= slides.length - 1) {
      setSeeLeft(true);
      setSeeRight(false);
    } else {
      setSeeLeft(true);
      setSeeRight(true);
    }
  };

  const setDotVisibility = (idx) => {
    for (let i = 0; i < slides.length; i++) {
      if (i === idx) {
        document
          .getElementById(`Dot_${id}_${i}`)
          .classList.add(`${styles.DotActive}`);
      } else {
        document
          .getElementById(`Dot_${id}_${i}`)
          .classList.remove(`${styles.DotActive}`);
      }
    }
  };

  const changePage = (idx) => {
    const change = idx * 300;
    const imgchange = (document.getElementById(
      `imgContainer_${id}`
    ).style.transform = `translateX(-${change}px)`);
    setArrowVisibility(idx);
    setDotVisibility(idx);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.Controllers}`}>
        {favorite ? (
          <div
            className={`fa-solid fa-heart fa-xl c-r ${styles.Heart}`}
            onClick={(e) => toggleFavorite(e)}
          ></div>
        ) : (
          <div
            className={`fa-regular fa-heart fa-xl c-w ${styles.Heart}`}
            onClick={(e) => toggleFavorite(e)}
          ></div>
        )}
        {seeLeft && (
          <div
            className={`fa-solid fa-circle-left fa-xl ${styles.Arrow} ${styles.LeftArrow}`}
            onClick={(e) => handleArrowClick(e, false)}
          ></div>
        )}
        {seeRight && (
          <div
            className={`fa-solid fa-circle-right fa-xl ${styles.Arrow} ${styles.RightArrow}`}
            onClick={(e) => handleArrowClick(e, true)}
          ></div>
        )}

        <div className={`d-flex ${styles.Pagination}`}>
          {slides.map((item, idx) => {
            if (idx === 0) {
              return (
                <div
                  className={`${styles.Dot} bg-p ${styles.DotActive}`}
                  key={`Dot_${id}_${idx}`}
                  id={`Dot_${id}_${idx}`}
                  onClick={(e) => {
                    handleDotClick(e, idx);
                  }}
                ></div>
              );
            }
            return (
              <div
                className={`${styles.Dot} bg-p`}
                key={`Dot_${id}_${idx}`}
                id={`Dot_${id}_${idx}`}
                onClick={(e) => {
                  handleDotClick(e, idx);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.ImgContainer}`} id={`imgContainer_${id}`}>
        {slides.map((item, idx) => {
          return (
            <div
              className={`${styles.Item}`}
              style={{ backgroundImage: `url("${item}")` }}
              key={`Card_Slider_${idx}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
