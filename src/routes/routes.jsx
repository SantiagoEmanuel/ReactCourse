import { ItemListContainer } from "../views/ItemListContainer";
import { ItemDetailsContainer } from "../views/ItemDetailsContainer";
import { ErrorView } from "../views/ErrorView";
import { LoginView } from "../views/LoginView";
import { RegisterView } from "../views/RegisterView";
import { CartView } from "../views/CartView";
import { App } from "../App";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ItemListContainer />,
      },
      {
        path: "/category/:category",
        element: <ItemListContainer />,
      },
      {
        path: "/item/:id",
        element: <ItemDetailsContainer />,
      },
      {
        path: "/cart",
        element: <CartView />,
      },
      {
        path: "/login",
        element: <LoginView />,
      },
      {
        path: "/register",
        element: <RegisterView />,
      },
    ],
    errorElement: <ErrorView />,
  },
];
