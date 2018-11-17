import React from 'react';

export default function Author(author) {
  if (!author) return null;

  const { id, name, website } = author;

  return (
    <h4 key={id}>
      {name} ({website})
    </h4>
  );
}
