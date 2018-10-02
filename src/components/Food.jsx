import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Food(props){

  let divStyle = {
    border: '3px solid grey',
    width: '25%',
    display: 'inline-block',
    margin: '1.5%',
    padding: '10px',
    verticalAlign: 'top',
    height: '40%',
    WebkitBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    MozBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    boxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    backgroundColor: '#CCC',
    overflow: 'auto'
};

  function handleSavingSelectedFood(foodId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_FOOD,
      foodId: foodId
    };
    dispatch(action);
  }

  const foodInformation =
    <div style={divStyle}>
      <h3>{props.foodName}</h3>
      <p>{props.servings} servings. Bought {props.formattedWaitTime} ago.</p>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedFood(props.foodId);}}>
        {foodInformation}
      </div>
    );
  } else {
    return (
      <div>
        {foodInformation}
      </div>
    );
  }
}

Food.propTypes = {
  foodName: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  notes: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  foodId: PropTypes.string.isRequired
};

export default connect()(Food);
