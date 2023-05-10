import React,  { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Styles from '../Components/css/Sidebar.module.css';
import logo from "../Assets/bigLogo.png"


const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={Styles.links}>
        <Link  to="/">
        <li>
           Dashboard
        </li>
        </Link>
        <Link  to="/property">
        <li>
        Property
        </li>
        </Link>
        <Link  to="/homebuyer">
        <li>
        Homebuyer
        </li>
        </Link>
        <Link  to="/Agents">
        <li>
        Agents
        </li>
        </Link>
        <Link  to="/Access">
        <li>
        Access
        </li>
        </Link>
      </ul>
    
    </div>
  );
}

export default Sidebar;
