import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/main";
import HomePage from "../pages/home"
import ServicePage from "../pages/service"
import Notfound from "../pages/notfound";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {index: true, element:<HomePage/>},
            {path:"service", element:<ServicePage/>},
            {path:"notfound", element:<Notfound/>}

        ]
    }
])

export default router;