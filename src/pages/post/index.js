import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { path, prop } from 'ramda';
import { Link } from 'react-router-dom';

import { mapDispatchToProps } from '../../store/actions/call-api';
import { selectMeta, selectEntity } from '../../store/selectors';

import CommentsList from '../../components/comments-list';
import Loader from '../../components/loader';
import mapState from '../../utils/map-state';

import PostCommentsProvider from '../../providers/post-comments';

import classNames from './styles.module.css';

const extractId = path(['match', 'params', 'id']);

function Post(post) {
  if (!post) return null;

  return (
    <div className={classNames.post}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

function PostPage({ callAPI, meta, post, ...props }) {
  const postId = extractId(props);

  useEffect(
    () => {
      callAPI('post', { id: postId });
    },
    [postId]
  );

  return (
    <div className="page">
      <Link to="/" className={classNames.back}>
        ← Back
      </Link>

      {!!meta.error && <p>Error: {meta.error.status}</p>}
      {meta.fetching && !post && <Loader />}
      <Post {...post} />
      <PostCommentsProvider postId={postId} render={CommentsList} />
    </div>
  );
}

export default connect(
  (_, props) => {
    const id = extractId(props);
    return mapState({
      post: selectEntity({ entity: 'post', id }),
      meta: selectMeta('post', { id }),
    });
  },
  mapDispatchToProps
)(PostPage);
