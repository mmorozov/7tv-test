import { pathOr, flip, compose, has } from 'ramda';
import { normalize, schema } from 'normalizr';

const post = new schema.Entity('post');
const user = new schema.Entity('user');
const comment = new schema.Entity('comment');

const normalizr = (entityName, schema) =>
  compose(
    normalized => {
      if (!normalized.result || !Array.isArray(normalized.result)) {
        return normalized;
      }

      normalized.result = normalized.result.map(id => ({
        id,
        entity: entityName,
      }));

      return normalized;
    },
    flip(normalize)(schema)
  );

export const RESOURCES_MAP = {
  posts: {
    url: '/posts',
    cache: true,
    transform: normalizr('post', [post]),
  },
  post: {
    url: '/posts/{id}',
    cache: (state, _, { id }) =>
      compose(
        has(id),
        pathOr({}, ['entities', 'post'])
      )(state),
    transform: normalizr('post', post),
  },
  user: {
    url: '/users/{id}',
    cache: true,
    transform: normalizr('user', user),
  },
  comments: {
    url: '/comments',
    cache: true,
    transform: normalizr('comment', [comment]),
  },
};

export default resource => pathOr(null, [resource], RESOURCES_MAP);
