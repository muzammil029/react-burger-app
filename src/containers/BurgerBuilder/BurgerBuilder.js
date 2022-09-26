import React, { Component } from "react";
import axios from "axios";

import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import buildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumary from "../../components/Burger/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {

    const INGREDIENT_PRICES = {
        salad : 0.5,
        bacon: 0.7,
        cheese: 0.4,
        meat: 1.3
    }
    state={
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            }
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    };

    purchaseCancelHandler=()=>{
        this.setState({purchasing: false});
    }
    purchaseContinueHandler=()=>{
        
        //alert('You Continue!');
        const order = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Muzammil',
                address: {
                    street: 'Obulachari Road',
                    PinCode: '515865',
                    Country: 'India'
                }
                email:'test@test.com'
            
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order);
        .then(response=>
            console.log(response))
            .catch(error=>console.log(error));
    }

    updatePurchaseState{
        const ingredient={
            ...this.state.ingredients
        }
    }
    const Sum=Object.keys(ingredients).map(ig.key=>{
        return ingredients[ig.key]
    });
    .reduce((sum,el)=>{
        return sum + el;
    }, 0);
    this.setState({purchasable: Sum > 0 });    
    
    addIngredientHandler= (type)=>{
        const oldCount= this.state.ingredients[type];
        const updateCounter= oldCount + 1;
        const updatedIngredients={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCount;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldPrice= this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler= (type)=>{
        const oldCount=this.state.ingredients[type];
            if (oldCount <==0 ) {
                return;
            }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction=this.INGREDIENT_PRICES[type];
        const newPrice= oldPrice-priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render() {
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <=0
        }
        return (
            <Auxi>
                <Modal show={this.state.purchasing}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}>
                    </OrderSummary>
                    price={this.state.totalPrice}
                </Modal>
                <Burger ingredient= {this.state.ingredients} />
                <buildControls ingredientAdded={this.addIngredientHandler} 
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                 ingredientRemoved={this.removeIngredientHandler} 
                 disabled= {disabledInfo} 
                 price={this.state.totalPrice} />
            </Auxi>
        );
    }
}
export default BurgerBuilder;