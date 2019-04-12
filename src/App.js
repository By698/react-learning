import React, { Component } from 'react';
import ToDoList from './components/ToDoList'
import './App.css';

class App extends Component {
  myTasks = [
    {text: 'Write neural network'},
    {text: 'Make map in illustrator'},
    {text: 'Date with Ola'}
  ]

  render() {
    return (
      <div>
        < ToDoList title = 'My list'
        tasks = { this.myTasks }
        />
      </div>
    );
  }
}

export default App;
