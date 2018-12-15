import React, { Component } from 'react';
import appStyle from './App.css';

import Persons from '../components/Persons';
import Header from '../components/Header/Header';
import Cockpit from '../components/Cockpit/Cockpit';


// import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id:'a1', name: 'Agus', age: 29 },
      { id:'a2', name: 'Abdul', age: 25 },
      { id:'a3', name: 'Mantol', age: 30 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const man = {
      ...this.state.persons[personIndex]
    };

    // Bisa juga pake yang dibawah ini
    // const man = Object.assign({}, this.state.persons[personIndex]);
    
    man.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = man;  //update the person attribute
    
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const man = this.state.persons; bad practice karena dapat mengubah state asli
    // Agar tidak bisa namah experience untuk mengupdate data
    // Masukkan dulu ke dalam variabel dengan menggunakan spread operator ...
    
    const man = [...this.state.persons];
    man.splice(personIndex, 1);
    this.setState({persons: man});
  }
  
  render() {

    let persons = null;
    let buttonClass = '';

    if( this.state.showPersons ) {
      persons =
        <div>
          <ErrorBoundary>
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>
          </ErrorBoundary>
        </div>;
    }

    return (
        <div className={appStyle.App}>
          <Header 
            persons={this.state.persons} />
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

// export default Radium(App);
export default App;

//Radium high order component, kalo ada yang kaya diatas bisa juga memakai fitur2nya
