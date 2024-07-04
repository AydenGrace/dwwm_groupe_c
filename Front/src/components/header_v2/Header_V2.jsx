import React, { useContext, useState } from "react";
import styles from "./Header_V2.module.scss";
import { Link, useNavigate } from "react-router-dom";
import ToggleButton from "../header/components/ToggleButton";
import SearchBar from "../header/components/SearchBar";
import { TbWorld } from "react-icons/tb";
import LanguageModal from "../header/components/LanguageModal";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "../../contexts/UserContext";

export default function Header_V2() {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const { user } = useContext(UserContext);

  const handleLanguageClick = () => {
    setIsLanguageModalOpen(true);
  };

  const handleMenuClick = () => {
    setIsMenuModalOpen(true);
  };

  const handleProfileClick = () => {
    handleSideMenuClick();
  };

  const handleSideMenuClick = () => {
    document.getElementById("sideMenu").style.transform = "translateX(0)";
    document.getElementById("overlay").style.display = "block";
  };

  const handleCloseSideMenuClick = () => {
    document.getElementById("sideMenu").style.transform = "translateX(150%)";
    document.getElementById("overlay").style.display = "none";
  };

  return (
    <>
      <header className={`d-flex flex-column ${styles.container}`}>
        <div className={`d-flex justify-content-sb ${styles.upperDiv}`}>
          <div className={`d-flex w-100 ${styles.left}`}>
            <Link to={"/"} onClick={handleCloseSideMenuClick}>
              <img
                src={
                  "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Logo%2FFichier%2013.webp?alt=media&token=3ede1b52-862f-4cc8-ab3f-2b39b7f3831d"
                }
                alt="Logo Co'Gite"
                className={`${styles.logo}`}
              />
            </Link>
            <ToggleButton />
          </div>
          <div className={`d-flex w-100 ${styles.middle}`}>
            <SearchBar />
          </div>
          <div className={`d-flex w-100 ${styles.right}`}>
            <TbWorld
              size={25}
              color="white"
              cursor="pointer"
              onClick={handleLanguageClick}
            />
            <div
              className={`${styles.naviguation}`}
              onClick={handleSideMenuClick}
            >
              <RxHamburgerMenu
                size={25}
                cursor="pointer"
                onClick={handleMenuClick}
              />
              <CgProfile
                size={25}
                cursor="pointer"
                onClick={handleProfileClick}
              />
            </div>
          </div>
        </div>
        <div className={`d-flex w-100 ${styles.lowerDiv}`}>
          <SearchBar />
        </div>
        <LanguageModal
          isOpen={isLanguageModalOpen}
          onClose={() => setIsLanguageModalOpen(false)}
        />
        <nav className={`${styles.sideMenu}`} id="sideMenu">
          <div className="d-flex justify-content-end">
            <i
              className={`fa-solid fa-xmark fa-2x ${styles.pointer}`}
              onClick={handleCloseSideMenuClick}
            ></i>
          </div>
          <div className={`${styles.menuContainer}`}>
            <Link to={"/"} onClick={handleCloseSideMenuClick}>
              Accueil
            </Link>
            {user && (
              <>
                <Link to={"/profile"} onClick={handleCloseSideMenuClick}>
                  mon profil
                </Link>
                <Link to={"/notifications"} onClick={handleCloseSideMenuClick}>
                  Notifications
                </Link>
                <Link to={"/history"} onClick={handleCloseSideMenuClick}>
                  Historique de réservation
                </Link>
                <Link to={"/cottages"} onClick={handleCloseSideMenuClick}>
                  Mes logements
                </Link>
              </>
            )}
            <Link to={"/gift_card"} onClick={handleCloseSideMenuClick}>
              Carte cadeau
            </Link>
            {!user && (
              <Link to={"/set_online"} onClick={handleCloseSideMenuClick}>
                Mettre en ligne mon Gîte
              </Link>
            )}
            <Link to={"/help_center"} onClick={handleCloseSideMenuClick}>
              Centre d'aide
            </Link>
          </div>
          {user ? (
            <Link
              to={"/disconnect"}
              className={`${styles.disconnect}`}
              onClick={handleCloseSideMenuClick}
            >
              Déconnexion
            </Link>
          ) : (
            <Link
              to={"/login"}
              className={`${styles.connect}`}
              onClick={handleCloseSideMenuClick}
            >
              Connexion / Inscription
            </Link>
          )}
        </nav>
        <nav className={`d-flex ${styles.mobileNav}`}>
          <Link to={"/search"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-magnifying-glass fa-xl`}></i>
            <p>Recherche</p>
          </Link>
          <Link to={"/search#map"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-map-location-dot fa-xl`}></i>
            <p>Carte</p>
          </Link>
          <Link to={"/"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-house fa-xl`}></i>
            <p>Accueil</p>
          </Link>
          <Link to={"/favorites"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-heart fa-xl`}></i>
            <p>Favoris</p>
          </Link>
          <Link to={"/messages"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-paper-plane fa-xl`}></i>
            <p>Messages</p>
          </Link>
        </nav>
        <div
          className={`${styles.overlay}`}
          id="overlay"
          onClick={handleCloseSideMenuClick}
        ></div>
      </header>
    </>
  );
}
