import { createElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(HomePage),
    children: [

        {
          path: "/about",
          element: createElement(AboutPage),
        },
        {
            path: "/users",
            element: createElement(UsersPage),
        },
        {
            path: "/users/:id",
            element: createElement(UserDetailPage),
        }
    ]
  },
]);

export default router;
