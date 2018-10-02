import selectedFoodReducer from './selected-food-reducer';
import foodListReducer from './food-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedFood: selectedFoodReducer,
  masterFoodList: foodListReducer
});

export default rootReducer;
