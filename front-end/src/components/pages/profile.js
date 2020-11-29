import React from 'react';
import Axios from 'axios'

const base_url = 'http://localhost3001/'

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn : localStorage.getItem('userID') ? true : false,
            userID : '',
            homeAirport : '',
            savedRoutes : ''
        }
    }
    
    componentDidMount() {
        this.setState({userID: localStorage.getItem('userID')});
        if (this.state.isLoggedIn) {
            Axios.post(base_url + 'profile', {
                'userID' : `${localStorage.getItem('userID')}`,
            }).then(response => {
                console.log(response)
                const res = response.data[0];
                this.setState({
                    homeAirport : res.homeAirport,
                    savedRoutes : res.savedRoutes
                });
            }).catch(error=> {
                console.log(error)
            })
        }
    }

    render() {
        const {userID, homeAirport} = this.state;

        return (
            <div className='profile-container'>
                <h1>Profile Page</h1>
            </div>
        );
    }
}