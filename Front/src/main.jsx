import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_en from './locales/en/global.json'
import global_fr from './locales/fr/global.json'
import global_es from './locales/es/global.json'
import global_jp from './locales/jp/global.json'
import global_ar from './locales/ar/global.json'
import global_py from './locales/py/global.json'
import global_de from './locales/de/global.json'

i18next.init({
 interpolation: { escapeValue: false },
  lng: 'auto',
  fallbackLng: 'fr',
  resources: {
  en: {
   global: global_en,
  },
  es: {
   global: global_es,
  },
  fr: {
   global: global_fr,
  },
  ar: {
   global: global_ar,
  },
  jp: {
   global: global_jp,
  },
  py: {
   global: global_py,
  },
  de: {
   global: global_de,
  },
 },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18next}>
  <RouterProvider router={router}></RouterProvider>
  </I18nextProvider>
  // </React.StrictMode>
);
