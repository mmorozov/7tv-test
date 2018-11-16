import axios from 'axios';

import callAPI from '../actions/call-api';
import { selectEntity, selectMeta } from '../selectors';

import createPost from '../../__stubs__/post';
import createStore from '..';

const post = createPost();

const selectPost = selectEntity({ entity: 'post', id: post.id });
const selectPostMeta = selectMeta('post', { id: post.id });

jest.mock('axios');

it('post success test', async () => {
  const { getState, dispatch } = createStore('');

  axios.mockResolvedValue({ data: post });

  expect(selectPostMeta(getState())).toEqual({
    fetching: false,
    fetched: null,
    error: null,
  });
  expect(selectPost(getState())).toEqual(null);

  const result = await dispatch(callAPI('post', { id: post.id }));

  expect(selectPostMeta(getState())).toEqual({
    fetching: false,
    fetched: true,
    error: null,
  });

  expect(result).toEqual(post);
  expect(selectPost(getState())).toEqual(post);
});

it('post failure test', async () => {
  expect.hasAssertions();
  const { getState, dispatch } = createStore('');

  const error = {
    data: {},
    status: 404,
    statusText: '',
  };

  axios.mockRejectedValue({
    response: error,
  });

  dispatch(callAPI('post', { id: post.id })).catch(e => {
    expect(e).toEqual(error);

    expect(selectPostMeta(getState())).toEqual({
      fetching: false,
      fetched: true,
      error,
    });
  });
});
