//https://www.youtube.com/watch?time_continue=1&v=5535bLCBGxc
//https://www.youtube.com/watch?time_continue=37&v=Re8n-hmkWlY
// wrap the entire BrowserRouter works with all the components and notifies them when the url changes

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(

	<BrowserRouter>

	<App />

	</BrowserRouter>, 

	document.getElementById('root')

	)


