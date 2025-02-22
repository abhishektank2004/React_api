import React from 'react'
import { Link } from 'react-router-dom'

function Navbar_menu() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/Table">Table</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/Cal">Cal</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/Crudop">Crud</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar_menu