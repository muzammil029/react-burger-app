import React from "react";

import classes from './Logo.css';
import burgerLogo from '../../assets/images/burgerLogo';

const Logo=(props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={burgerLogo} alt="BurgerLogo" />
    </div>
)
