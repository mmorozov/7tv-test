import { prop, compose, filter, equals } from 'ramda';
import { selectExpandedCollection } from '.';

import toInt from '../../utils/to-int';

export const selectCommentsByPostId = id =>
  compose(
    filter(
      compose(
        equals(toInt(id)),
        prop('postId')
      )
    ),
    selectExpandedCollection('comments')
  );
