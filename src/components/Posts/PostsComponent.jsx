 
import React from 'react';
import { Link } from 'react-router-dom'

const PostsComponent = (props) => {
  return (
    <section>
      <h2 className="inline"><Link to={`/post/${props.post.id}`}>{props.post.theme}</Link></h2>
      <span className="inline">at 11/06/1992</span>
      <Link id="myBtn" role="button" className="fas fa-trash-alt inline" to={`/deletepost/${props.post.id}`}></Link>
      <Link id="myBtn2" role="button" className="fas fa-plus-square inline" to={`/updatepost/${props.post.id}`}></Link>
      <p>{props.post.description}</p>
    </section>
  );
}

export default PostsComponent;