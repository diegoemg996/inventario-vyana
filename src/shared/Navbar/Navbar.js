import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {

  const history = useHistory();

  const [visible, setVisible] = useState(false)

  const handleRouting = (ruta)=>{
    history.push(`/${ruta}`);
  }

  const handleNavbar = ()=>{
    setVisible(!visible)
    console.log(visible)
  }

  
    return (
        <nav className="navbar-custom">
          <button className="responsive-button" onClick={handleNavbar}>
            <i className="fas fa-bars fa-2x"></i>
          </button>
          <ul className={visible ? 'navbar-visible' : 'lista'}>
            <li onClick={()=> handleRouting('')}>
              <NavLink exact className="navlink" to="/" activeClassName="selected">
                <p>Home</p> 
                <span><i className="fas fa-home"></i></span>
              </NavLink>
            </li>
            <li onClick={()=> handleRouting('movimientos')}>
              <NavLink exact className="navlink" to="/movimientos" activeClassName="selected">
                <p>Movimientos</p>
                <span><i className="fas fa-exchange-alt"></i></span>
              </NavLink>
            </li>
            <li onClick={()=> handleRouting('edicion')}>
              <NavLink exact className="navlink" to="/edicion" activeClassName="selected">
                <p>Edicion</p>
                <span><i className="fas fa-edit"></i></span>
              </NavLink>
            </li>
          </ul>
        </nav>
    )
}
