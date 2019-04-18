import React from 'react'

const NewTodoForm = ({ onChange, onSubmit, draft }) => (
    <div>
        <input type='text' onChange={onChange} value={draft} />
        <button onClick={onSubmit}>Add</button>
    </div>
)

export default NewTodoForm