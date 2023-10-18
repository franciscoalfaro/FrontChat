import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { Global } from '../helpers/Global';

export const Register = () => {
  const { form, changed } = useForm({})
  const [saved, setSaved] = useState('not_sended')

  const saveUser = async (e) => {
      //prevenir actualizacion de pagina o pantalla al realizar envio del form
      e.preventDefault()

      //variable para almacenar datos del formulario
      let newUser = form

      //guardar datos en backend

      const request = await fetch(Global.url + "user/registro", {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
              "Content-Type": "application/json"
          }
      })

      const data = await request.json()

      if (data.status == "success") {
          setSaved("saved")
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Usuario Registrado Correctamente',
              showConfirmButton: false,
              timer: 1100

          });
          setTimeout(() => { window.location.href = "/login" }, 1200);

      } if (data.status == "warning") {
          setSaved("warning")
      } if (data.status == "error") {
          setSaved("error")
      }

  }
  return (
    <>
      <div>Registro</div>

      <div className="register-container">
        <div className="register-form">
          <h2>Registrarse</h2>

          <form onSubmit={saveUser}>
            <div className='form-group'>
              <label htmlFor='name'>Nombre</label>
              <input type='text' className="form-control" name='name' onChange={changed}></input>
            </div>

            <div className='form-group'>
              <label htmlFor='nick'>Nick o apodo</label>
              <input type='text' name='nick' className="form-control" onChange={changed}></input>
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className="form-control" onChange={changed}></input>
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Contraseña</label>
              <input type='password' name='password' className="form-control" onChange={changed}></input>
            </div>
            <input type="submit" value="Registrate" className="btn btn-success"></input>
          </form>



          <div className="form-group mt-3">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <span>volver atras</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </>


  )
}
