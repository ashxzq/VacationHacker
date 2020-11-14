import React, {Component} from 'react';
import './App.css'
import './index.css';
import logo from './logo.png'
import { BrowserRouter as Router, Link, NavLink, Prompt, Redirect, Switch } from "react-router-dom";
import Route from 'react-router-dom/Route'
import Home from './home';
import Login from './login';
import Search from './search';
import { Nav } from 'react-bootstrap';

class App extends Component {
    State = {loggedIn: false}
    render() {
        return (
            <Router>
               <div className = "App">
                 <ul>
                     <li>
                         <NavLink to = "/homepage" exact activeStyle = {
                             {color: 'grey'}
                         }>Home</NavLink>
                     </li>
                     <li>
                         <NavLink to ="/searchpage" exact activeStyle = {
                             {color: 'grey'}
                         }>Search</NavLink>
                     </li>
                     <li>
                         <NavLink to ="/myprofilepage" exact activeStyle = {
                             {color:'grey'}
                         }>My Profile</NavLink>
                     </li>
                     <li>
                         <NavLink to ="/loginpage" exact activeStyle = {
                             {color:'grey'}
                         }>Log In</NavLink>
                     </li>
                 </ul>
                

                 <Switch>
                    <Route exact path="/homepage" component={Home} />
                    <Route exact path="/loginpage" component={Login} />
                    <Route exact path="/searchpage" component={Search} />
                    <Route exact path="/myprofilepage" />
                </Switch>
               </div>
            </Router>
        )
    }
}

export default App;