import React, { Component } from 'react';
import './App.css';

class ToDoList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          <ul>
            {this.props.tasks.map(task =><li>{ task }</li> )}
          </ul>
        </div>
      </div>
    )
  }
}


class App extends Component {
  myTasks = [
    'Write neural network',
    'Make map in illustrator',
    'Go date with Ola'
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
