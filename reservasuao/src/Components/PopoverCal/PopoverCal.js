import React, { useState } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';


const PopoverCal = () => {

    const [date, setDate] = useState(new Date());
    
    
    const onChange = date => {
        setDate( date );
    };

    const popover = (
        <Popover id="popover-basic" >
        <Popover.Title as="h3">Calendario
        </Popover.Title>
        <Popover.Content>
        <Calendar
          onChange={onChange}
          value={date}
      
        />
        </Popover.Content>
        </Popover>
    );

    return (
        <div className="pb-5">
            <div className="o-calendar pb-5">
                <OverlayTrigger className="bg-danger"trigger="click" placement="bottom" rootClose="true"  overlay={popover}>
                <Button variant="success">Calendario</Button>
                </OverlayTrigger>
            </div>
            <div className="o-date">
                <p>{date.toString()}</p>
            </div>
        </div>

    );
};

export default PopoverCal;