import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
import button from '@material-ui/core/Button';


const { c } = constants;

function NewFoodForm(props) {
  let _foodName = null;
  let _servings = null;
  let _notes = null;
  let _shelfLife = null;
  const formStyle = {
    width: '40%',
    display: 'inline-block',
    padding: '1px',
    verticalAlign: 'top',
    overflow: 'auto'
  };
  const inputStyle = {
    width: '100%',
    padding: '5px 12px',
    margin: '4px 0',
    boxSizing: 'border-box'
  };

  function handleNewFoodFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_FOOD,
      id: v4(),
      foodName: _foodName.value,
      servings: parseInt(_servings.value),
      notes: _notes.value,
      shelfLife: parseInt(_shelfLife.value),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _foodName.value = '';
    _servings.value = '';
    _notes.value = '';
    _shelfLife.value = '';
  }

  return (
    <div style={formStyle}>
      <form onSubmit={handleNewFoodFormSubmission}>
        <input
          style={inputStyle}
          type='text'
          id='foodName'
          placeholder='Enter the Food'
          ref={(input) => { _foodName = input; }} /><br />
        <input
          style={inputStyle}
          type='number'
          id='servings'
          placeholder='Enter number of servings'
          ref={(input) => { _servings = input; }} /><br />
        <input
          style={inputStyle}
          type='number'
          id='shelfLife'
          placeholder='Enter shelf life in days'
          ref={(input) => { _shelfLife = input; }} /><br />
        <textarea
          style={inputStyle}
          id='notes'
          placeholder='Notes'
          ref={(textarea) => { _notes = textarea; }} /><br />
        <button type='submit'>Add</button>
        <button variant="contained" color="primary">
          Material Button
        </button>
      </form>
    </div>
  );
}

export default connect()(NewFoodForm);
