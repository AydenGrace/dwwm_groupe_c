import { useContext, useEffect } from "react";
import styles from "./ErrorPage.module.scss";
import { TitleContext } from "../contexts/TitleContext";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const { setTitle } = useContext(TitleContext);
  const error = useRouteError();

  console.log(error);

  useEffect(() => {
    setTitle("Erreur 404");
  }, []);

  return (
    <div className={`d-flex ${styles.page}`}>
      <section className={`d-flex flex-column w-100 ${styles.left}`}>
        <h1 className="mega">Oh non !</h1>
        <h2>Cette page est partie Co'gitée dans son coin !</h2>
        <p>Code d'erreur - {error ? error.status : 404}</p>
        <div className={`d-flex justify-content-center m-10`}>
          <Link className={`btn btn-primary`} to={"/"}>
            Revenir à l'accueil
          </Link>
        </div>
      </section>
      <section className={`d-flex flex-column w-100 ${styles.right}`}></section>
    </div>
  );
}
