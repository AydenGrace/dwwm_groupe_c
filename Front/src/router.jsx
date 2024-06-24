import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Account from "./pages/account/account";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <ErrorPage />,
        children : [
            {
                index : true,
                element : <HomePage />
            },
            {
                path : "account",
                element : <Account />
            },
            {
                path : "register",
                element : <Register />
            },
            {
                path : "login",
                element : <Login />
            },
        ]
    }
])