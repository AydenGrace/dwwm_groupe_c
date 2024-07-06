import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import { getCottageById } from "../../apis/Cottages";
import { TitleContext } from "../../contexts/TitleContext";
import Dropdown from "../../components/dropdown/Dropdown";
import Tag from "../../components/tag/Tag";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import { setDefaults, fromAddress } from "react-geocode";
import { Calendar } from "@demark-pro/react-booking-calendar";

import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";

export default function Details() {
  const [favorite, setFavorite] = useState(false);
  const { setTitle } = useContext(TitleContext);
  const { id } = useParams();
  const [cottage, setCottage] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selected, setSelected] = useState([]);
  const [reserved, setReserved] = useState([]);
  const [gps, setGps] = useState(null);

  useEffect(() => {
    const getInfos = async () => {
      const tempcottage = await getCottageById(id);
      setCottage(tempcottage);
      setTitle(`${tempcottage.name}`);
      setCategories([
        ...new Set(tempcottage.tags.map((tag) => tag.category.value)),
      ]);
      setDefaults({
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Your API key here.
        language: "fr", // Default language for responses.
        region: "fr", // Default region for responses.
      });
      fromAddress(tempcottage.address)
        .then(({ results }) => {
          const { lat, lng } = results[0].geometry.location;
          // console.log(lat, lng);
          setGps([Number(lat), Number(lng)]);
        })
        .catch(console.error);
      getAllReservationDates();
      // console.log(tempcottage);
    };

    getInfos();
  }, []);

  const getAllReservationDates = () => {
    // FONCTION A FAIRE
  };

  const handleback = () => {
    history.back();
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className={`w-100 ${styles.container}`}>
      <div className={`${styles.headerSep}`}></div>
      {/* BACK BUTTON */}
      <div className={`d-flex ${styles.backContainer}`}>
        <Link
          className={`d-flex align-items-center ${styles.back}`}
          onClick={handleback}
        >
          <i className={`fa-solid fa-circle-arrow-left fa-2xl c-p`}></i>
          <p>Retour</p>
        </Link>
      </div>
      {/* BODY OF THE PAGE */}
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
            {/* GALLERY */}
            <div className={`d-flex w-100 ${styles.gallery}`}>
              <div
                className={`${styles.img}`}
                style={{ backgroundImage: `url(${cottage.images[0]})` }}
              ></div>
              <div className={`d-flex w-100 flex-wrap ${styles.galleryWrap}`}>
                {cottage.images.map((img, idx) => {
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
            {/* ADDRESS AND VIRUTAL TOUR */}
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
            <div className={`d-flex w-100 ${styles.columns}`}>
              {/* LEFT COLUMN */}
              <div className="d-flex w-100 flex-column gap-10">
                {/* NUMBER LIST AREA */}
                <div
                  className={`d-flex flex-column w-100 ${styles.nbContainer}`}
                >
                  <div className="d-flex justify-content-sb align-items-center">
                    <p>
                      <strong>Maximum de voyageurs :</strong>
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      {cottage.nb_max_person}
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Icons%2FTags%2FOther%2Fadult.webp?alt=media&token=d0d91e25-d5fc-4a1a-9e98-e94b451f9702"
                        alt="Nombre maximum de personne"
                        className={`${styles.icon}`}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-sb align-items-center">
                    <p>
                      <strong>Nombre de chambres :</strong>
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      {cottage.nb_bedrooms}
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Icons%2FTags%2FOther%2Fbedroom.webp?alt=media&token=26c27312-e52a-4597-9459-6fdd080973a4"
                        alt="Nombre de chambres"
                        className={`${styles.icon}`}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-sb align-items-center">
                    <p>
                      <strong>Nombre de lits :</strong>
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      {cottage.nb_beds}
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Icons%2FTags%2FOther%2Fdouble-bed.webp?alt=media&token=74fa8ead-7ca2-43b1-8f29-6361eb86d79c"
                        alt="Nombre de lits"
                        className={`${styles.icon}`}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-sb align-items-center">
                    <p>
                      <strong>Nombre de salles de bain :</strong>
                    </p>
                    <div className="d-flex gap-10 align-items-center">
                      {cottage.nb_bathrooms}
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Icons%2FTags%2FOther%2Fshower.webp?alt=media&token=75eb2d0a-3d8a-4be2-82e9-2c2aa53348d3"
                        alt="Nombre de salles de bains"
                        className={`${styles.icon}`}
                      />
                    </div>
                  </div>
                </div>
                {/* DESCRIPTION */}
                <Dropdown text={"Description"}>{cottage.description}</Dropdown>
                {/* DYNAMIC TAGS */}
                {categories.map((item, idx) => (
                  <Dropdown key={item + "_" + idx} text={item}>
                    <div className="d-flex flex-wrap w-100 gap-10 justify-content-center p-10">
                      {cottage.tags.map((itm, idx) => {
                        if (itm.category.value === item)
                          return (
                            <Tag
                              key={item + "_" + itm + "_" + idx}
                              img={itm.icon}
                              text={itm.value}
                            />
                          );
                      })}
                    </div>
                  </Dropdown>
                ))}
              </div>
              {/* RIGHT COLUMN */}
              <div className="d-flex flex-column p-10 w-100 gap-10">
                {/* OWNER */}
                <div
                  className={`d-flex align-items-center justify-content-sb w-100 ${styles.border}`}
                >
                  <Link
                    to={`/profile/${cottage.owner._id}`}
                    className={`${styles.notDecoration}`}
                  >
                    <div className={`d-flex align-items-center gap-10`}>
                      <div
                        style={{
                          backgroundImage: `url(${cottage.owner.avatar_uri})`,
                        }}
                        alt={cottage.owner.name + " avatar"}
                        className={`${styles.avatar}`}
                      ></div>
                      <p>
                        <strong>{cottage.owner.username}</strong>
                      </p>
                    </div>
                  </Link>
                  <Link
                    to={`/sendto/${cottage.owner._id}`}
                    target="_blank"
                    className="btn btn-reverse-primary f-center gap-10"
                  >
                    <i className="fa-solid fa-paper-plane fa-lg"></i>
                    Message
                  </Link>
                </div>
                {/* PRICE & RESERVATION */}
                <div
                  className={`f-center flex-column ${styles.priceContainer} ${styles.sticky} m-10`}
                >
                  <p>
                    <strong>{cottage.price_per_night}€ / nuit</strong>
                  </p>
                  <p>
                    <strong>{cottage.rating}</strong>{" "}
                    <i className="fa-solid fa-star c-p"></i>
                  </p>
                  <Link
                    to={`/purchase/${cottage._id}`}
                    className="btn btn-primary"
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`d-flex flex-column w-100 ${styles.calendarContainer}`}
            >
              <h2>Disponibilités</h2>
              <div className="d-flex w-100 justify-content-center mb-10">
                <Calendar
                  selected={selected}
                  reserved={reserved}
                  range={true}
                  protection={true}
                  options={{
                    locale: "fr",
                    weekStartsOn: 1,
                    useAttributes: true,
                  }}
                  onChange={setSelected}
                  className={`${styles.calendar}`}
                />
              </div>
            </div>
            {gps && (
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                  style={{ width: "100%", height: "300px" }}
                  defaultCenter={{ lat: gps[0], lng: gps[1] }}
                  defaultZoom={10}
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                >
                  <Marker
                    position={{ lat: gps[0], lng: gps[1] }}
                    clickable={true}
                    title={cottage.name}
                  />
                </Map>
              </APIProvider>
            )}
          </>
        )}
      </section>
    </div>
  );
}
