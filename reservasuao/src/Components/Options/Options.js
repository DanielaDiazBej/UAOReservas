import React from "react";
import Split from "../SplitButton/splitButton";
import PopoverCal from "../PopoverCal/PopoverCal.js";
import "./options.css";

const Options = () => {
  return (
    <div>
    <div className="d-flex justify-content-around o-contDrops">
      <div>
        <p>Tipo de sala</p>
        <Split options={["Salón", "Sala de sistemas", "Sala mac"]} />
      </div>
      <div>
        <p>Cantidad de personas</p>
        <Split options={["1 a 5", "6 a 10", "10 a 20", "más de 20"]} />
      </div>
    </div>
    <div className="d-flex justify-content-around pb-5" >
      <PopoverCal/>
    </div>
    </div>

  );
};

export default Options;
