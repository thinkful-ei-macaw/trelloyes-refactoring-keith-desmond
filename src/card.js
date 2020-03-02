import React from 'react';

function Card(props) {
  return (
    <li className='card'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </li>
  )
}

export default
  Card