import { connect } from 'react-redux';
import { compose, countBy, prop, pathOr, values } from 'ramda';

import mapState from '../utils/map-state';

export default connect((_, props) =>
  mapState({
    count: compose(
      prop(props.id),
      countBy(prop('postId')),
      values,
      // Aggregate all comments in store
      pathOr({}, ['entities', 'comment'])
    ),
  })
);
