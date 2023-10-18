import React from 'react'
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';
import { Global } from '../helpers/Global';
import { NavLink } from 'react-router-dom';

export const Login = () => {

    const { form, changed } = useForm({})
    const { setAuth } = useAuth()
    const [saved, setSaved] = useState('not_sended')


    const loginUser = async (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para autenticar al usuario
        let userLogin = form
        console.log(userLogin)
        //peticion al back
        const request = await fetch(Global.url + "user/login", {
            method: "POST",
            body: JSON.stringify(userLogin),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await request.json()
        console.log(data)
        if (data.status == "success") {
            // Persistir datos en el navegador - guardar datos de inicio de sesión
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            setSaved("login");
            // Establecer datos en el auth
            setAuth(data.user);
            // Redirección

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login correcto',
                showConfirmButton: false,
                timer: 1150

            });
            setTimeout(() => { window.location.reload() }, 1200);


        } else if (data.status == "error_404") {
            setSaved("error_404");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Falta usuario o clave!',

            })
        } else if (data.status == "Not Found") {
            setSaved("warning");
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Usuario no registrado!',

            })


        } else {
            setSaved("error");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'usuario o clave incorrecto!',

            })
        }
    };

    return (
        <>

            <div className="login-container">
                <div className="login-form">
                    <h2>Iniciar sesión</h2>
                    <form onSubmit={loginUser}>
                        <input type="email" name="email" placeholder="Correo electrónico" onChange={changed}></input>
                        <input type="password" name="password" placeholder="Contraseña" onChange={changed} required></input>
                        <button type="submit">Ingresar</button>
                    </form>
                    <div className="form-group mt-3">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/registro">
                                <span>Registrate</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </div>



            </div>


        </>
    )
}


export default Login;
