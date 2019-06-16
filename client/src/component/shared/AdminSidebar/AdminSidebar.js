import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Sidebar = styled.div`
  padding: 1rem;
`

const AdminSidebar = () => (
  <Sidebar>
    <aside className="menu">
      <p className="menu-label">
        Admin
      </p>
      <ul className="menu-list">
        <li>
          <Link to="/admin">Employees</Link>
        </li>
        <li>
          <Link to="/admin/review">Reviews</Link>
        </li>
      </ul>
    </aside>
  </Sidebar>
)

export { AdminSidebar }