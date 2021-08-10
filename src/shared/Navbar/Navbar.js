import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {

  const history = useHistory();

  const [responsive, setResponsive] = useState(false)

  const handleRouting = (ruta)=>{
    history.push(`/${ruta}`);
  }

  const handleNavbar = ()=>{
    setResponsive(!responsive)
  }

  
    return (
        <nav className={responsive ? "navbar-responsive" : "navbar-custom"}>
          <button className="responsive-button" onClick={handleNavbar}>
            <i className="fas fa-bars fa-2x"></i>
          </button>
          <ul className={'lista'}>
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
