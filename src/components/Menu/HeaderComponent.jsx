import React from 'react';
import { Link } from 'react-router-dom'

const HeaderComponent = (props) => {
  return (
    <div id="headerId" className="box header">
    <h1><Link to="/">Krop Blog</Link></h1>
    </div>
  );
}

export default HeaderComponent;