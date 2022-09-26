import React from "react";
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) =>{
    const transformedIngredients= Object.keys(props.ingredients).map(igkey => {
        return[...Array(props.ingredient[igkey])].map((-  i) => {
            <BurgerIngredient key={igkey+1}
            type={igkey} />
        });
    });
    
    .reduce((arr,el)=>{
        return arr.concate(el)
    }, []);
    if(transformedIngredients.length ===0){
        transformedIngredients =<p>
            please start adding Ingredients
        </p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default Burger;