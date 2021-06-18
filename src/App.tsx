import Layout from "components/Layout";
import Nav from "components/Nav";
import React from "react";
import { 
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import styled from "styled-components";
import "./App.scss";

const Nomatch = styled.a`
    color:red;
    text-decoration:underline;
`;

function App() {
	return (
		<Router>
			<div className="App">
				
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
            页面地址不存在 <Nomatch href="/">返回首页</Nomatch>
		</div>
	);
}

function Tags() {
	return (
		<Layout>
            标签页
		</Layout>
	);
}

function Money() {
	return (
		<Layout>
            记一笔
		</Layout>
	);

}

function Statistic() {
	return (
		<Layout>
            统计
		</Layout>
	);
}

export default App;
