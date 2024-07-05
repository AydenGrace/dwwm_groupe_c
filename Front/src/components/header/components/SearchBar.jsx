// src > components > SearchBar.jsx

import React, { useState } from "react";
import { IoFilterSharp, IoSearch } from "react-icons/io5";
import Modal from "react-modal";
import "./SearchBar.css";
import { useTranslation } from 'react-i18next';

function SearchBar() {
  const { t } = useTranslation("global");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleSearchClick = () => {
    console.log("Recherche effectuée avec le terme :", searchTerm);
  };

  return (
    <div className="search-bar-container">
      <button className="filter-button" onClick={handleFilterClick}>
        <IoFilterSharp size={20} />
      </button>
      <input
        type="text"
        className="search-input"
        placeholder={t("header.search")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearchClick}>
        <IoSearch size={20} />
      </button>

      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Modal de filtres"
        className="search-modal"
        overlayClassName="search-modal-overlay"
      >
        
        <h2>Filtres de recherche</h2>
   
      </Modal> */}
    </div>
  );
}

export default SearchBar;
