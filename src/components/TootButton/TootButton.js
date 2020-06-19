import React from 'react';

export default function TootButton(props){
  const { onClick } = props;

  return (
    <button className="btn" onClick={onClick}>Toot</button>
  );
}
