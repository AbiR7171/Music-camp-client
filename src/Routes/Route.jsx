import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Authentication/SignUp";
import LogIn from "../Pages/Authentication/LogIn";
import Dashboard from "../Layouts/Dashboard";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/Student/EnrolledClass";
import AddAClass from "../Pages/Dashboard/Instructor/AddAClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import UpdateClass from "../Pages/Dashboard/Instructor/UpdateClass";


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
          path:"/dashboard",
          element:<Dashboard/>,
          children:[
            {
                path:"/dashboard/admin/manageClasses",
                element:<ManageClasses/>
            },
            {
               path:"/dashboard/admin/manageUsers",
               element:<ManageUsers/>
            },
            {
                path:"/dashboard/student/selectedClass",
                element:<SelectedClass/>
            },
            {
                path:"/dashboard/student/enrolledClass",
                element:<EnrolledClass/>
            },
            {
                path:"/dashboard/instructor/addAClass",
                element:<AddAClass/>
            },
            {
                path:"/dashboard/instructor/myClasses",
                element:<MyClasses/>
            },
            {
                path:"/dashboard/instructor/updateClass/:id",
                element:<UpdateClass/>
            }
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