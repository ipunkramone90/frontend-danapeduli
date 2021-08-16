import React from 'react'
import { MenuItems } from './MenuItems';
import Logo from '../images/navbarlogo.svg';
import '../css/Header.css'
import { Link } from 'react-router-dom';
import * as CgIcons from 'react-icons/cg';

const Navbar = () => {    
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    return (
        <div className="navbar">
        <div className="navbarItems">
        <Link to="/">
            <img src={Logo} className="navbar-logo" alt="Logo"/>
            </Link>
                <i className="menu-icon" onClick={myFunction}>
                    <CgIcons.CgMenuLeft></CgIcons.CgMenuLeft>
                </i>
                
        </div>
        <div className="menu-item" id="myLinks">
                {MenuItems.map((item,index) => {
                    return (
                        <div key={index}>
                            <a className={item.cName} href={item.link}>
                            {item.title}
                            </a>
                        </div>
                    )
                })}
              </div>
        </div>
    )
}

export default Navbar

