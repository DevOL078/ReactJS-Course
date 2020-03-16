import React from 'react';
import { connect } from "react-redux";

import classnames from "classnames/bind";
import styles from './../assets/scss/TaskTable.module.scss';

import { editTask, deleteTask, setTaskFormVisibility } from "../actions";

const cx = classnames.bind(styles);

const TableRow = (props) => {
	return (
		<tr>
			<td className={cx('table-field', {[`table-field-theme-${props.theme}`]: true})}>
				<button className={cx('button', {[`button-theme-${props.theme}`]: true})}
						onClick={() => props.editTask(props.item.id)}
				>
					Edit
				</button>
				<button className={cx('button', {[`button-theme-${props.theme}`]: true})}
						onClick={() => props.deleteTask(props.item.id)}				
				>
					Delete
				</button>
			</td>
			<td className={cx('table-field', {[`table-field-theme-${props.theme}`]: true})}>{props.item.name}</td>
			<td className={cx('table-field', {[`table-field-theme-${props.theme}`]: true})}>{props.item.desc}</td>
			<td className={cx('table-field', {[`table-field-theme-${props.theme}`]: true})}>{props.item.priority}</td>
		</tr>
	);
}

const TableBody = ({rows, theme, editTask, deleteTask}) => {
	let compRows = rows.map(row => 
		<TableRow key={row.id} item={row} theme={theme} editTask={editTask} deleteTask={deleteTask}/>);
	return (
		<tbody>
			{compRows}
		</tbody>
	);
}

const mapStateToProps = state => ({
	tasks: state.tasks,
	theme: state.theme
});

const mapDispatchToProps = dispatch => ({
	editTask: taskId => dispatch(editTask(taskId)),
	deleteTask: taskId => dispatch(deleteTask(taskId)),
	openForm: () => dispatch(setTaskFormVisibility(true))
});

const TaskTable = ({tasks, theme, editTask, deleteTask, openForm}) => {

	function editItem(itemId) {
		editTask(itemId);
		openForm();
	}

	function deleteItem(itemId) {
		deleteTask(itemId);
	}

	return(
		<table className={cx('table')}>
			<thead>
				<tr>
					<th className={cx('table-header', {[`table-header-theme-${theme}`]: true})}
						style={{ width: "10%" }}
					></th>
					<th className={cx('table-header', {[`table-header-theme-${theme}`]: true})} 
						style={{ width: "20%" }}
					>
						Название
					</th>
					<th className={cx('table-header', {[`table-header-theme-${theme}`]: true})} 
						style={{ width: "50%" }}
					>
						Описание
					</th>
					<th className={cx('table-header', {[`table-header-theme-${theme}`]: true})} 
						style={{ width: "20%" }}
					>
						Приоритет
					</th>
				</tr>
			</thead>
			<TableBody 
				rows={tasks} 
				theme={theme} 
				editTask={editItem} 
				deleteTask={deleteItem}
			/>
		</table>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);
