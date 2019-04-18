import React, { Component } from 'react'
import ToDoItem from '../../components/ToDoItem'
import NewTodoForm from '../../components/NewTodoForm'

export default class ToDoList extends Component {

    static defaultProps = {
        tasks: [
            { text: 'Write neural network' },
            { text: 'Make map in illustrator', done: true },
            { text: 'Date with Ola', done: true },
            { text: 'Read newspaper' }
        ],
        title: 'My todo list'
    }

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
                <h1>{ title }</h1>
                <ul>
                    { tasks.map(task =>
                        <ToDoItem
                            text = { task.text }
                            done = { task.done }
                        />
                    )}
                </ul>
                < NewTodoForm
                    onSubmit = {this.updateList}
                    onChange = {this.updateDraft}
                    draft = {draft}
                />

            </div>
        )
    }
}