import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './components/TodoListView'

function App() {
	const [todoList, setTodoList] = useState([])
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')

	// Read all todos
	useEffect(() => {
		axios.get('http://localhost:8000/api/todo').then((res) => {
			console.log('data:', res.data)
			setTodoList(res.data)
		})
	}, [setTodoList])

	const deleteTodoHandler = (title) => {
		axios.delete(`http://localhost:8000/api/todo/${title}`).then((res) => {
			console.log(res.data)
			let newTodoList = todoList.filter((todo) => todo.title !== title)
			setTodoList(newTodoList)
		})
	}

	// Post a todo
	const addTodoHandler = () => {
		let copyTodo = [...todoList]
		let t = { title: title, description: desc }
		let newTodo = [...copyTodo, t]

		axios
			.post('http://localhost:8000/api/todo/', {
				title: title,
				description: desc,
			})
			.then((res) => {
				if (res.status === 200) {
					setTodoList(newTodo)
				}
			})
	}

	return (
		<div
			className='App list-group-item  justify-content-center align-items-center mx-auto'
			style={{
				width: '400px',
				backgroundColor: 'white',
				marginTop: '15px',
			}}
		>
			<h1
				className='card text-white bg-primary mb-1'
				styleName='max-width: 20rem;'
			>
				Task Manager
			</h1>
			<h6 className='card text-white bg-primary mb-3'>
				FASTAPI - React - MongoDB
			</h6>
			<div className='card-body'>
				<h5 className='card text-white bg-dark mb-3'>Add Your Task</h5>
				<span className='card-text'>
					<input
						className='mb-2 form-control titleIn'
						onChange={(event) => setTitle(event.target.value)}
						placeholder='Title'
					/>
					<input
						className='mb-2 form-control desIn'
						onChange={(event) => setDesc(event.target.value)}
						placeholder='Description'
					/>
					<button
						className='btn btn-outline-primary mx-2 mb-3'
						style={{ borderRadius: '50px', 'font-weight': 'bold' }}
						onClick={() => addTodoHandler()}
					>
						Add Task
					</button>
				</span>
				<h5 className='card text-white bg-dark mb-3'>Your Tasks</h5>
				<div>
					<TodoView
						deleteTodoHandler={deleteTodoHandler}
						todoList={todoList}
					/>
				</div>
			</div>
			<h6 className='card text-dark bg-warning py-1 mb-0'>
				Copyright 2021, All rights reserved &copy;
			</h6>
		</div>
	)
}

export default App
