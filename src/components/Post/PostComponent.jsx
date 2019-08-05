import React from 'react';
import { Link } from 'react-router-dom'

const PostComponent = (props) => {
  return (
    <section>
      <h2 className="inline">{props.selectedPost.theme}</h2>
      <span className="inline">at 11/06/1992</span>
      <Link id="myBtn" role="button" className="fas fa-trash-alt inline" to={`/deletepost/${props.selectedPost.id}`}></Link>
      <Link id="myBtn2" role="button" className="fas fa-plus-square inline" to={`/updatepost/${props.selectedPost.id}`}></Link>
      <p>{props.selectedPost.description}</p>
    </section>
  );
}

export default PostComponent;