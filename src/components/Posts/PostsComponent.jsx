import React from 'react';
import { Link } from 'react-router-dom'

const PostsComponent = (props) => {
  return (
    <section>
      <h2 className="inline"><Link to={`/posts/${props.post.id}`}>{props.post.theme}</Link></h2>
      <span className="inline">at 11/06/1992</span>
      <a id="myBtn" type="button" className="fas fa-trash-alt inline" href="#/deletepost/${post.id}"></a>
      <p>{props.post.description}</p>
    </section>
  );
}

export default PostsComponent;