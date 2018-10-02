import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewFoodForm from './NewFoodForm';

class NewFoodControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    return (
      <div>
        <NewFoodForm />
      </div>
    );
  }
}

export default NewFoodControl;
