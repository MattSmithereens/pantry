import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Pantry Items</h1>
      <Link to="/">Home</Link> | <Link to="/newfood">Enter New Food Item</Link> | <Link to="/admin">Item Detail</Link>
    </div>
  );
}

export default Header;
