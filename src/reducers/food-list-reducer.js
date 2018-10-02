/*eslint-disable */

import constants from "../constants";
const { c } = constants;

export default (state = {}, action) => {
  let newState;
  const {
    foodName,
    servings,
    notes,
    shelfLife,
    timeOpen,
    id,
    formattedWaitTime
  } = action;

  switch (action.type) {
    case c.ADD_FOOD:
      newState = Object.assign({}, state, {
        [id]: {
          foodName: foodName,
          servings: servings,
          notes: notes,
          shelfLife: shelfLife,
          timeOpen: timeOpen,
          id: id,
          formattedWaitTime: formattedWaitTime
        }
      });
      return newState;

    case c.UPDATE_TIME:
      const newFood = Object.assign({}, state[id], { formattedWaitTime });
      newState = Object.assign({}, state, {
        [id]: newFood
      });
      return newState;
    default:
      return state;
  }
};

/*eslint-enable */
