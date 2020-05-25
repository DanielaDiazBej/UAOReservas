import React from 'react';
import LogoH from '../../Resources/logo_Horizontal.png';
import "./Footer.css"



class Footer extends React.Component {

  render() {

    return (

      <footer className="footer row mt-auto py-3 bg-danger ">
        <row className="d-flex justify-content-around">
          <div className="col">
            <img src={LogoH}
              className="o-logoHUAO"
              alt="logo Horizontal de UAO Reservas" />
          </div>
          <div className="card-group mr-5 ml-5 o-cards">
            <div className="card-sm bg-danger">
              <div className="card-body">
                <h5 className="card-title">Páginas Institucionales</h5>
                <a className="card-text">www.uao.edu.co</a><br></br>
                <a className="card-text">www.uaovirutal.edu.co</a>
              </div>
            </div>
            <div className="card-sm bg-danger">
              <div className="card-body">
                <h5 className="card-title">Links del sitio</h5>
                <a className="card-text">Inicio</a><br></br>
                <a className="card-text">Reservar</a><br></br>
                <a className="card-text">Espacios reservados</a><br></br>
                <a className="card-text">Mapa</a><br></br>
                <a className="card-text">Soporte</a><br></br>
              </div>
            </div>
            <div className="card-sm bg-danger">
              <div className="card-body">
                <h5 className="card-title">Universidad Autonoma de Occidente</h5>
                <p className="card-text">
                  PBX: + 2 318 8000 <br></br>
                  Linea gratuita: 01 8000 91 34 35 <br></br>
                  buzon@uao.edu.co<br></br>
                  Calle 25 No. 115-8 km 2 Vía Cali -  Jamundí
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={LogoH}
              className="o-logoHUAO mt-2 mt-md-0"
              alt="logo Horizontal de UAO Reservas" />
            <p> &copy; {(new Date().getFullYear())} UAO Reservas </p>
          </div>
        </row>
       {/*  <row>
          <p className="float-right"><a href="#">Subir</a></p>
        </row> */}

      </footer>
    )
  }
}

export default Footer;