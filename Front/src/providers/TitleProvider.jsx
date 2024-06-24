import React from "react";
import { TitleContext } from "../contexts/TitleContext";

export default function TitleProvider({ children }) {
  function setTitle(title) {
    document.title = `Co'Gite : ${title}`;
  }
  return (
    <TitleContext.Provider value={{ setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}
