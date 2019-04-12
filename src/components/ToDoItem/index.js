import React, { Component } from 'react'

export default class ToDoItem extends Component {
    static defaultProps = {
        done: false
    }
    state = {
        text: this.props.text,
        done: this.props.done
    }

    toggleDone = () => {
        const { done, text } = this.state
        let tmpText = text;
        this.setState({
            done: !done,
            text: tmpText
        })
    }

    render() {
        const {
            text
        } = this.state
        return (
            <div>
                <li
                onClick = { this.toggleDone }
                className = {this.state.done ? 'doneTodo' : ''}>
                    { text }
                </li>
                { /* <button>delete</button> */ }
            </div>
        )
    }
}