import React from 'react'
import iconDashboard from "./analytics.svg"
import "./SideBar.css"
import {Link} from "react-router-dom"

export default function SideBar() {
  return (
    <nav className='sidenav'>
        <img src={iconDashboard} alt="icon dashboard" />
        <Link to="/">FINANCES</Link>
        <Link to="/dashboardEmployees">EMPLOI</Link>

    </nav>
  )
}
