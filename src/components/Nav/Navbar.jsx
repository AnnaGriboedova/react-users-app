import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav >
            <div >
                <NavLink to={'/'} >
                    Home
                </NavLink>
            </div>
            <div >
                <NavLink to={'/users'} >
                    Users
                </NavLink>
            </div>
        </nav>
    )
};

export default Navbar