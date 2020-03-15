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
			isFormVisible: false,
			theme: 'strict'
		};
		this.openForm = this.openForm.bind(this);
		this.saveNewTask = this.saveNewTask.bind(this);
		this.toogleTheme = this.toogleTheme.bind(this);
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

	toogleTheme(event) {
		this.setState({
			theme: event.target.value
		});
	}

	render() {
		return (
			<div className={cx('container', {[`container-theme-${this.state.theme}`]: true})}>
				<div className={cx('row', 'row-start')}>
					<div className={cx('radios')}>
						<div className={cx('row', 'row-start')}>
							<input id="strict" 
								value="strict" 
								type="radio"
								checked={this.state.theme === "strict"}
								onChange={this.toogleTheme}
								/>
							<label className={cx('label', {[`label-theme-${this.state.theme}`]: true})} htmlFor="strict">
									Strict theme
							</label>
						</div>
						<div className={cx('row', 'row-start')}>
							<input id="fun" 
								value="fun" 
								type="radio"
								checked={this.state.theme === "fun"}
								onChange={this.toogleTheme}
								/>
							<label className={cx('label', {[`label-theme-${this.state.theme}`]: true})} htmlFor="fun">
									Fun theme
							</label>
						</div>
					</div>
					<div className={cx('app-title', {[`app-title-theme-${this.state.theme}`]: true})}>
						<p>Task Tracker</p>
					</div>
				</div>	
				<div className={cx('row')}>
					<div className={cx('col')}>
						<TaskList tasks={this.state.tasks} openForm={this.openForm} theme={this.state.theme}/>
					</div>
					{ this.state.isFormVisible &&
						<div className={cx('col')}>
							<TaskForm saveTask={this.saveNewTask} theme={this.state.theme}/>
						</div>
					}
				</div>
			</div>
		);
	}

}