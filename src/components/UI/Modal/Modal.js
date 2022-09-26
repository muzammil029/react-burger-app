import React,{Component} from "react";

import classes from './Modal.css';
import Backdrop from "./Backdrop/Backdrop";
import Auxi from "../../../hoc/Auxi";

class Modal extends Component {
     
    shouldComponentUpdate(nextProps, nextStart) {
        return(nextProps.show !==this.props.show);
    }
    componentWillUpdate(){
        console.log('[Modal] willUpdate');
    }

    render(){
        return (
             <Auxi>
                <Backdrop show={props.show} clicked={props.modalClosed}/>
                <div className={classes.Modal}>
                    style={{
                    transform: props.show ? 'translate Y(0)':'translateY(-100vh)',
                    opacity: props.show ? '1': 0
                    }}
                </div>
            </Auxi>
        );
    }
}
export default Modal;