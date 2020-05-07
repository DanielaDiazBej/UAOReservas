import React from 'react';

import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import EventsG from '../EventsG/EventsG';


class Home extends React.Component {

    render() {

        return (
            <>
                
                <main role="main" className="flex-shrink-0 mt-5">
                    <div className="container">
                        <Slider />
                        <br></br>
                        <EventsG /> 
                        <hr className="featurette-divider" />
                    </div>
                </main>
          
            </>
        )
    }
}

export default Home;