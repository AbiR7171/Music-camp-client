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
import AllClasses from "../Pages/Home/AllClasses";
import AllInstructor from "../Pages/Home/AllInstructor";
import Payment from "../Pages/Dashboard/Student/Payment";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../Components/ErrorPage";


const route = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/classes",
                element:<AllClasses/>
            },
            {
                path:"/instructor",
                element: <AllInstructor/>
            }
        ]
    },
    {
          path:"/dashboard",
          element:<Dashboard/>,
          errorElement:<ErrorPage/>,
          children:[
            {
                path:"/dashboard/admin/manageClasses",
                element:<AdminRoute><ManageClasses/></AdminRoute>
            },
            {
               path:"/dashboard/admin/manageUsers",
               element:<AdminRoute><ManageUsers/></AdminRoute>
            },
            {
                path:"/dashboard/student/selectedClass",
                element:<PrivateRoute><SelectedClass/></PrivateRoute>
            },
            {
                path:"/dashboard/student/enrolledClass",
                element:<PrivateRoute><EnrolledClass/></PrivateRoute>
            },
            {
                path:"/dashboard/student/payment/:id",
                element:<PrivateRoute><Payment/></PrivateRoute>
            },
            {
                path:"/dashboard/instructor/addAClass",
                element:<InstructorRoute><AddAClass/></InstructorRoute>
            },
            {
                path:"/dashboard/instructor/myClasses",
                element:<InstructorRoute><MyClasses/></InstructorRoute>
            },
            {
                path:"/dashboard/instructor/updateClass/:id",
                element:<InstructorRoute><UpdateClass/></InstructorRoute>
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