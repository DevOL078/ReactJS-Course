import React from 'react';
import classnames from "classnames/bind";
import styles from './assets/scss/App.module.scss';

import Task from './domain/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const cx = classnames.bind(styles);

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
			<div className={cx('container')}>
				<p className={cx('app-title')}>Task Tracker</p>
				<div className={cx('row')}>
					<div className={cx('col')}>
						<TaskList tasks={this.state.tasks} openForm={this.openForm}/>
					</div>
					{ this.state.isFormVisible &&
						<div className={cx('col')}>
							<TaskForm saveTask={this.saveNewTask}/>
						</div>
					}
				</div>
			</div>
		);
	}

}