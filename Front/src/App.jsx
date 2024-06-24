import styles from "./App.module.scss";

import { Outlet } from "react-router-dom";
import TitleProvider from "./providers/TitleProvider";

function App() {
  return (
    <>
      <TitleProvider>
        <Outlet />
      </TitleProvider>
    </>
  );
}

export default App;
