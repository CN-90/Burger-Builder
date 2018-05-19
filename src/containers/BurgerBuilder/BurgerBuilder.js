import React, { Component } from 'react';
import Aux from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 1.5,
    bacon: 1
}

class BurgerBuilder extends Component {
   state = {
       ingredients: {
           salad: 0,
           bacon: 0,
           cheese:0,
           meat: 0
       },
       totalPrice: 4,
       purchaseable: false,
       purchaseMode: false,
   }

   updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sum, el) => {
                return sum + el;
            })
        this.setState({
            purchaseable: sum > 0
        })
   }

    addIngredientHandler = (type) => {
       // make a copy of the old count of ingredients
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
           ...this.state.ingredients
       }
       updatedIngredients[type] = updatedCount;
       const priceAddition = INGREDIENT_PRICES[type];
       const oldPrice = this.state.totalPrice;
       const newPrice = oldPrice + priceAddition;
       this.setState({
           totalPrice: newPrice,
           ingredients: updatedIngredients
       })
       this.updatePurchaseState(updatedIngredients)
   }

   removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
   }

   purchaseModeHandler = () => {
       this.setState({purchaseMode: true});
    }
   
    modalCloseHandler = () => {
        this.setState({purchaseMode: false});
    }

    purchaseContinueHandler = () => {
        alert("You continued with your purchase.");
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }                                                                                                                                                                                                  
        return (
            <Aux>
                <Modal show={this.state.purchaseMode} modalClosed={this.modalCloseHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelOrder={this.modalCloseHandler}
                        continueOrder={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseModeHandler}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder;