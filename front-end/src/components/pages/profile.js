import React from 'react';
import Axios from 'axios'

const base_url = 'http://localhost3001/'

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn : localStorage.getItem('userID') ? true : false,
            userID : '',
            savedflights : null
        }
    }
    
    componentDidMount() {
        this.setState({userID: localStorage.getItem('userID')});
        if (this.state.userID) {
            Axios.post(base_url + 'profile', {
                'userID' : `${localStorage.getItem('userID')}`,
            }).then(response => {
                console.log(response)
                this.setState({
                    savedflights : response.data
                })
            }).catch(error=> {
                console.log(error)
            })
        }
    }

    render() {
        const {userID, homeAirport} = this.state;

        return (
            <div className='profile-container'>
                <h1 className='profileusername'>User: {this.state.userID}</h1>
                <div className='profiledisplay'>
                    {this.state.savedflights && this.state.savedflights.map((flight, index)=> {
                        return (
                            <div className="flight" key={index}>
                                <h3>Flight {index+1}</h3>
                                <div className='details'>
                                    <p>From: {flight.ForeignAirport}</p>
                                    <p>To: {flight.ChineseAirport}</p>
                                    <p>Airline: {flight.Airline}</p>
                                    <p>FlightNo: {flight.FlightNumber}</p>
                                    <p>Weekday: {flight.Weekday}</p>
                                    <p>Price starting at: {flight.price}</p>
                                    <p>Booking Website: {flight.Website}</p>
                                </div>
                            </div>
                        );
                    })}
                    {this.state.userID && !this.state.savedflights && <div className='hint'><p>You have no flights saved!</p></div>}
                    {!this.state.userID && <div className='hint'><p>Log In to view your profile!</p></div>}
                </div>
            </div>
        );
    }
}