import React from 'react';
import Food from './Food';
import PropTypes from 'prop-types';

function FoodList(props){

  const foodListStyle = {
    height: '100%',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={foodListStyle}>
      {Object.keys(props.foodList).map(function(foodId) {
        var food = props.foodList[foodId];
        return <Food foodName={food.foodName}
          servings={food.servings}
          notes={food.notes}
          shelfLife={food.shelfLife}
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
