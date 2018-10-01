import React from 'react';
import Food from './Food';
import PropTypes from 'prop-types';

function FoodList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.foodList).map(function(foodId) {
        var food = props.foodList[foodId];
        return <Food names={food.names}
          location={food.location}
          issue={food.issue}
          formattedWaitTime={food.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={foodId}
          foodId={foodId} />;
      })}
    </div>
  );
}

FoodList.propTypes = {
  foodList: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default FoodList;
