import React from 'react';
import Axios from 'axios'
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import { SampleFlights1 } from './sampleflights1';
import { SampleFlights2 } from './sampleflights2';
import './profile.css'

const base_url = 'http://localhost3001/'                               //change this

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn : localStorage.getItem('userID') ? true : false,
            userID : '',
            savedflights : null,
            saved: null,
            totalCost: ''
        }
    }
    
    componentDidMount() {
        this.setState({userID: localStorage.getItem('userID')});
        this.setState({saved: localStorage.getItem('saved')});
        //------------for testing use------------------
        // this.setState({
        //     savedflights: SampleFlights1,
        //     totalCost: '14800USD'
        // });
        //------------for testing use------------------
        if (this.state.userID) {
            Axios.post(base_url + '/profile', {                         //change this
                'userID' : `${localStorage.getItem('userID')}`,
            }).then(response => {
                console.log(response)
                this.setState({
                    savedflights : response.data[0],
                    totalCost: response.data[1]
                })
            }).catch(error=> {
                console.log(error)
            })
        }
    }
    delete = e => {
        //------------for testing use------------
        // this.setState({
        //     savedflights: SampleFlights2,
        //     totalCost: '9800USD'
        // })
        //------------for testing use------------
        e.preventDefault()
        const {savedflights} = this.state
        Axios.post(base_url + 'users/delete', {                              //// change this
            'savedflights': savedflights
        }).then((response)=> {
            if (response.data.message){
              console.log(response.data.message)
            } else {
                console.log(response);
            }
        });  
    }

    render() {
        const {userID, homeAirport} = this.state;

        return (
            <div className='profile-container'>
                <div className='profiledisplay'>
                    {this.state.saved == 'true' && this.state.savedflights && this.state.userID && <div>
                        <h1>User: {this.state.userID}</h1>
    
                        <h2>Saved flights: </h2>
                        </div>
                    }
                    {this.state.saved =='true' && this.state.savedflights && this.state.userID && this.state.savedflights.map((flight, index)=> {
                        return (
                            <div className="flight" key={index}>
                                <div className='card'>
                                    <h3>Flight {index+1}</h3>
                                    <div className='details'>
                                        <p>From: {flight.ForeignAirport}</p>
                                        <p>To: {flight.ChineseAirport}</p>
                                        <p>Airline: {flight.Airline}</p>
                                        <p>FlightNo: {flight.FlightNumber}</p>
                                        <p>Weekday: {flight.Weekday}</p>
                                        <p>Price starting at: {flight.Price}</p>
                                        <p>Booking Website: {flight.Website}</p>
                                        <Button variant="outline-primary" onClick = {this.delete} ><i class="far fa-trash-alt"></i></Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {this.state.userID && this.state.saved != 'true' && <div className='hint'>
                        <h1 className='profileusername'>User: {this.state.userID}</h1>
                        <p>You have no flights saved!</p></div>}
                    {!this.state.userID && <div className='hint'><p>Log In to view your profile!</p></div>}
                    {this.state.saved == 'true' && this.state.totalCost && this.state.userID && this.state.savedflights && <div className='totalcost'>
                        <h2>Total Cost : {this.state.totalCost}</h2>
                        </div>}
                </div>
            </div>
        );
    }
}