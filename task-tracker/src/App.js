import React from 'react';
import './assets/App.css';

import Task from './domain/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				new Task({
					name: 'fwfwef33',
					desc: 'TestTest',
					priority: 1
				}),
				new Task({
					name: 'aas2g',
					desc: 'TestTest2',
					priority: 2
				}),
				new Task({
					name: 'f3ggh',
					desc: 'TestTest3',
					priority: 3
				})
			],
			isFormVisible: false
		};
		this.openForm = this.openForm.bind(this);
		this.saveNewTask = this.saveNewTask.bind(this);
	}

	saveNewTask(task) {
		if(task) {
			var newTasks = [task, ...this.state.tasks];
			this.setState({
				tasks: newTasks
			});
			console.log(this.state.tasks);
			this.setState({
				isFormVisible: false
			})
		}
	}

	openForm() {
		this.setState({
			isFormVisible: true
		});
	}

	render() {
		return (
			<div className="container">
				<p id="app-title">Task Tracker</p>
				<div className="row">
					<div className="col">
						<TaskList tasks={this.state.tasks} openForm={this.openForm}/>
					</div>
					{ this.state.isFormVisible &&
						<div className="col">
							<TaskForm saveTask={this.saveNewTask}/>
						</div>
					}
				</div>
			</div>
		);
	}

}