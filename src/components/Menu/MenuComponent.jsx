import React from 'react';
import { Link } from 'react-router-dom'

const MenuComponent = (props) => {
  return (
    <Link to={`/post/${props.post.id}`}>{props.post.theme}</Link>
  );
}

export default MenuComponent;