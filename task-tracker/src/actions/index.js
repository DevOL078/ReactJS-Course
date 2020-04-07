export const NEW_TASK = "NEW_TASK";
export const newTask = {
    type: NEW_TASK
};

export const EDIT_TASK = "EDIT_TASK";
export const editTask = taskId => ({
    type: EDIT_TASK,
    payload: taskId
});

export const SAVE_TASK = "SAVE_TASK";
export const saveTask = task => ({
    type: SAVE_TASK,
    payload: task
});

export const DELETE_TASK = "DELETE_TASK";
export const deleteTask = taskId => ({
    type: DELETE_TASK,
    payload: taskId
});

export const SORT_BY_NAME = "SORT_BY_NAME";
export const sortByName = {
    type: SORT_BY_NAME
};

export const SORT_BY_PRIORITY = "SORT_BY_PRIORITY";
export const sortByPriority = {
    type: SORT_BY_PRIORITY
};

export const SET_TASK_FORM_VISIBILITY = "SET_TASK_FORM_VISIBILITY";
export const setTaskFormVisibility = taskFormVisibility => ({
    type: SET_TASK_FORM_VISIBILITY,
    payload: taskFormVisibility
});

export const SET_THEME = "SET_THEME";
export const setTheme = theme => ({
    type: SET_THEME,
    payload: theme
});