import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
const { c } = constants;

function NewFoodForm(props){
  let _foodName = null;
  let _servings = null;
  let _notes = null;

  function handleNewFoodFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_FOOD,
      id: v4(),
      foodName: _foodName.value,
      servings: _servings.value,
      notes: _notes.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _foodName.value = '';
    _servings.value = '';
    _notes.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewFoodFormSubmission}>
        <input
          type='text'
          id='foodName'
          placeholder='Food Item'
          ref={(input) => {_foodName = input;}}/><br />
        <input
          type='number'
          id='servings'
          placeholder='1'
          ref={(input) => {_servings = input;}}/><br />
        <textarea
          id='notes'
          placeholder='Notes'
          ref={(textarea) => {_notes = textarea;}}/><br />
        <input
          type='checkbox'
        /><br />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default connect()(NewFoodForm);
