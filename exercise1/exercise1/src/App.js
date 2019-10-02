import React, { Component } from 'react';
import './App.css';
import Person from './components/Person'

class App extends Component {
  state = {
    personList: ["name1", "name2"],
    firstName: " ",
    lastName: " "
  }

  addPerson = (event) => {
    const personList = [...this.state.personList];
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const name = firstName + " " + lastName;
    personList.push(name);
    this.setState({personList: personList})
  }

  setFirstName = (firstName) => {
    this.setState({firstName: firstName})
  }

  setLastName = (lastName) => {
    this.setState({lastName: lastName})
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const persons = (
      <div>
        {this.state.personList.map((person, id) => {
          return <Person
          name={person}
          key={id} />
        })}
      </div>
    )


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is working </p>
        <input type="text" id="firstName" value={this.state.firstName} onChange={(event) => this.setFirstName(event.target.value)} />
        <input type="text" id="lastName" value={this.state.lastName} onChange={(event) => this.setLastName(event.target.value)} />
        <button style={style} onClick={this.addPerson}>Add</button>
        {persons}
      </div>
    );
  }

}


export default App;
