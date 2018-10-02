import React from 'react';
import PropTypes from 'prop-types';

function FoodDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedFood.foodName} - {props.selectedFood.servings}</h1>
      <p>Added {props.selectedFood.formattedWaitTime} ago, eat within {props.selectedFood.shelfLife} days</p>
      <p><em>{props.selectedFood.notes}</em></p>
      <hr/>
    </div>
  );
}

FoodDetail.propTypes = {
  selectedFood: PropTypes.object
};

export default FoodDetail;
