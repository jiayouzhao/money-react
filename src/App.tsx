import Icon from "components/Icon";
import React from "react";
import { 
	HashRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import styled from "styled-components";
import "./App.scss";

const Wrapper = styled.div`
    border:1px solid red;
    height:100vh;
    display:flex;
    flex-direction: column;
`;
const Main = styled.div`
    flex-grow: 1;
`;

const Nav = styled.nav`
    ul{
        display:flex;
        border:1px solid red;
        li{
            width:33%;
            text-align:center;
            padding:3px 0px;
            display:flex;
            flex-direction: column;
            align-items:center;
            .icon{
                margin-bottom:5px;
                width:40px;
                height:32px;
                &.moneyIcon{
                    margin-left:-6px;
                }
            }
        }
    }
`;

function App() {
	return (
		<Router>
			<Wrapper className="App">
				<Main>
					<Switch>
						<Redirect exact from="/" to="/money"></Redirect>
						<Route path="/tags"><Tags></Tags></Route>
						<Route path="/money"><Money></Money></Route>
						<Route path="/statistics"><Statistic></Statistic></Route>
						<Route path="*"><NoMatch></NoMatch></Route>
					</Switch>
				</Main>
				<Nav>
					<ul>
						<li>
							<Icon name="tag"/>
							<Link to="/tags">标签</Link> 
						</li>
						<li>
							<Icon classPre="money" name="money"></Icon>
							<Link to="/money">记一笔</Link>
						</li>
						<li>
							<Icon name="static"></Icon>
							<Link to="/statistics">统计</Link>
						</li>
					</ul>
				</Nav>
			</Wrapper>
		</Router>
	);
}

function NoMatch() {
	return (
		<div>
            页面地址不存在 <a href="/">返回首页</a>
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
