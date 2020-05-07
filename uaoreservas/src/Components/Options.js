import React from "react";
import Split from "./splitButton";
import "./options.css";
import { Grid } from "@material-ui/core";

const Options = () => {
  return (
    <div className="o-options">
      <Grid md="5">
        <div className="o-container-options">
          <h2>Reserva tu espacio</h2>
          <div className="o-option">
            <div>
              <p>Tipo de sala</p>
              <Split options={["Salón", "Sala de sistemas", "Sala mac"]} />
            </div>
            <div>
              <p>Cantidad de personas</p>
              <Split options={["1 a 5", "6 a 10", "10 a 20", "más de 20"]} />
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Options;
