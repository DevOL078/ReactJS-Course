import React from 'react';
import './assets/App.css';

import TaskList from './components/TaskList';

function App() {
  return (
	<div className="container">
		<p id="app-title">Task Tracker</p>
		<TaskList name="Test"/>
	</div>
  );
}

export default App;