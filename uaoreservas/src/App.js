import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Checkbox2 from  './Components/Table/Table'
import Split from './Components/Options/Options'
import Button from './Components/Button/Button'
import Navb from './Components/Navb/Navb'

function App() {

  return (
    <div className="App">
      <Navb/>
      <Header/>
      <Split/>
      <Checkbox2 room={"2402"}/> 
      <Checkbox2 room={"1305"}/>
      <Button/>
    </div>
  );
}

export default App;
