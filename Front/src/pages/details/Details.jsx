import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import { getCottageById } from "../../apis/Cottages";
import { TitleContext } from "../../contexts/TitleContext";
import Dropdown from "../../components/dropdown/Dropdown";
import Tag from "../../components/tag/Tag";

export default function Details() {
  const [favorite, setFavorite] = useState(false);
  const { setTitle } = useContext(TitleContext);
  const { id } = useParams();
  const [cottage, setCottage] = useState(null);

  useEffect(() => {
    const getInfos = async () => {
      const tempcottage = await getCottageById(id);
      setCottage(tempcottage);
      setTitle(`${tempcottage.name}`);
      console.log(tempcottage);
    };
    getInfos();
  }, []);

  const handleback = () => {
    history.back();
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className={`w-100 ${styles.container}`}>
      <div className={`${styles.headerSep}`}></div>
      <div className={`d-flex ${styles.backContainer}`}>
        <Link
          className={`d-flex align-items-center ${styles.back}`}
          onClick={handleback}
        >
          <i className={`fa-solid fa-circle-arrow-left fa-2xl c-p`}></i>
          <p>Retour</p>
        </Link>
      </div>
      <section className={`d-flex flex-column ${styles.centerContainer}`}>
        {cottage && (
          <>
            <div className="d-flex justify-content-sb align-items-center">
              <h1>{cottage.name}</h1>
              {favorite ? (
                <div
                  className={`fa-solid fa-heart fa-xl c-r ${styles.Heart}`}
                  onClick={() => toggleFavorite()}
                ></div>
              ) : (
                <div
                  className={`fa-regular fa-heart fa-xl ${styles.Heart}`}
                  onClick={() => toggleFavorite()}
                ></div>
              )}
            </div>
            <div className={`d-flex w-100 ${styles.gallery}`}>
              {/* <img
                src={`${cottage.images[0]}`}
                alt={`${cottage.name} image`}
                className={`${styles.img}`}
              /> */}
              <div
                className={`${styles.img}`}
                style={{ backgroundImage: `url(${cottage.images[0]})` }}
              ></div>
              <div className={`d-flex w-100 flex-wrap ${styles.galleryWrap}`}>
                {cottage.images.map((img, idx) => {
                  console.log(idx);
                  if (idx === 0 || idx > 4) return;
                  return (
                    <div
                      key={`${cottage.name} image ${idx}`}
                      className={`${styles.small_img}`}
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className={`d-flex justify-content-sb align-items-center`}>
              <p>
                <strong>Adresse : </strong> {cottage.address}
              </p>
              <Link
                to={cottage.vitual_tour_url}
                target="_blank"
                className="btn btn-reverse-primary"
              >
                Visite virtuelle
              </Link>
            </div>
            <div className="d-flex w-100">
              <div className="d-flex w-100 flex-column">
                <Dropdown text={"Description"}>{cottage.description}</Dropdown>
                <Dropdown text={"Tags"}>
                  <div className="d-flex flex-wrap w-100 gap-10 justify-content-center p-10">
                    {cottage.tags.map((itm, idx) => (
                      <Tag key={idx} img={itm.icon} text={itm.value} />
                    ))}
                  </div>
                </Dropdown>
              </div>
              <div className="d-flex w-100"></div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
