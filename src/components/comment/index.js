import React from 'react';

export default function Comment({ id, email, body }) {
  return (
    <React.Fragment key={id}>
      <p>
        <b>{email}</b>
      </p>
      <p>{body}</p>
    </React.Fragment>
  );
}
