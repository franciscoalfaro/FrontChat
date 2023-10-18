import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import useAuth from '../../../hooks/useAuth'

export const PrivateLayout = () => {

    const { auth, loading } = useAuth()
    return (
        <>
            <div className="container-chat">
                <div className="row">
                    <Header></Header>

                    <Sidebar></Sidebar>

   

                    {auth._id ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>}


                </div>
            </div>
        </>

    )
}
