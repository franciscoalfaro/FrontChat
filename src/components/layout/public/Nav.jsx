import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="/login">Chat</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}
