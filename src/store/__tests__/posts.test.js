import axios from 'axios';

import callAPI from '../actions/call-api';
import {
  selectCollection,
  selectMeta,
  selectExpandedCollection,
} from '../selectors';

import post from '../../__stubs__/post';
import generate from '../../__stubs__/generator';
import createStore from '..';

const posts = generate(post, 5);

const selectPosts = selectCollection('posts');
const selectPostsMeta = selectMeta('posts');
const selectExpandedPosts = selectExpandedCollection('posts');

jest.mock('axios');

describe('posts success test', () => {
  return [generate(post, 0), generate(post, 1), posts].forEach(
    (data, index) => {
      it(`test case ${index + 1}`, async () => {
        const { getState, dispatch } = createStore('');

        axios.mockResolvedValue({ data });

        expect(selectPostsMeta(getState())).toEqual({
          fetching: false,
          fetched: null,
          error: null,
        });
        expect(selectPosts(getState())).toEqual([]);

        const result = await dispatch(callAPI('posts'));

        expect(selectPostsMeta(getState())).toEqual({
          fetching: false,
          fetched: true,
          error: null,
        });

        expect(result).toEqual(data);
        expect(selectPosts(getState())).toEqual(
          data.map(({ id }) => ({
            id,
            entity: 'post',
          }))
        );
        expect(selectExpandedPosts(getState())).toEqual(data);
      });
    }
  );
});

it('posts failure test', async () => {
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

  dispatch(callAPI('posts')).catch(e => {
    expect(e).toEqual(error);

    expect(selectPostsMeta(getState())).toEqual({
      fetching: false,
      fetched: true,
      error,
    });
  });
});
