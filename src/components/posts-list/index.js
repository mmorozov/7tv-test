import React, { useState } from 'react';

import Post from '../mini-post';

export default function PostsList({ posts, counter = false, limit = 5 }) {
  const [offset, setOffset] = useState(limit);

  const handleShowMore = () => setOffset(prevOffset => prevOffset + limit);

  return (
    <React.Fragment>
      {posts.slice(0, offset).map(post => (
        <Post {...post} key={post.id} counter={counter} />
      ))}
      {offset < posts.length && (
        <button onClick={handleShowMore}>
          <b>Show more</b>
        </button>
      )}
    </React.Fragment>
  );
}
