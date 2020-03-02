import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';

function App(props) {

  return (
    <main className='App'>
      <header className='Header'>
        <h1>PlaceHolder</h1>

      </header>
      <div className='App-list'>{props.store.lists.map(list => <List header={list.header}
        cards={list.cardIds.map(cardId => props.store.allCards[cardId])} key={list.id} />

      )}</div>
    </main>)
}

export default App;
