import React from 'react';
import classnames from "classnames/bind";
import styles from './../assets/scss/TaskList.module.scss';
import TaskTable from './TaskTable';
import { SORT_TYPE } from '../utils/Constants.js';

const cx = classnames.bind(styles);

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
				{/* <div className={cx('spacer')}></div> */}
				<div className={cx('row')}>
					<button className={cx('button', {[`button-theme-${this.props.theme}`]: true})} 
						onClick={() => this.changeSortType(SORT_TYPE.NAME)}>
						Сортировать по названию
					</button>
					<button className={cx('button', {[`button-theme-${this.props.theme}`]: true})} 
						onClick={() => this.changeSortType(SORT_TYPE.PRIORITY)}>
						Сортировать по приоритету
					</button>
					<button className={cx('button', {[`button-theme-${this.props.theme}`]: true})} 
						onClick={this.props.openForm}>
						Создать
					</button>
				</div>			
				<TaskTable items={this.props.tasks} sortType={this.state.sortType} theme={this.props.theme}/>
			</div>
		);
	}

}