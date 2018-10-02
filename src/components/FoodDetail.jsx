import React from 'react';
import PropTypes from 'prop-types';

function FoodDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedFood.foodName} servings of applies {props.selectedFood.servings}</h1>
      <p>Added {props.selectedFood.formattedWaitTime} ago, eat within {props.selectedFood.shelfLife} days</p>
      <p>{props.selectedFood.notes}</p>
      <hr/>
    </div>
  );
}

FoodDetail.propTypes = {
  selectedFood: PropTypes.object
};

export default FoodDetail;
