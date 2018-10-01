import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
const { c } = constants;

function NewFoodForm(props){
  let _food = null;
  let _servings = null;
  let _notes = null;

  function handleNewFoodFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_FOOD,
      id: v4(),
      food: _food.value,
      servings: _servings.value,
      notes: _notes.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _food.value = '';
    _servings.value = '';
    _notes.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewFoodFormSubmission}>
        <input
          type='text'
          id='food'
          placeholder='Food Item'
          ref={(input) => {_food = input;}}/><br />
        <input
          type='text'
          id='servings'
          placeholder='Servings'
          ref={(input) => {_servings = input;}}/><br />
        <textarea
          id='notes'
          placeholder='Notes'
          ref={(textarea) => {_notes = textarea;}}/><br />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default connect()(NewFoodForm);
