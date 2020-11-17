import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//pages components
import SearchFlight from './components/pages/searchflight'
import Login from './components/pages/login'
import Profile from './components/pages/profile'
import Home from './components/pages/home'
import SearchHotel from './components/pages/searchhotel';
import SearchCombine from './components/pages/searchcombine';
import SearchMain from './components/pages/searchmain';


function App() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/profile' exact component={Profile}/>
                <Route path='/searchmain' exact component={SearchMain}/>
                <Route path='/searchflight' exact component={SearchFlight}/>
                <Route path='/searchhotel' exact component={SearchHotel}/>
                <Route path='/searchCOMBINE' exact component={SearchCombine}/>
            </Switch>  
        </Router>
    );
}

export default App;