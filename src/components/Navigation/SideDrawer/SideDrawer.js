import React from "react";

import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';

import classes from './sideDrawer.css';



const sideDrawer=(props)=>{
    let attachedClasses=[classes.sideDrawer, classes.closed];
    if(props.open){
        attachedClasses=[classes.sideDrawer, classes.open];
    }

    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join('')}>
                <Logo height="11%"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
        
    );
}
export default sideDrawer;