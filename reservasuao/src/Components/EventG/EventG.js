import React from 'react';
import './EventG.css';


const EventG = ({imgEvent, nameEvent, descEvent, placeEvent, linkEvent}) => {
    return ( 
        <div className="col-md-4 o-card">
            <div class="card m-3">
                <img src={imgEvent} class="card-img-top" alt="invitacion a evento" />
                <div class="card-body">
                    <p class="card-header">Lugar: {placeEvent}</p>
                    <h5 class="card-title">{nameEvent}</h5>
                    <p class="card-text text-justify">{descEvent}</p>
                    <a href={linkEvent} class="btn btn-primary">Saber más</a>
                </div>
            </div>
        </div>
        
    );
};

export default EventG;