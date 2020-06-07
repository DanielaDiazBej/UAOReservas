import React from 'react';
import './ButtonLogin.css';
import { Link } from 'react-router-dom';


function popup () {
    alert("¿Reservar salón?")
}

const Button = ({action}) => {
    return ( <div className="o-container-button-login">
        <Link to="/Pages/Home"><button className="o-button">{action}</button></Link>
    </div> );
}
 
export default Button;