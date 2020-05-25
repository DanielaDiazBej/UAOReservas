import React from 'react';
import CardsSupport from '../CardsSupport/CardsSupport.js';
import { Link } from 'react-router-dom';


class Support extends React.Component {

    render() {
        return (
            <>
            <div className="container text-center pt-5">
                <h2>Soporte</h2>
                <div>
                    <p>Si necesitas ayuda o informacion acerca de <Link to="./Reservation">reservar un espacio</Link>, no dudes en contáctarnos</p>
                </div>
            </div>
                <div>
                    <CardsSupport/>
                </div>
            </>
        );
    }

}
export default Support;