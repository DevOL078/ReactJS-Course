import { NEW_TASK, EDIT_TASK, SAVE_TASK, DELETE_TASK, SET_THEME, SET_TASK_FORM_VISIBILITY, SORT_BY_NAME, SORT_BY_PRIORITY } from "../actions";
import Task from "../domain/Task";

const defaultState = {
    tasks: [],
    editableTask: null,
    theme: 'strict',
    taskFormVisibility: false
};

const compare = (a,b) => {
	if(a > b) {
		return 1;
	} else if(a === b) {
		return 0;
	}
	return -1;
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEW_TASK: {
            return {
                ...state,
                editableTask: new Task()
            };
        }

        case EDIT_TASK: {
            let editIndex = state.tasks.findIndex(task => task.id === action.payload);
            if(editIndex >= 0) {
                let editableTask = Object.assign({}, state.tasks[editIndex]);
                return {
                    ...state,
                    editableTask: editableTask
                }
            }
            break;
        }

        case SAVE_TASK: {
            let newTask = action.payload;
            let editIndex = state.tasks.findIndex(task => task.id === newTask.id);
            let tmpTasks;
            if(editIndex >= 0) {
                tmpTasks = [...state.tasks];
                tmpTasks.splice(editIndex, 1, newTask);
            } else {
                tmpTasks = [...state.tasks, newTask];
            }
            return {
                ...state,
                tasks: tmpTasks,
                editableTask: null
            }
        }

        case DELETE_TASK: {
            let deleteIndex = state.tasks.findIndex(task => task.id === action.payload);
            let tmpTasks = [...state.tasks];
            tmpTasks.splice(deleteIndex, 1);
            return {
                ...state,
                tasks: tmpTasks
            }
        }

        case SORT_BY_NAME: {
            let newTasks = state.tasks.sort((a,b) => compare(a.name, b.name)).slice();
            return {
                ...state,
                tasks: newTasks
            }
        }

        case SORT_BY_PRIORITY: {
            let newTasks = state.tasks.sort((a,b) => compare(a.priority, b.priority)).slice();
            return {
                ...state,
                tasks: newTasks
            }
        }
        
        case SET_THEME: {
            return {
                ...state,
                theme: action.payload
            }
        }

        case SET_TASK_FORM_VISIBILITY: {
            return {
                ...state,
                taskFormVisibility: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
};

export default rootReducer;