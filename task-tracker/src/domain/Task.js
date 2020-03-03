 
export default class Task {

	static taskCount = 0; 

	constructor(json) {
		this.id = (json && json.id) ? json.id : ++Task.taskCount;
		this.name = json ? json.name : null;
		this.desc = json ? json.desc : null;
		this.priority = json ? json.priority : null;
	}

}