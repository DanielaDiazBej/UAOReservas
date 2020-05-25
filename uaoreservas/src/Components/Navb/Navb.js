import React from "react";
import LogoH from "../../Resources/logo_Horizontal.png";
import "./Navb.css";
import { NavLink, withRouter } from "react-router-dom";

class Navb extends React.Component {
  render() {
    const location = this.props.location.pathname;
    if (location === "/login") return null;
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top o-navbar">
        <a className="navbar-brand" href="#">
          <img
            src={LogoH}
            className="o-logoHUAO"
            alt="logo Horizontal de UAO Reservas"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active mr-3 ml-3">
              <NavLink to="/Reservations" className="nav-link">
                <p className="o-link">Reservas</p>
              </NavLink>
            </li>
            <li className="nav-item active mr-3 ml-3">
              <NavLink to="" className="nav-link">
                <p className="o-link ">Espacios Reservados</p>
              </NavLink>
            </li>
            <li className="nav-item active mr-3 ml-3">
              <NavLink to="/Map" className="nav-link">
                <p className="o-link">Mapa</p>
              </NavLink>
            </li>
            <li className="nav-item active mr-3 ml-3">
              <NavLink to="/Contact" className="nav-link">
                <p className="o-link">Contacto</p>
              </NavLink>
            </li>
          </ul>
          <div className="mt-2 mt-md-0 o-usCont">
            <h5>Usuario</h5>
            <p>{localStorage.getItem("USER_EMAIL")}</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navb);
