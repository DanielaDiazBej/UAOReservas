import React from 'react';
import LogoH from '../../Resources/logo_Horizontal.png';
import './Navb.css'



class Navb extends React.Component {

    render() {

        return (

            <nav className="navbar navbar-expand-md navbar-dark fixed-top o-navbar">

                <a className="navbar-brand" href="#">
                    <img src={LogoH} className="o-logoHUAO" alt="logo Horizontal de UAO Reservas" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active mr-3 ml-3">
                            <a className="nav-link" href="#">
                                <p className="o-link">Reservas</p></a>
                        </li>
                        <li className="nav-item active mr-3 ml-3">
                            <a className="nav-link" href="#">
                                <p className="o-link ">Espacios Reservados</p></a>
                        </li>
                        <li className="nav-item active mr-3 ml-3">
                            <a className="nav-link" href="#">
                                <p className="o-link">Mapa</p></a>
                        </li>
                        <li className="nav-item active mr-3 ml-3">
                            <a className="nav-link" href="#">
                                <p className="o-link">Contacto</p></a>
                        </li>
                    </ul>
                    <div className="mt-2 mt-md-0 o-usCont">
                        <h5>Usuario</h5>
                        <p>Usuario@gmail.com</p>
                    </div >
                </div>
            </nav>

        )

    }

}

export default Navb;