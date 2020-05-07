import React from 'react';
import Menu from '../Menu/Menu'
import LogoH from '../../Resources/logo_Horizontal.png'
import '../Header/header.css'
import { Grid } from '@material-ui/core';

const Header = () => {
    return(
        <div className="o-header">
            <Grid md="2" xs="3">
            <img src={LogoH}/>
            </Grid>
            
            <Grid md="8" xs="6">
                <Menu/>
            </Grid>
            <Grid md="2" xs="3">
            <div className="o-user">
                <h3>Usuario</h3>
                <h4>Usuario@gmail.com</h4>
            </div>
            </Grid>
        </div>
    );

}

export default Header;