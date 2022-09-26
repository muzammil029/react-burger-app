import React from "react";

import classes from './BuildControl.css';

const buildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.label}>
            {props.label}
        </div>
        <button className={classes.less} onClick={props.removed} disabled={props.disavled}>Less</button>
        <button className={classes.More} onClick={props.Added}>More</button>
    </div>
)

export default buildControl;