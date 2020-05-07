import React from 'react';
import './App.css';
import Header from './Components/Header'
import Checkbox2 from  './Components/Table'
import Split from './Components/Options'
import Button from './Components/Button'

function App() {

  return (
    <div className="App">
      <Header/>
      <Split/>
      <Checkbox2 room={"2402"}/> 
      <Checkbox2 room={"1305"}/>
      <Button/>
    </div>
  );
}

export default App;
