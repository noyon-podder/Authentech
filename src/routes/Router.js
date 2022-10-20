import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../components/ErrorPage';
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: 'register',
            element: <Register/>
        },
        {
            path: 'wallet',
            element: <PrivateRoute><Wallet/></PrivateRoute>
        },
        {
            path: 'profile',
            element: <PrivateRoute><Profile/></PrivateRoute>
        },
    ]
    
  }
])