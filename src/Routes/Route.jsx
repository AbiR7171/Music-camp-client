import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";


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
        
    }
])

export default route;