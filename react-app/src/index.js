import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/index'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Signup from './signup/index'
import Home from './containers/home'


function CQ() {
	return (
		<>
		<Switch>
			<Route exact path="/">
				<Login/>
			</Route>
			<Route exact path="/signup">
				<Signup/>
			</Route>
			<Route exact path="/home">
				<Home/>
			</Route>
		</Switch>
		</>
	)
}

ReactDOM.render(
	<BrowserRouter>
	<CQ />
	</BrowserRouter>,
	document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
