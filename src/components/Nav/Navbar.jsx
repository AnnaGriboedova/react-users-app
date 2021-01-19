import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to={'/'}>
                    Главная
                </NavLink>
            </div>
            <div>
                <NavLink to={'/employees'}>
                    Сотрудники
                </NavLink>
            </div>
        </nav>
    )
};

export default Navbar