import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";
import LogIn from "../Pages/Authentication/LogIn";


const route = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
        ]
    },
    {
        
            path:"/signup",
            element:<SignUp/>
        
    },
    {
        path:"/login",
        element:<LogIn/>
    }
])

export default route;