import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Home/Projects/Projects";
import About from "../Pages/Home/About/About";
import Skills from "../Pages/Home/skill/Skills";
import Product from "../product/Product";
import Service from "../Pages/Home/Service/Service";
import Contact from "../Pages/Home/Contact/Contact";

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
                element : <Product/>,
                loader : ({params})=> fetch(`http://localhost:5000/projects/${params.id}`)
            },
            {
                path: '/service',
                element : <Service/>
            },
            {
                path : '/contact',
                element : <Contact/>
            }
        ]
    }
])