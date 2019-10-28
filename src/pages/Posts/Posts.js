import React from "react";
import { Link, Route } from "react-router-dom";
import { Post } from "pages";

const Posts = ({ location, match }) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Post #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Post #2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>Post #3</Link>
        </li>
        <li>
          <Link to={`${match.url}/4`}>Post #4</Link>
        </li>
      </ul>
      <Route exact path={match.url} render={() => <h3>Please Select!</h3>} />
      <Route path={`${match.url}/:id`} component={Post} />
      <p>{`location.pathname : ${location.pathname}`}</p>
      <p>{`match.path: ${match.path}`}</p>
      <p>{`match.url: ${match.url}`}</p>
    </div>
  );
};

export default Posts;
