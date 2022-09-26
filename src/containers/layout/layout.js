import React, {Component} from "react";

import Auxi from "../../hoc/Auxi";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from './layout.css';


class Layout extends Component{
    state={
        showSideDrawer: true
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render(){
        return(
        <Auxi>
        <Toolbar />
        <SideDrawer 
        open= {this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler} />
        <main className={classes.content}>{props.children}
        </main>
        </Auxi>
        )
    };
}
export default Layout;