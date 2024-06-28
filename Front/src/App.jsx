import styles from "./App.module.scss";

import { Outlet, ScrollRestoration } from "react-router-dom";
import TitleProvider from "./providers/TitleProvider";
import UserProvider from "./providers/UserProvider";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <UserProvider>
        {/* HEADER ICI */}
        <main className="d-flex w-100 flex-column mh-100">
          <TitleProvider>
            <Outlet />
          </TitleProvider>
        </main>
        <Footer />
        <ScrollRestoration />
      </UserProvider>
    </>
  );
}

export default App;
