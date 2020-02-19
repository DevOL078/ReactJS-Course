import React from 'react';
import './../assets/TaskTable.css'
import { SORT_TYPE } from './../utils/Constants.js'

const compare = (a,b) => {
	if(a > b) {
		return 1;
	} else if(a === b) {
		return 0;
	}
	return -1;
}

export default class TaskTable extends React.Component {

	constructor(props) {
		super(props);
		
		this.getItems = this.getItems.bind(this);
	}

	sortItems(items, type) {
		switch(type) {
			case SORT_TYPE.DEFAULT: return items;
			case SORT_TYPE.NAME: return items.sort((a,b) => compare(a.name, b.name));
			case SORT_TYPE.PRIORITY: return items.sort((a,b) => compare(a.priority, b.priority));
			default: return [];
		}
	}

	getItems() {
		var items = this.sortItems(this.props.items, this.props.sortType);

		return items.map((item) => 
			<tr key={item.id}>
				<td className="table-field">{item.name}</td>
				<td className="table-field">{item.desc}</td>
				<td className="table-field">{item.priority}</td>
			</tr>
		);
	}

	render() {
		return(
			<table className="table">
				<thead>
					<tr>
						<th className="table-header" style={{ width: "20%" }}>Название</th>
						<th className="table-header" style={{ width: "60%" }}>Описание</th>
						<th className="table-header" style={{ width: "20%" }}>Приоритет</th>
					</tr>
				</thead>
				<tbody>
					{this.getItems()}
				</tbody>
			</table>
		);
	}

}

