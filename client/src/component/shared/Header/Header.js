import React from 'react'
import { Link } from "react-router-dom"

export const Header = () => (
  <nav className="navbar has-shadow is-spaced"
       role="navigation"
       aria-label="main navigation">
    <div id="navbarBasic"
         className="navbar-menu">
      <div className="navbar-end">
        <Link
          className="navbar-item"
          to="/admin">
          Admin
        </Link>
        <Link
          className="navbar-item"
          to="/employee">
          Employee
        </Link>
      </div>
    </div>
  </nav>
)