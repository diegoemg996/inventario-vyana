import React from 'react'
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {

  const history = useHistory();

  const handleRouting = (ruta)=>{
    history.push(`/${ruta}`);
  }

  
    return (
        <nav className="navbar-custom">
          <ul>
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
          </ul>
        </nav>
    )
}
