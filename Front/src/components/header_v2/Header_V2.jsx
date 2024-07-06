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
import { useTranslation } from 'react-i18next'

export default function Header_V2() {
  const { t } = useTranslation("global");
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
              {t("header.home")}
            </Link>
            {user && (
              <>
                <Link to={"/profile"} onClick={handleCloseSideMenuClick}>
                  {t("header.profil")}
                </Link>
                <Link to={"/notifications"} onClick={handleCloseSideMenuClick}>
                  {t("header.notification")}
                </Link>
                <Link to={"/history"} onClick={handleCloseSideMenuClick}>
                  {t("header.history")}
                </Link>
                <Link to={"/cottages"} onClick={handleCloseSideMenuClick}>
                  {t("header.mylodging")}
                </Link>
              </>
            )}
            <Link to={"/gift_card"} onClick={handleCloseSideMenuClick}>
              {t("header.giftcard")}
            </Link>
            {!user && (
              <Link to={"/set_online"} onClick={handleCloseSideMenuClick}>
                {t("header.putlodging")}
              </Link>
            )}
            <Link to={"/help_center"} onClick={handleCloseSideMenuClick}>
              {t("header.helpcenter")}
            </Link>
          </div>
          {user ? (
            <Link
              to={"/disconnect"}
              className={`${styles.disconnect}`}
              onClick={handleCloseSideMenuClick}
            >
              {t("header.logout")}
            </Link>
          ) : (
            <Link
              to={"/login"}
              className={`${styles.connect}`}
              onClick={handleCloseSideMenuClick}
            >
              {t("header.login")}
            </Link>
          )}
        </nav>
        <nav className={`d-flex ${styles.mobileNav}`}>
          <Link to={"/search"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-magnifying-glass fa-xl`}></i>
            <p>{t("header.search")}</p>
          </Link>
          <Link to={"/search#map"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-map-location-dot fa-xl`}></i>
            <p>Carte</p>
          </Link>
          <Link to={"/"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-house fa-xl`}></i>
            <p>{t("header.home")}</p>
          </Link>
          <Link to={"/favorites"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-heart fa-xl`}></i>
            <p>{t("header.favorite")}</p>
          </Link>
          <Link to={"/messages"} className={`${styles.mobileButton}`}>
            <i className={`fa-solid fa-paper-plane fa-xl`}></i>
            <p>{t("header.message")}</p>
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
