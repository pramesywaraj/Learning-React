import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// import Radium, { StyleRoot } from 'radium';

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
    const buttonStyle = {
      backgroundColor: '#007BFF',
      font: 'inherit',
      color: 'white',
      border: '1px solid #007BFF',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: '#0069D9',    //Pake Radium
      //   color: 'white'
      // }
    };

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() =>
                this.deletePersonHandler(index)
              } 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
          })}
        </div>
      );
      buttonStyle.backgroundColor = '#FFC107';
      buttonStyle.border = '1px solid #FFC107 ';
      // buttonStyle[':hover'] = {
      //   backgroundColor: '#E0A800',     //Pake radium
      //   color: 'black',
      // }
    }
    
    let emptyAlert = [];
    let listCondition = ['Tenang KITA disini.'];
    if( this.state.persons.length <=2 ) {
      listCondition.pop();
      emptyAlert.push('alert');
      listCondition.push('List dibawah 2, harap tenang.');
    }
    
    if( this.state.persons.length <= 1)
    {
      emptyAlert.push('danger');
      listCondition.pop();
      listCondition.push('Bahaya list telah kosong!');
    }

    return (
      // <StyleRott>  // Pake Radium
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className={emptyAlert.join(' ')}>
              {listCondition}
            </p>
          </header>
          <div className="App-body">
            <button
              style={buttonStyle} 
              onClick={() => this.togglePersonsHandler()}>Ganti Nama
            </button>
            {/* persons disini adalah variable */}
            {persons}
          </div>
        </div>
      // </StyleRott>
      
    );
  }
}

// export default Radium(App);
export default App;

//Radium high order component, kalo ada yang kaya diatas bisa juga memakai fitur2nya
