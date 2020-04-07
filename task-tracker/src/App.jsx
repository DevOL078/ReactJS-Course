import React from 'react';
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { createStore } from "redux";

import classnames from "classnames/bind";
import styles from './assets/scss/App.module.scss';

import rootReducer from "./reducers";
import { setTheme } from "./actions";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const cx = classnames.bind(styles);

const store = createStore(rootReducer);

const mapStateToProps = state => ({
	theme: state.theme,
	taskFormVisibility: state.taskFormVisibility
});

const mapDispatchToProps = dispatch => ({
	setTheme: event => dispatch(setTheme(event.target.value))
});

const AppContainer = () => (
	<Provider store={store}>
		<ConnectedApp />
	</Provider>
);

const App = ({theme, taskFormVisibility, setTheme}) => {

	return (
		<div className={cx('container', {[`container-theme-${theme}`]: true})}>
			<div className={cx('row', 'row-start')}>
				<div className={cx('radios')}>
					<div className={cx('row', 'row-start')}>
						<input id="strict" 
							value="strict" 
							type="radio"
							checked={theme === "strict"}
							onChange={setTheme}
							/>
						<label className={cx('label', {[`label-theme-${theme}`]: true})} htmlFor="strict">
								Strict theme
						</label>
					</div>
					<div className={cx('row', 'row-start')}>
						<input id="fun" 
							value="fun" 
							type="radio"
							checked={theme === "fun"}
							onChange={setTheme}
							/>
						<label className={cx('label', {[`label-theme-${theme}`]: true})} htmlFor="fun">
								Fun theme
						</label>
					</div>
				</div>
				<div className={cx('app-title', {[`app-title-theme-${theme}`]: true})}>
					<p>Task Tracker</p>
				</div>
			</div>	
			<div className={cx('row')}>
				<div className={cx('col')}>
					<TaskList />
				</div>
				{ taskFormVisibility &&
					<div className={cx('col')}>
						<TaskForm />
					</div>
				}
			</div>
		</div>
	);
	
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;