import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { NavLink, useNavigate } from 'react-router-dom'

export const Nav = () => {
    const {auth} = useAuth()
    const navegar = useNavigate()
    
    return (

        <nav className="navbar navbar-expand-lg navbar navbar-custom">
            <div className="container">
                <a className="navbar-brand" href="#">Red Social</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Time Line</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gente</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ajustes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Chat</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/social/logout"><i className="bi bi-box-arrow-right"><span> Cerrar sesión</span></i></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
