import React from "react";
import Auxi from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button";

const orderSummary =(props)=>{
    const ingredientSummary= Object.keys.[props.ingredients]
    .map(igkey=>{
        return(
            <Auxi>
                <h3></h3>
                <p></p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price={props.price.toFIxed(22)}</strong></p>
               <Button btnType="DANGER" clicked={props.purchaseCancelled}>CANCEL</Button>
               <Button btnType="SUCCES" clicked={props.purchaseContinued}>CONTINUE</Button>  
            </Auxi>
        );
    });
}
export default orderSummary;