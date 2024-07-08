import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Account from "./pages/account/Account.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { HomepageLoader } from "./loaders/HomepageLoader";
import Search from "./pages/search/Search";
import Concept from "./pages/concept/Concept";
import Profile from "./pages/profile/Profile";
import AjoutGite from "./pages/AjoutGite/AjoutGite";
import Details from "./pages/details/Details.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: HomepageLoader,
        errorElement: <ErrorPage />,
        element: <HomePage />,
      },
      {
        path: "search",
        errorElement: <ErrorPage />,
        element: <Search />,
      },
      {
        path: "concept",
        errorElement: <ErrorPage />,
        element: <Concept />,
      },
      {
        path: "account",
        errorElement: <ErrorPage />,
        element: <Account />,
      },
      {
        path: "register",
        errorElement: <ErrorPage />,
        element: <Register />,
      },
      {
        path: "login",
        errorElement: <ErrorPage />,
        element: <Login />,
      },
      {
        path: "profile",
        errorElement: <ErrorPage />,
        element: <Profile />,
      },
      {
        path: "profile/ajoutgite",
        errorElement: <ErrorPage />,
        element: <AjoutGite />,
      },
      {
        path: "details/:id",
        errorElement: <ErrorPage />,
        element: <Details />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
