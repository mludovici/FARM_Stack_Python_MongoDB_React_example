import TodoItem from './Todo'
import React from 'react'

function TodoView(props) {
	let todoList = props.todoList ? props.todoList : []
	let deleteTodoHandlerPassed = props.deleteTodoHandler
	console.log(typeof todoList)
	return (
		<div>
			<ul>
				{todoList.length ? (
					todoList.map((todo, index) => (
						<TodoItem
							deleteTodoHandler={deleteTodoHandlerPassed}
							key={index}
							todo={todo}
						/>
					))
				) : (
					<div>No items available yet!</div>
				)}
			</ul>
		</div>
	)
}

export default React.memo(TodoView)
