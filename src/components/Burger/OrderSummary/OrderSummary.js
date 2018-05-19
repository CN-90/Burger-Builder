import React from 'react';
import Aux from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (<li key={igKey}> <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} </li>);
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>Current Burger</p>
            <ul>
                { ingredientSummary }
            </ul>
            <strong><p>Total Price: {props.price.toFixed(2)} </p></strong>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.cancelOrder}>Cancel</Button>
            <Button btnType='Success' clicked={props.continueOrder}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;