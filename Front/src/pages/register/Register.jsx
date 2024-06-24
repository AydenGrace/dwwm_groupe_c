import { useContext, useEffect } from "react";
import styles from "./Register.module.scss";
import { TitleContext } from "../../contexts/TitleContext";

export default function Register() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Inscription");
  }, []);
  return <div>Register</div>;
}
