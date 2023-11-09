import { RouteObject } from "react-router-dom";
import App from "./App";
import LoginLayout from "layouts/LoginLayout/LoginLayout";
import UserLayout from "layouts/UserLayout/UserLayout";
import LandingPage from "./pages/landing/LandingPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";
import CardsPage from "pages/cards/cardsPage";
import { cardLoader } from "providers/cards/loader/card-loader";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <LoginLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegistrationPage />,
          },
          {
            path: "forgot-password",
            element: <ForgotPasswordPage />,
          },
        ],
      },
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            path: "/",
            element: <LandingPage />,
          },
          {
            path: "cards",
            loader: cardLoader,
            element: <CardsPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
