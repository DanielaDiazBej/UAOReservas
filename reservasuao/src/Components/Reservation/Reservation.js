import React from 'react';
import './Reservation.css';
import Split from '../Options/Options.js';
import Table from '../Table/Table.js';
import Button from '../Button/Button.js';

const Reservation = () => {
    return (
        <div>
            <h4> Reservas </h4>
            <div >
                <div className="container o-cont">
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