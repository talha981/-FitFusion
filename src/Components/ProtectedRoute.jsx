import React from "react";
import {  Navigate } from 'react-router-dom';

const ProtectedRoute = ({element})=>{
    // const Navigate = useNavigate();
    // If the token exists, !! converts it into a boolean true, and if it doesn't exist, !! converts it into false
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? element: <Navigate to='/login'/>
}

export default ProtectedRoute;
