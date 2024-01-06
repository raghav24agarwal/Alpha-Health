import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
   
  const fname = useSelector((state) => state.username);

  return fname ? children : <Navigate to="/admin/login" />
}

export default PrivateRoute