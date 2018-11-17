import { useEffect } from 'react';
import { connect } from 'react-redux';
import { path } from 'ramda';

import { selectMeta, selectEntity } from '../store/selectors';
import { mapDispatchToProps } from '../store/actions/call-api';

import mapState from '../utils/map-state';

const extractId = path(['id']);

function UserProvider({ id, callAPI, user, meta, render }) {
  useEffect(
    () => {
      if (!!id) {
        callAPI('user', { id: id });
      }
    },
    [id]
  );

  return render({ user, meta });
}

export default connect(
  (state, props) => {
    const id = extractId(props);

    return mapState({
      meta: selectMeta('user', { id }),
      user: selectEntity({ entity: 'user', id }),
    })(state);
  },
  mapDispatchToProps
)(UserProvider);
