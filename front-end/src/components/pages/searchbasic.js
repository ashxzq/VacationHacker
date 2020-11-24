import React from 'react';
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import Axios from 'axios'

const base_url = 'http://localhost3001/'           //////change this

export class SearchBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            area : '',
            country : '',
            weekday : '',
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    
    login = e => {
        e.preventDefault()
        const {area, country, weekday} = this.state
        Axios.post(base_url + 'users/login', {                              //// change this
            'basicsearch': {
                'area' : area,
                'country' : country, 
                'weekday' : weekday
            }
        }).then((response)=> {
            if (response.data.message){
              console.log(response.data.message)
            } else {
                console.log(response);
                this.setState({
                    isRegistered: true //这里改成redirect到profile page & add cookies
                })
            }
        });      
    }

    render() {
        return (
            <div className='searchbasic-container'>
                <div className='searchbasic Input'>
                     <label> Departing Area</label> 
                     <select name='area' value = {this.state.area} placeholder='area' onChange={this.changeHandler}>
                         <option value="North America">North America</option>
                         <option value="East Asia">East Asia</option>
                         <option value="South East Asia">South East Asia</option>
                         <option value="Middle East">Middle East</option>
                         <option value="Europe">Europe</option>
                         <option value="Africa">Africa</option>
                     </select>
     
                     <label> Departing Country</label> 
                     <select name='country' value = {this.state.country} placeholder='country' onChange={this.changeHandler}>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Japan">Japan</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option values="Qatar">Qatar</option>
                        <option values="Saudi Arabia">Saudi Arabia</option>
                        <option values="United Kingdom">United Kingdom</option>
                        <option values="France">France</option>
                        <option values="Germany">Germany</option>
                        <option values="Netherlands">Netherlands</option>
                        <option values="Switzerland">Switzerland</option>
                        <option values="Finland">Finland</option>
                        <option values="Belgium">Belgium</option>
                        <option values="Portugal">Portugal</option>
                        <option values="Denmark">Denmark</option>
                        <option values="Sweden">Sweden</option>
                        <option values="Spain">Spain</option>
                        <option values="Austria">Austria</option>
                        <option values="Greek">Greek</option>
                        <option values="Belarus">Belarus</option>
                        <option values="Turkey">Turkey</option>
                        <option values="Italy">Italy</option>
                        <option values="Poland">Poland</option>
                        <option values="Russia">Russia</option>
                        <option values="Ethiopia">Ethiopia</option>
                        <option values="Egypt">Egypt</option>
                        <option values="Kenya">Kenya</option>
                     </select>

                     <label> Weekday</label> 
                     <select name='weekday' value = {this.state.weekday} placeholder='weekday' onChange={this.changeHandler}>
                         <option value="Monday">Monday</option>
                         <option value="Tuesday">Tuesday</option>
                         <option value="Wednesday">Wednesday</option>
                         <option value="Thursday">Thursday</option>
                         <option value="Friday">Friday</option>
                         <option value="Saturday">Saturday</option>
                         <option value="Sunday">Sunday</option>
                     </select>

                </div>
                <div className='searchbutton'>
                    <Button variant="outline-primary" onClick = {this.search}>Search</Button>
                </div>
            </div>
         );
    }
}