import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import Logo from '../images/navbarlogo.svg';
import '../css/Header.css'

class Header extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }


    render() {
        return(
            <nav className="NavbarItems">
            <a href="/"><img src={Logo} className="navbar-logo" alt="Logo"/></a>
                <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-bars' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.link}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
                </ul>
            </nav>
        )
    }
}

export default Header