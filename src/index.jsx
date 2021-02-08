/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Works from './pages/works/works';
import Navbar from './components/navbar/navbar'

 
const App = () => {
  return (
    <Router>
			<Navbar Link={Link} />
			<main>
				<Switch>
					<Route path="/" exact>
						<Home/>
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/works">
						<Works />
					</Route>
				</Switch>	
			</main>
    </Router>
  )
};
 
ReactDOM.render(<App />, document.getElementById('root'));
 