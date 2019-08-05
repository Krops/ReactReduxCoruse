import React from 'react';
import { Link } from 'react-router-dom'

const PostComponent = (props) => {
  //props.retrievePost(props.match.params.id);
  console.log(props)
  return (
    <section>
      <h2 className="inline"></h2>
      <span className="inline">at 11/06/1992</span>
      <Link id="myBtn" role="button" className="fas fa-trash-alt inline" to={`/deletepost/${props.match.params.postId}`}></Link>
      <Link id="myBtn2" role="button" className="fas fa-plus-square inline" to={`/updatepost/${props.match.params.postId}`}></Link>
      <p>{props.match.params.description}</p>
    </section>
  );
}

export default PostComponent;