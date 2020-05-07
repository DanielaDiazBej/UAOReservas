import React from 'react';


import Checkbox2 from '../Table/Table';
import Split from '../Options/Options';
import Button from '../Button/Button';



class Reservations extends React.Component {

    render() {

        return (
            <>
                <main role="main" className="flex-shrink-0 mt-5">
                    <Split/>
                    <Checkbox2 room={"2402"}/>
                    <Checkbox2 room={"1305"}/>
                    <Button/>
                 
                </main>
            </>
        )
    }
}

export default Reservations;
