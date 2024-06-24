import { useContext, useEffect } from "react";
import styles from "./Login.module.scss";
import { TitleContext } from "../../contexts/TitleContext";

export default function Login() {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Connexion");
  }, []);
  return <div>Login</div>;
}
