import styles from "./App.module.scss";

import { Outlet, ScrollRestoration } from "react-router-dom";
import TitleProvider from "./providers/TitleProvider";
import UserProvider from "./providers/UserProvider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Header_V2 from "./components/header_v2/Header_V2";

function App() {
  return (
    <>
      <UserProvider>
        {/* <Header /> */}
        <Header_V2 />
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
