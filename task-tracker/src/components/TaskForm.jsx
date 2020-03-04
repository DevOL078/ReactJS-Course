import React from 'react';
import classnames from 'classnames/bind';
import styles from './../assets/scss/TaskForm.module.scss';
import Task from '../domain/Task';

const cx = classnames.bind(styles);

export default class TaskForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			desc: '',
			priority: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.id;
		const value = event.target.value;

		console.log(name);
		this.setState({
			[name]: value
		})
	}

	onSubmit() {
		this.props.saveTask(new Task(this.state));
		this.setState({
			name: '',
			desc: '',
			priority: ''
		});
	}

	render() {

		return (
			<div>
		        <label htmlFor="name" className={cx('input-label')}>Название</label>
	          	<input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
		        <br />
		        <label htmlFor="desc" className={cx('input-label')}>Описание</label>
	          	<input id="desc" type="text" value={this.state.desc} onChange={this.handleChange} />
		        <br />
		        <label htmlFor="priority" className={cx('input-label')}>Приоритет</label>
	          	<input id="priority" type="number" value={this.state.priority} onChange={this.handleChange} />
		        <br />
		        <button className={cx('button')} onClick={this.onSubmit}>Сохранить</button>
	        </div>

		);

	}

}