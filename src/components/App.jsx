import React from 'react';
import Header from './Header';
import FoodList from './FoodList';
import NewFoodForm from './NewFoodForm';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import Admin from './Admin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
const { c } = constants;
import rowStyle from '../constants/RowStyle';

class App extends React.Component {
  
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateFoodElapsedWaitTime(),
    60000
    );
  }
  
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  
  updateFoodElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterFoodList).map(foodId => {
      const food = this.props.masterFoodList[foodId];
      const newFormattedWaitTime = food.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: foodId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <div style={rowStyle}>
          <NewFoodForm />
          <Switch>
            <Route exact path='/old' render={()=><FoodList foodList={this.props.masterFoodList} />} />
            <Route path='/newfood' render={()=><NewFoodForm />} />
            <Route path='/' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  masterFoodList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterFoodList: state.masterFoodList
  };
};

export default withRouter(connect(mapStateToProps)(App));
