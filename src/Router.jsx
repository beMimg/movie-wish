import { createBrowserRouter } from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Pages
import WelcomePage from "./page/WelcomePage";
import PopularPage from "./page/PopularPage";
import CategoriesPage from "./page/CategoriesPage";
import Genre from "./page/Genre";

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
      { path: "/categories/:id", element: <Genre /> },
    ],
  },
]);

export default router;
