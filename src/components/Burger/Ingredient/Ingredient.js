import React, { Component } from 'react';
import classes from './Ingredient.css'
import PropTypes from 'prop-types';


class Ingredient extends Component {
    render(){
        let ingredients = {
            'bread-bottom': <div className={classes.BreadBottom}></div>,
            'bread-top': (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            ),
            'meat': <div className={classes.Meat}></div>,
            'cheese': <div className={classes.Cheese}></div>,
            'bacon': <div className={classes.Bacon}></div>,
            'salad': <div className={classes.Salad}></div>
        }
        return ingredients[this.props.type]
    }  
};

Ingredient.propTypes = {
    type: PropTypes.string.isRequired        
}

export default Ingredient;

