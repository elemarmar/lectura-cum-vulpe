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
            exact
          >
            <i className='fas fa-home'></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={classes.active}
            className={classes.MenuLink}
            to='/study'
          >
            <i className='fas fa-book-reader'></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
