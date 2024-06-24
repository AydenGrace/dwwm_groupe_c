import React, { useEffect, useState } from "react";
import styles from "./Upload.module.scss";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "./components/firebase";
import { Convert } from "./components/WebP";

export default function upload({
  StorageRoad,
  IsPersonnalisationTag,
  IsDefaultCottageImg,
  IsWebsiteImg,
  IsLogo,
}) {
  const [img, setImg] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [imgProgress, setImgProgress] = useState(0);

  const storageRoad = (filename) => {
    if (StorageRoad) return StorageRoad;
    if (IsPersonnalisationTag) return `Icons/Tags/Other/${filename}`;
    if (IsDefaultCottageImg) return `Uploads/Default/${filename}`;
    if (IsWebsiteImg) return `Images/${filename}`;
    if (IsLogo) return `Logo/${filename}`;
    return `Uploads/${filename}`;
  };

  const uploadFile = async (file) => {
    if (!file) return;
    const storage = getStorage(app);
    const filename = file.name;
    const storageRef = ref(
      storage,
      storageRoad(
        filename.substring(
          0,
          filename.length - (filename.length - filename.lastIndexOf("."))
        ) + ".webp"
      )
    );
    const WebpImg = await Convert(file);
    const uploadTask = uploadBytesResumable(storageRef, WebpImg);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
        setImgProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
      (err) => {
        switch (err.code) {
          case "storage/unauthorized":
            console.error("Accès non autorisé");
            break;
          default:
            console.error(err);
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL.toString());
        });
      }
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await uploadFile(img);
  }

  return (
    <div className={`f-center mhfull flex-column`}>
      <form
        onSubmit={handleSubmit}
        className=" d-flex flex-column align-items-center mb-20"
      >
        <div className="d-flex flex-column mb-20">
          <label htmlFor="img" className="mb-10">
            Image : <span> </span>
          </label>
          <input
            type="file"
            name="img"
            id="img"
            accept="image/*"
            onChange={(e) => setImg(() => e.target.files[0])}
          />
        </div>
        <button className="btn btn-primary">Upload</button>
        {imgProgress > 0 ? `Uploading ${imgProgress}%` : ""}
      </form>
      <div
        className="f-center flex-wrap"
        style={{ width: "100%", minWidth: "1200px", margin: "0 auto" }}
      ></div>
    </div>
  );
}
