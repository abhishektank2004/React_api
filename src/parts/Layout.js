import React from 'react'
import Navbar_menu from './Navbar_menu'
import Footor from './Footor'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className="h-screen flex flex-col">
      <div className="h-auto">
        <Navbar_menu />
      </div>

      <div>
        <Outlet/>
      </div>

      <div className="h-auto">
        <Footor />
      </div>
    </div>
    </>
  )
}

export default Layout
