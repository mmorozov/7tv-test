import { useEffect } from 'react';
import { connect } from 'react-redux';
import { path } from 'ramda';

import { selectMeta } from '../store/selectors';
import { selectCommentsByPostId } from '../store/selectors/comments';
import { mapDispatchToProps } from '../store/actions/call-api';

import mapState from '../utils/map-state';

const extractId = path(['postId']);

function PostCommentsProvider({ callAPI, comments, meta, render }) {
  useEffect(() => {
    callAPI('comments');
  }, []);

  return render({ comments, meta });
}

export default connect(
  (state, props) => {
    const id = extractId(props);

    return mapState({
      meta: selectMeta('comments'),
      comments: selectCommentsByPostId(id),
    })(state);
  },
  mapDispatchToProps
)(PostCommentsProvider);
