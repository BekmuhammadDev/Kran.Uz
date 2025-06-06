import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/main";
import HomePage from "../pages/home";
import ServicePage from "../pages/service";
import Notfound from "../pages/notfound";
import Partners from "../pages/Partners";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicePage /> },
      { path: "notfound", element: <Notfound /> },
      { path: "partners", element: <Partners /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
