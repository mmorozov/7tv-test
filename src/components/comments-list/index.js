import React from 'react';
import Comment from '../comment';

import Loader from '../loader';

export default function CommentsList({ comments, meta = {} }) {
  return (
    <React.Fragment>
      <h3>Comments</h3>

      {!!meta.error && <p>Error: {meta.error.status}</p>}
      {meta.fetching && !comments.length && <Loader />}
      {meta.fetched && !comments.length && <p>No comments</p>}

      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </React.Fragment>
  );
}
