import React from "react";
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import "./App.scss";

function App() {
	return (
		<Router>
        
			<div className="App">
				<ul>
					<li><Link to="/tags">标签</Link> </li>
					<li><Link to="/money">记一笔</Link></li>
					<li><Link to="/statistics">统计</Link></li>
				</ul>
				<Switch>
					<Redirect exact from="/" to="/money"></Redirect>
					<Route path="/tags"><Tags></Tags></Route>
					<Route path="/money"><Money></Money></Route>
					<Route path="/statistics"><Statistic></Statistic></Route>
					<Route path="*"><NoMatch></NoMatch></Route>
				</Switch>
			</div>
		</Router>
	);
}

function NoMatch() {
	return (
		<div>
            页面地址不存在
		</div>
	);
}

function Tags() {
	return (
		<div>
            标签页
		</div>
	);
}

function Money() {
	return (
		<div>
            记一笔
		</div>
	);

}

function Statistic() {
	return (
		<div>
            统计页
		</div>
	);
}

export default App;
