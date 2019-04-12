import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateDraft = event => {
        this.setState({
            draft: event.target.value
        })
    }

    updateList = () => {
        const { tasks, draft } = this.state
        if (draft) {
            const list = tasks
            list.push({ text: draft })
            this.setState({
                tasks: list,
                draft: ''
            })
        }
    }

    render() {
        const { title } = this.props
        const { tasks, draft } = this.state
        return (
            <div>
                <h1>{ title}</h1>
                <div>
                    <ul>
                        { tasks.map(task => <ToDoItem text = { task.text } done = { task.done } />)}
                    </ul>
                </div>
                <input type = 'text' onChange = { this.updateDraft } value = { draft }/>
                <button onClick = { this.updateList}>Add</button>
            </div>
        )
    }
}

export default ToDoList