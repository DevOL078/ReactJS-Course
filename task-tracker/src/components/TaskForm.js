import React from 'react';
import './../assets/TaskForm.css'

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
		console.log(this.state);
	}

	onSubmit() {
		this.props.saveTask(this.state);
	}

	render() {

		return (
			<div>
		        <label htmlFor="name" className="input-label">Название</label>
	          	<input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
		        <br />
		        <label htmlFor="desc" className="input-label">Описание</label>
	          	<input id="desc" type="text" value={this.state.desc} onChange={this.handleChange} />
		        <br />
		        <label htmlFor="priority" className="input-label">Приоритет</label>
	          	<input id="priority" type="number" value={this.state.priority} onChange={this.handleChange} />
		        <br />
		        <button className="button" onClick={this.onSubmit}>Сохранить</button>
	        </div>

		);

	}

}