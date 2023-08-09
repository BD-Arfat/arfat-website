import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import SingleProduct from "../singleProduct/SingleProduct";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : "/projects/:id",
                element : <SingleProduct/>
            }
        ]
    }
])