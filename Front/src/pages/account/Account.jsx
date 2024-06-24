import { useContext, useEffect } from "react";
import styles from "./Account.module.scss";
import { TitleContext } from "../../contexts/TitleContext";

export default function Account() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Mon Compte");
  }, []);
  return <div className="AccountPage">Account</div>;
}
