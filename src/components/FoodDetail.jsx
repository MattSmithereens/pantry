import React from 'react';
import PropTypes from 'prop-types';

function FoodDetail(props){


  let divStyle = {
    border: '1px solid grey',
    width: '100%',
    display: 'inline-block',
    margin: '1.5%',
    padding: '3px',
    verticalAlign: 'top',
    //height: '100%',
    backgroundColor: '#EEE',
    overflow: 'auto'
};

  return (
    <div style={divStyle}>
      <h1>{props.selectedFood.foodName} servings of {props.selectedFood.servings}</h1>
      <p>Added {props.selectedFood.formattedWaitTime} ago, eat within {props.selectedFood.shelfLife} days</p>
      <p>{props.selectedFood.notes}</p>
      <button>Edit</button>&nbsp;<button>Move to Shopping List</button>&nbsp;<button>Delete</button>
    </div>
  );
}

FoodDetail.propTypes = {
  selectedFood: PropTypes.object
};

export default FoodDetail;
