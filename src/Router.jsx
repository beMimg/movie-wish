import { createBrowserRouter } from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import WelcomePage from "./page/WelcomePage";
import PopularPage from "./page/PopularPage";
import CategoriesPage from "./page/CategoriesPage";
import Genre from "./page/Genre";
import Movie from "./page/Movie";
import WishList from "./page/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "popular", element: <PopularPage /> },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories/:id/:page",
        element: <Genre />,
      },
      {
        path: "/movie/:title/:id",
        element: <Movie />,
      },
      { path: "wish_list", element: <WishList /> },
    ],
  },
]);

export default router;
