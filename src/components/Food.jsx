import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function Food(props){

  let divStyle = {
    border: '1px solid grey',
    width: '100%',
    display: 'inline-block',
    margin: '1.5%',
    padding: '3px',
    verticalAlign: 'top',
    height: '20%',
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
    <div>
      <h3>{props.foodName}</h3>
      <p>{props.servings} servings<br />
      Bought {props.formattedWaitTime} ago.<br />
      Eat within {props.shelfLife} day(s)</p>
    </div>;
 // if (props.currentRouterPath === '/admin'){
    return (
      <div style={divStyle} onClick={() => {handleSavingSelectedFood(props.foodId);}}>
        {foodInformation}
      </div>
    );
  // } else {
  //   return (
  //     <div>
  //       {foodInformation}
  //     </div>
  //   );
  // }
  }

Food.propTypes = {
  foodName: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  notes: PropTypes.string,
  shelfLife: PropTypes.number.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  foodId: PropTypes.string.isRequired
};

export default connect()(Food);
