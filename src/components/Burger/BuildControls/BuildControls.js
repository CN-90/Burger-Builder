import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>${props.price.toFixed(2)} </strong> </p>
            { controls.map((ctrl, index) => {
                return <BuildControl 
                    label={ctrl.label} 
                    key={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)} 
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]}
                />
            })}
            <button disabled={!props.purchaseable} className={classes.OrderButton}  onClick={props.ordered}>Submit Order</button>
        </div>
    )
}

export default buildControls;