/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import React from 'react';
import CaseStudy from './caseStudy/caseStudy';
import Exercices from './exercices/exercices';
import ConcretCase from './concretCase/concretCase'

const Works = () => {
    return(
        <>
            <h1>Welcome on the works page. Please, select a category</h1>
            <Router>
            <div className="links">
                <Link to="/works/exercises">Exercices</Link>
                <Link to="/works/concrete-case">Concret Case</Link>
                <Link to="/works/case-study">Case Study</Link>
            </div>
            <Switch>
                <Route path="/works/exercises" exact>
					<Exercices/>
				</Route>
				<Route path="/works/concrete-case">
					<ConcretCase />
				</Route>
				<Route path="/works/case-study">
					<CaseStudy />
				</Route>
            </Switch>
            </Router>
        </>
    )
}
export default Works;
