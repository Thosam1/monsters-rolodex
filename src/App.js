import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [], // an array of objects

      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users } ))
  }

  onSearchChange = (event) => {
    this.setState( { searchField: event.target.value })
  }

  render(){

    const { monsters, searchField } = this.state; // destructuring
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
  

    return (
      <div className="App">

        <h1> Monster Rolodex </h1>

        <SearchBox
          placeholder='Search Monster'
          onSearchChange={this.onSearchChange}
        />
        
       
        <CardList monsters={ filteredMonsters } />
        
      </div>
    );
  }
}

export default App;
