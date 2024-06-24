import React from "react";
import styles from "./HomePage.module.scss";
import Upload from "../assets/components/upload/Upload";

export default function HomePage() {
  return (
    <div className={`w-100 h-100 f-center flex-column`}>
      <h1 className="mega">HomePage</h1>
      <Upload />
    </div>
  );
}
