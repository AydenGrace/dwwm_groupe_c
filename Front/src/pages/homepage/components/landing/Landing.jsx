import React, { useEffect } from "react";
import styles from "./Landing.module.scss";
import BackgroundSlider from "./components/BackgroundSlider";

export default function Landing() {
  let index = 0;
  const Slides = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Images%2Fpexels-aleksey-kuprikov-1883853-355123.webp?alt=media&token=3de9b004-df23-4bfb-b325-3a9be7b9f541",
      alt: "Co'Gite Slider",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Images%2Fpexels-pixabay-14741.webp?alt=media&token=f90f956f-451e-4b61-a53b-e927588194a6",
      alt: "Co'Gite Slider",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Images%2Fpexels-pixabay-37140.webp?alt=media&token=5d5c6174-93b2-4c2f-aa31-3a80f85c9f11",
      alt: "Co'Gite Slider",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Images%2Fpexels-pixabay-6522.webp?alt=media&token=0a255536-99c9-410f-8407-1c36518a8fc3",
      alt: "Co'Gite Slider",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Images%2Fpexels-miroalt-17984.webp?alt=media&token=09d36775-1463-420f-8a58-c00fc954241a",
      alt: "Co'Gite Slider",
    },
  ];

  return (
    <section
      id="Landing"
      className={`d-flex justify-content-center align-items-start flex-column ${styles.Landing} relative`}
    >
      <BackgroundSlider slides={Slides} />
      <h1 className="c-s mega">Co'Gîte</h1>
      <h2 className={`c-s ${styles.SubTitle} mb-10`}>
        N’hésitez plus, nous Co’Gîtons pour vous !
      </h2>
      <button className="btn btn-primary">DÉCOUVREZ NOTRE CONCEPT</button>
    </section>
  );
}
