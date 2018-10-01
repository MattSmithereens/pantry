import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Food(props){

  function handleSavingSelectedFood(foodId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_FOOD,
      foodId: foodId
    };
    dispatch(action);
  }

  const foodInformation =
    <div>
      <h3>{props.servings} - {props.foodName}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
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
  servings: PropTypes.string.isRequired, //change to int
  notes: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  foodId: PropTypes.string.isRequired
};

export default connect()(Food);
