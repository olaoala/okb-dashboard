import React from 'react';
import Styles from '../Components/css/Topnav.module.css';
import logo from "../Assets/bigLogo.png"


const TopNav = () => {
  return (
    <nav className={Styles.topNav}>
      <div>
        <h2 className={Styles.adminHeader}>Welcome, Admin!</h2>
      </div>
      <ul className={Styles.navList}>
        
        <li className={Styles.navItemRight}>
        <div
        className={Styles.account}
        style={{
          backgroundSize: "cover",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer"
        }}
      >
      </div>
        <ul className={Styles.dropdown}>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Log Out</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
