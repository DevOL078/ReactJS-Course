import React from 'react';
import classnames from "classnames/bind";
import styles from './../assets/scss/TaskTable.module.scss';
import { SORT_TYPE } from '../utils/Constants.js'

const cx = classnames.bind(styles);

const compare = (a,b) => {
	if(a > b) {
		return 1;
	} else if(a === b) {
		return 0;
	}
	return -1;
}

const sortItems = (items, sortType) => {
	switch(sortType) {
		case SORT_TYPE.DEFAULT: return items;
		case SORT_TYPE.NAME: return items.sort((a,b) => compare(a.name, b.name));
		case SORT_TYPE.PRIORITY: return items.sort((a,b) => compare(a.priority, b.priority));
		default: return [];
	}
}

const TableRow = (props) => {
	return (
		<tr>
			<td className={cx('table-field')}>{props.item.name}</td>
			<td className={cx('table-field')}>{props.item.desc}</td>
			<td className={cx('table-field')}>{props.item.priority}</td>
		</tr>
	);
}

const TableBody = (props) => {
	let items = sortItems(props.rows, props.sortType);
	let compRows = items.map(row => 
		<TableRow key={row.id} item={row}/>);
	return (
		<tbody>
			{compRows}
		</tbody>
	);
}

const TaskTable = (props) => {

	return(
		<table className={cx('table')}>
			<thead>
				<tr>
					<th className={cx('table-header')} style={{ width: "20%" }}>Название</th>
					<th className={cx('table-header')} style={{ width: "60%" }}>Описание</th>
					<th className={cx('table-header')} style={{ width: "20%" }}>Приоритет</th>
				</tr>
			</thead>
			<TableBody rows={props.items} sortType={props.sortType}/>
		</table>
	);
}

export default TaskTable;
