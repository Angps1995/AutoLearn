import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Course from './pages/Courses';
import Path from './pages/Path'
import NotFound from './pages/NotFound'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/course">Course</Link>
                </li>
                <li>
                    <Link to="/path">Path</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/course" component={Course} />
                <Route path="/path" component={Path} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
