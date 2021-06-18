
import { 
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Statistic from "views/Statistic";
import Tags from "views/Tags";
import "./App.scss";

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

export default App;
