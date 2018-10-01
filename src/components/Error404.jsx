import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){

  const divStyle = {
    fontFamily: "sans-serif",
    border: "1px solid grey",
    width: "50%",
    margin: "1.25%",
    padding: "10px",
    verticalAlign: "top",
    overflow: "auto"
  };

  return (
    <div style={divStyle}>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
