import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default function header() {
  return (
    <header>
        <div className='container'>
            <div className='.grid navbar-grid '>
                <div className='logo'>
                    <NavLink to="/">
                        <h1>pramod</h1>
                    </NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Countary">
                                Country
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Contact">
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}
