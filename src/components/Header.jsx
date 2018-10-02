import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  const navStyle = {
    fontFamily: 'sans-serif',
    padding: '10px',
    verticalAlign: 'top',
    backgroundColor: '#CCC'
  };

  return (
    <div style={navStyle}>
      <h1>Pantry Items</h1>
      <Link to="/">Home</Link> | <Link to="/admin">Item Detail</Link>
    </div>
  );
}

export default Header;

{/* <Link to="/newfood">Enter New Food Item</Link> */}