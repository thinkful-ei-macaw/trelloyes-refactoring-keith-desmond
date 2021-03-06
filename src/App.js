import React, {Component} from 'react';
import List from './list';
import STORE from './store';



const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}




class App extends Component {
  state = {
    store: STORE
  };

  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddCard = (listId) => {
    const newCard = newRandomCard()
  
    const newStore = this.state.store
  
     newStore.lists.find(list => list.id === listId ).cardIds.push(newCard.id)
     newStore.allCards[newCard.id]=newCard
	// return {
  //         ...list,
  //         cardIds: [...list.cardIds, newCard.id]
  //       };
      
    
    
  
    this.setState({
    
      store: newStore
     
    })
    console.log(this.state.store.allCards)
  };

  render(){
    const{store}=this.state
  
  return (
    <main className='App'>
      <header className='Header'>
        <h1>Trelloyes!</h1>

      </header>
      <div className='App-list'>{store.lists.map(list => <List header={list.header}
        cards={list.cardIds.map(id =>store.allCards[id])} key={list.id}
        onClickDelete={this.handleDeleteCard} onClickAdd={()=>this.handleAddCard(list.id)} />

      )}</div>
    </main>);
}}

export default App;
