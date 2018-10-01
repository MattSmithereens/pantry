import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Food(props){

  const divStyle = {
    fontFamily: "sans-serif",
    border: "1px solid grey",
    width: "50%",
    margin: "1.25%",
    padding: "3px",
    verticalAlign: "top",
    overflow: "auto"
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
      <h3>{props.servings} - {props.foodName}</h3>
      <h4>{props.formattedWaitTime}</h4>
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
