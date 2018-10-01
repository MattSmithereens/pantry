import React from 'react';
import PropTypes from 'prop-types';

function FoodDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedFood.foodName} - {props.selectedFood.servings}</h1>
      <h2>Added {props.selectedFood.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedFood.notes}</em></h4>
      <hr/>
    </div>
  );
}

FoodDetail.propTypes = {
  selectedFood: PropTypes.object
};

export default FoodDetail;
