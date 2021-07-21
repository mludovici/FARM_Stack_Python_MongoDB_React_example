import axios from 'axios'
import React from 'react'

function TodoItem(props) {
	return (
		<div>
			<p>
				<span style={{ fontWeight: 'bold, underline' }}>
					{props.todo.title} :{' '}
				</span>{' '}
				{props.todo.description}
				<button
					onClick={() => props.deleteTodoHandler(props.todo.title)}
					className='btn btn-outline-danger my-2 mx-2'
					style={{ borderRadius: '50px' }}
				>
					X
				</button>
			</p>
			<hr></hr>
		</div>
	)
}

export default TodoItem
