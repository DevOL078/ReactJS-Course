import React from 'react';
import './../assets/TaskList.css';
import TaskTable from './TaskTable';
import TaskFrom from './TaskForm';
import { SORT_TYPE } from './../utils/Constants.js'

export default class TaskList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					id : 1,
					name: 'fwfwef33',
					desc: 'TestTest',
					priority: 1
				},
				{
					id : 2,
					name: 'aas2g',
					desc: 'TestTest2',
					priority: 2
				},
				{
					id : 3,
					name: 'f3ggh',
					desc: 'TestTest3',
					priority: 3
				}
			],
			newTask: null,
			sortType: SORT_TYPE.DEFAULT
		};
		this.createNewTask = this.createNewTask.bind(this);
		this.saveNewTask = this.saveNewTask.bind(this);
		this.changeSortType = this.changeSortType.bind(this);
	}

	createNewTask() {
		this.setState({
			newTask: true
		});
	}

	saveNewTask(task) {
		var newTask = {
			id: this.state.tasks.length + 1,
			name: task.name,
			desc: task.desc,
			priority: task.priority
		}
		var newTasks = [...this.state.tasks];
		newTasks.push(newTask);
		this.setState({
			tasks: newTasks,
			newTask: null
		});
		console.log(this.state.tasks);
	}

	changeSortType(type) {
		this.setState({
			sortType: type
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col">
					<TaskTable items={this.state.tasks} sortType={this.state.sortType} />
					<div className="spacer"></div>
					<div className="row">
						<button className="button" onClick={this.createNewTask}>
							Создать
						</button>
						<button className="button" onClick={() => this.changeSortType(SORT_TYPE.NAME)}>
							Сортировать по названию
						</button>
						<button className="button" onClick={() => this.changeSortType(SORT_TYPE.PRIORITY)}>
							Сортировать по приоритету
						</button>
					</div>
				</div>
				
				{ !!this.state.newTask &&
					<div className="col">
						<TaskFrom saveTask={this.saveNewTask}/>
					</div>
				}
			</div>
		);
	}

	
}