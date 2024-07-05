import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Account from "./pages/account/account.jsx";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { HomepageLoader } from "./loaders/HomepageLoader";
import Search from "./pages/search/Search";
import Concept from "./pages/concept/Concept";
import Profile from "./pages/profile/Profile";
import AjoutGite from "./pages/AjoutGite/AjoutGite";
import Details from "./pages/details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: HomepageLoader,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "concept",
        element: <Concept />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/ajoutgite",
        element: <AjoutGite />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
