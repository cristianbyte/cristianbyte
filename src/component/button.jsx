import React from 'react';

export function Button ({ type ,text, action }) {
  return (
    <button className={type} onClick={action}>
      {text}
    </button>
  );
}