import React from 'react';
import { VscGraphLine } from 'react-icons/vsc';
import { IoIosKeypad, IoIosPaper } from 'react-icons/io';
import { GiArchiveResearch } from 'react-icons/gi';
import { ImCalculator } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import classes from '../../sass/layout/navbar.scss';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <span className={classes.navbar__logo}><ImCalculator /></span>
      <nav>
        <ul>
          <li><NavLink activeClassName={classes.navbar__active} to='/prepare'><GiArchiveResearch /><span>Prepare</span></NavLink></li>
          <li><NavLink activeClassName={classes.navbar__active} to='/instruct'><IoIosPaper /><span>Instruct</span></NavLink></li>
          <li><NavLink activeClassName={classes.navbar__active} to='/monitor'><IoIosKeypad /><span>Monitor</span></NavLink></li>
          <li><NavLink activeClassName={classes.navbar__active} to='/results'><VscGraphLine /><span>Results</span></NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
