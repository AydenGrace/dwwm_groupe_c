// src > components > header.jsx
import "./Header.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ToggleButton from "./components/ToggleButton";
import SearchBar from "./components/SearchBar";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import LanguageModal from "./components/LanguageModal";
import MenuModal from "./components/MenuModal";


const Header = () => {

  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const handleLanguageClick = () => {
    setIsLanguageModalOpen(true);
  };

  const handleMenuClick = () => {
    setIsMenuModalOpen(true);
  };

  const handleProfileClick = () => {
    navigate("/profil");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="left-group">
          <Link to={"/"}>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/co-gite.appspot.com/o/Logo%2FFichier%2013.webp?alt=media&token=3ede1b52-862f-4cc8-ab3f-2b39b7f3831d"
              }
              alt="Logo Co'Gite"
              className="header-logo"
            />
          </Link>
          <ToggleButton />
        </div>

        <div className="right-group">
          <div className="TbWorld">
            <TbWorld
              size={25}
              color="white"
              cursor="pointer"
              onClick={handleLanguageClick}
            />
          </div>
          <div className="button-navigation">
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

        <SearchBar />
      </div>
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />
      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />
    </header>
  );
};

export default Header;
