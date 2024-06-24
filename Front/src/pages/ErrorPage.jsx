import { useContext, useEffect } from "react";
import styles from "./ErrorPage.module.scss";
import { TitleContext } from "../contexts/TitleContext";

export default function ErrorPage() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Error");
  }, []);
  return <div>ErrorPage</div>;
}
