import React from 'react';
import { Link } from 'react-router-dom';

import withCommentsCount from '../../providers/comments-count';

const CommentsCount = withCommentsCount(({ count = 0 }) => (
  <span>{count}</span>
));

export default function Post({ counter, ...post }) {
  return (
    <>
      <h3>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>

      <p>{post.body}</p>

      {counter && (
        <p>
          Comments:&nbsp;
          <CommentsCount id={post.id} />
        </p>
      )}
      <hr />
    </>
  );
}
