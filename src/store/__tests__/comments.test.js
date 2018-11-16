import axios from 'axios';

import callAPI from '../actions/call-api';
import {
  selectCollection,
  selectMeta,
  selectExpandedCollection,
} from '../selectors';

import comment from '../../__stubs__/comment';
import generate from '../../__stubs__/generator';
import createStore from '..';

const comments = generate(comment, 10);

const selectComments = selectCollection('comments');
const selectCommentsMeta = selectMeta('comments');
const selectExpandedComments = selectExpandedCollection('comments');

jest.mock('axios');

describe('comments success test', () => {
  return [generate(comment, 0), generate(comment, 1), comments].forEach(
    (data, index) => {
      it(`test case ${index + 1}`, async () => {
        const { getState, dispatch } = createStore('');

        axios.mockResolvedValue({ data });

        expect(selectCommentsMeta(getState())).toEqual({
          fetching: false,
          fetched: null,
          error: null,
        });
        expect(selectComments(getState())).toEqual([]);

        const result = await dispatch(callAPI('comments'));

        expect(selectCommentsMeta(getState())).toEqual({
          fetching: false,
          fetched: true,
          error: null,
        });

        expect(result).toEqual(data);
        expect(selectComments(getState())).toEqual(
          data.map(({ id }) => ({
            id,
            entity: 'comment',
          }))
        );
        expect(selectExpandedComments(getState())).toEqual(data);
      });
    }
  );
});

it('comments failure test', async () => {
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

  dispatch(callAPI('comments')).catch(e => {
    expect(e).toEqual(error);

    expect(selectCommentsMeta(getState())).toEqual({
      fetching: false,
      fetched: true,
      error,
    });
  });
});
