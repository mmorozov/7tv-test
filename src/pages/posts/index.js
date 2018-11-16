import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { mapDispatchToProps } from '../../store/actions/call-api';

import mapState from '../../utils/map-state';
import { selectMeta, selectExpandedCollection } from '../../store/selectors';
import Loader from '../../components/loader';
import PostsList from '../../components/posts-list';

function PostsPage({ callAPI, meta, posts }) {
  useEffect(() => {
    callAPI('posts');
  }, []);

  return (
    <div className="page">
      <h1>Posts</h1>

      {meta.fetching && <Loader msg={'Fetching posts'} />}
      {!!meta.error && <p>Error: {meta.error.status}</p>}
      {meta.fetched && <PostsList posts={posts} />}
    </div>
  );
}

export default connect(
  mapState({
    posts: selectExpandedCollection('posts'),
    meta: selectMeta('posts'),
  }),
  mapDispatchToProps
)(PostsPage);
