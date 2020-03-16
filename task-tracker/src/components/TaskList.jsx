import React from 'react';
import { connect } from "react-redux";

import classnames from "classnames/bind";
import styles from './../assets/scss/TaskList.module.scss';

import { newTask, sortByName, sortByPriority, setTaskFormVisibility } from "../actions";
import TaskTable from './TaskTable';

const cx = classnames.bind(styles);

const mapStateToProps = state => ({
	tasks: state.tasks,
	theme: state.theme
});

const mapDispatchToProps = dispatch => ({
	newTask: () => dispatch(newTask),
	openForm: () => dispatch(setTaskFormVisibility(true)),
	sortByName: () => dispatch(sortByName),
	sortByPriority: () => dispatch(sortByPriority),
});

const TaskList = ({tasks, theme, newTask, openForm, sortByName, sortByPriority}) => {

	function createNewTask() {
		newTask();
		openForm();
	}
	
	return (
		<div>
			<div className={cx('row')}>
				<button className={cx('button', {[`button-theme-${theme}`]: true})} 
					onClick={sortByName}>
					Сортировать по названию
				</button>
				<button className={cx('button', {[`button-theme-${theme}`]: true})} 
					onClick={sortByPriority}>
					Сортировать по приоритету
				</button>
				<button className={cx('button', {[`button-theme-${theme}`]: true})} 
					onClick={createNewTask}>
					Создать
				</button>
			</div>			
			<TaskTable items={tasks}/>
		</div>
	);

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);