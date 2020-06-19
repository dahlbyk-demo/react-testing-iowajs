import React from 'react';

export default function TootButton(props){
  const { onClick } = props;

  return (
    <button className="btn btn-primary" onClick={onClick}>Toot</button>
  );
}
