import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Home/Projects/Projects";
import About from "../Pages/Home/About/About";
import Skills from "../Pages/Home/skill/Skills";
import Product from "../product/Product";

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
                path : '/about',
                element : <About/>
            },
            {
                path : '/skill',
                element : <Skills/>
            },
            {
                path : '/projects',
                element : <Projects/>
            },
            {
                path: '/product/:id',
                loader: async({params})=>{
                    // console.log(params.id)
                    return fetch(`db.json/products/${params?.id}`)
                },
                element : <Product/>
            }
        ]
    }
])