import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//pages components
import {Login} from './components/pages/login'
import {Profile} from './components/pages/profile'
import Home from './components/pages/home'
import SearchMain from './components/pages/searchmain';
import {SearchBasic} from './components/pages/searchbasic';
import {SearchAdvanced} from './components/pages/searchadvanced';
import {Register} from './components/pages/register';


function App() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/profile' exact component={Profile}/>
                <Route path='/searchmain' exact component={SearchMain}/>
                <Route path='/searchbasic' exact component={SearchBasic}/>
                <Route path='/searchadvanced' exact component={SearchAdvanced}/>
                <Route path='/register' exact component={Register}/>
            </Switch>  
        </Router>
    );
}

export default App;