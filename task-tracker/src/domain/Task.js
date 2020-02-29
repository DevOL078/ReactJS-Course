const taskCount = 0;

export default class Task {

	constructor(json) {
		this.id = json ? json.id : ++taskCount;
		this.name = json ? json.name : null;
		this.description = json ? json.description : null;
		this.priority = json ? json.priority : null;
	}

}