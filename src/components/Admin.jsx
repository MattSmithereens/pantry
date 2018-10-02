import React from 'react';
import PropTypes from 'prop-types';
import FoodList from './FoodList';
import FoodDetail from './FoodDetail';
import { connect } from 'react-redux';

function Admin(props){
  const divStyle = {
    fontFamily: "sans-serif",
  };

  let optionalSelectedFoodContent = null;
  if (props.selectedFood.length > 0){
    optionalSelectedFoodContent =  <FoodDetail selectedFood={props.foodList[props.selectedFood]}/>;
  }
  return (
    <div style={divStyle}>
      <h2>Admin</h2>
      {optionalSelectedFoodContent}
      <FoodList
        foodList={props.foodList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  foodList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedFood: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedFood: state.selectedFood,
    foodList: state.masterFoodList
  };
};

export default connect(mapStateToProps)(Admin);
