import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Chat } from '../pages/Chat'
import { AuthProvider } from '../context/AuthProvider'
import { PublicLayout } from '../components/layout/public/PublicLayout'
import { PrivateLayout } from '../components/layout/private/PrivateLayout'
import { Logout } from '../pages/Logout'

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<PublicLayout></PublicLayout>}>
            <Route index element={<Login></Login>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='registro' element={<Register></Register>}></Route>
          </Route>

          <Route path='/social' element={<PrivateLayout></PrivateLayout>}>
            <Route path='chat' element={<Chat></Chat>}></Route>
            <Route path='logout' element={<Logout></Logout>}></Route>
          </Route>


          <Route path='*' element={<><h1><p>Error 404 <Link to="/">Volver Al inicio</Link></p></h1></>}></Route>

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  )
}
