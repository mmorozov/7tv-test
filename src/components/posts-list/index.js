import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostsList({ posts, limit = 5 }) {
  const [offset, setOffset] = useState(limit);

  const handleShowMore = () => setOffset(prevOffset => prevOffset + limit);

  return (
    <React.Fragment>
      {posts.slice(0, offset).map(post => (
        <React.Fragment key={post.id}>
          <h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>

          <p>{post.body}</p>
          <hr />
        </React.Fragment>
      ))}
      {offset < posts.length && (
        <button onClick={handleShowMore}>
          <b>Show more</b>
        </button>
      )}
    </React.Fragment>
  );
}
