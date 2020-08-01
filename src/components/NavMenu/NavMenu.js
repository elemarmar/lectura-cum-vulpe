import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavMenu.module.css';

const NavMenu = (props) => {

    return (
        <nav>
            <ul className={classes.NavMenu}>
                <li>
                    <NavLink 
                        activeClassName={classes.active} 
                        className={classes.MenuLink} 
                        to='/'
                        exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        activeClassName={classes.active} 
                        className={classes.MenuLink} 
                        to='/study'>
                        Study text
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;