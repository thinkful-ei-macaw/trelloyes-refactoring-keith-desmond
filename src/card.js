import React from 'react';
import './card.css';

function Card(props) {
  return (
    <li className='card'>
    <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </li>
  )
}

export default
  Card