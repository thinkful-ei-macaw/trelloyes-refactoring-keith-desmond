import React from 'react';
import Card from './card';

function List(props) {
  return <section classname-list="true">
    <header>{props.header}</header>

    <div className='List-cards'>
      <ul> {props.cards.map((card) => {
        return <Card
          key={card.id}
          title={card.title}
          content={card.content} />
      })}</ul>



    </div>
  </section>
};

export default List
