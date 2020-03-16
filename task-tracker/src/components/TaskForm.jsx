import React from 'react';
import { connect } from "react-redux";

import classnames from 'classnames/bind';
import styles from './../assets/scss/TaskForm.module.scss';

import { saveTask, setTaskFormVisibility } from "../actions";
import Task from '../domain/Task';

const cx = classnames.bind(styles);

const mapStateToProps = state => ({
	editableTask: state.editableTask,
	theme: state.theme
});

const mapDispatchToProps = dispatch => ({
	saveTask: (task) => dispatch(saveTask(task)),
	closeForm: () => dispatch(setTaskFormVisibility(false))
});

class TaskForm extends React.Component {

	constructor(props) {
		super(props);
		if(props.editableTask) {
			this.state = {
				id: props.editableTask.id ? props.editableTask.id : null,
				name: props.editableTask.name ? props.editableTask.name : '',
				desc: props.editableTask.desc ? props.editableTask.desc : '',
				priority: props.editableTask.priority ? props.editableTask.priority: ''
			}
		} else {
			this.state = {
				id: null,
				name: '',
				desc: '',
				priority: ''
			}
		}
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.id;
		const value = event.target.value;

		this.setState({
			[name]: value
		})
	}

	onSubmit() {
		this.props.saveTask(new Task(this.state));
		this.setState({
			id: null,
			name: '',
			desc: '',
			priority: ''
		});
		this.props.closeForm();
	}

	render() {

		return (
			<div>
				<label htmlFor="name" 
					className={cx('input-label', {[`input-label-theme-${this.props.theme}`]: true})}
				>
					Название
				</label>
				<input id="name" 
					type="text" 
					value={this.state.name} 
					onChange={this.handleChange} 
					className={cx('input', {[`input-theme-${this.props.theme}`]: true})}
				/>
		        <br />
				<label htmlFor="desc" 
					className={cx('input-label', {[`input-label-theme-${this.props.theme}`]: true})}
				>
					Описание
				</label>
				<input id="desc" 
					type="text" 
					value={this.state.desc} 
					onChange={this.handleChange} 
					className={cx('input', {[`input-theme-${this.props.theme}`]: true})}
					/>
		        <br />
				<label htmlFor="priority" 
					className={cx('input-label', {[`input-label-theme-${this.props.theme}`]: true})}
				>
					Приоритет
				</label>
				<input id="priority" 
					type="number" 
					value={this.state.priority}
					onChange={this.handleChange}
					className={cx('input', {[`input-theme-${this.props.theme}`]: true})}
				/>
		        <br />
		        <button className={cx('button', {[`button-theme-${this.props.theme}`]: true})} onClick={this.onSubmit}>Сохранить</button>
	        </div>

		);

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
