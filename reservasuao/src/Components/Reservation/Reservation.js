import React from 'react';
import './Reservation.css';
import Split from '../Options/Options.js';
import Table from '../Table/Table.js';
import Button from '../Button/Button.js';

const Reservation = () => {
    return (
        <div>
            <div className="container text-center pt-5">
            <h2> Reservas </h2>
            </div>
            <div >
                <div className="container o-cont mt-5 mb-5">
                    <div>
                        <Split/>
                    </div>
                    <div>
                        <Table/>
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default Reservation;