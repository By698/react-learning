import React, { Component } from 'react';
import './App.css';

class ToDoItem extends Component {
  state = {
    text: this.props.task.text,
    done: false
  }

  toggleDone = () => {
    const { done, text } = this.state
    let tmpText = text
    if (!done) tmpText = '|' + tmpText + '|'
    else tmpText = tmpText.slice(1,-1)
    this.setState({done: !done, text: tmpText})
  }

  render() {
    const {text} = this.state
    return (
      <div>
        <li onClick={this.toggleDone}>{text}</li>
        {/* <button>delete</button> */}
      </div>
    )
  }
}

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value })
  }

  updateList = () => {
    const { tasks, draft} = this.state
    if(draft){
      const list = tasks
      list.push(draft)
      this.setState({
        tasks: list,
        draft: ''
      })
    }

  }

  render() {
    const {title} = this.props
    const {tasks, draft} = this.state
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <ul>
            {tasks.map(task =><ToDoItem task={task} />)}
          </ul>
        </div>
        <input type='text' onChange={this.updateDraft} value={draft}/>
        <button onClick={this.updateList}>Add</button>
      </div>
    )
  }
}


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
