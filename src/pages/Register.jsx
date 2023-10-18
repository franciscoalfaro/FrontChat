import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
  };
  return (
    <>
      <div>Registro</div>

      <div className="register-container">
        <div className="register-form">
          <h2>Registrarse</h2>
          <input
            type="text"
            placeholder="Nombre completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Registrarse</button>

          <div className="form-group mt-3">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <span>Ingresar</span>
              </NavLink>
            </li>
          </ul>
        </div>
        </div>

      </div>

    </>


  )
}
