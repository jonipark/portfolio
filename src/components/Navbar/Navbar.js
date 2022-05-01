import React from 'react'
import { MenuItems } from "./MenuItems"
import "./Navbar.css"

function Navbar() {

    return(
        <nav className="navbar-container">
            {/* <a href={window.location.origin}><img src={myLogo} height="80px"/></a> */}
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                    }
                )}
            </ul>
        </nav>
    )
}

export default Navbar