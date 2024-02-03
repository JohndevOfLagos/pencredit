import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/home/Home';
import { Login } from 'pages/login/Login';
import { NotFound } from 'pages/not-found/NotFound';
import { ContentManagement } from 'layouts/ContentManagement';
import { PrivateRoutes } from 'utils/PrivateRoutes';

export const AppRoutes = () => {
  return (
    
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/user/*" element={<ContentManagement />}/>
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
       
      </Routes>

  )
}
