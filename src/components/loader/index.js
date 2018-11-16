import React, { Suspense } from 'react';

export default function Loader({ msg = 'Loading...' }) {
  return <p>{msg}</p>;
}

export const withLoader = (Component, opts = {}) => props => (
  <Suspense fallback={<Loader msg={opts.msg} />}>
    <Component {...props} />
  </Suspense>
);
