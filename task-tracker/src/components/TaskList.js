import React from 'react';
import './../assets/TaskList.css';
import TaskTable from './TaskTable';
import { SORT_TYPE } from './../utils/Constants.js'

export default class TaskList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortType: SORT_TYPE.NAME
		}

		this.changeSortType = this.changeSortType.bind(this);
	}

	changeSortType(type) {
		this.setState({
			sortType: type
		});
	}

	render() {
		return (
			<div>
				<TaskTable items={this.props.tasks} sortType={this.state.sortType} />
				<div className="spacer"></div>
				<div className="row">
					<button className="button" onClick={this.props.openForm}>
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
		);
	}

	
}