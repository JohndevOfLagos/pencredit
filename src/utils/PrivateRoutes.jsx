import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {

   const auth = JSON.parse(localStorage.getItem("token"));

  return (
      !!auth ? <Outlet /> : <Navigate to="/login" />
  )
}
