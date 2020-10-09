import React from 'react';
import "./App.css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

const api = axios.create({
  baseURL : 'http://localhost:8000/api/'
});


class Forgot extends React.Component{
	constructor(props){
        super(props);
        this.emailHandler = this.emailHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            email : '',
            done:false,
        };
    }

    emailHandler(event){
        this.setState({ email: event.target.value });
    }

    submitHandler=e=>{
    	e.preventDefault();
    	api.post('/emailvalidity', {email:this.state.email}).then(
    		res=>{
    		console.log(res);
            this.setState({done:true});
    	})
    	.catch(
    		err=>{
    			console.log(err.toJSON());
    		});
    }

	render(){ 
            if(this.state.done) return <Redirect to={'/Home'}/>
        return(
            <form onSubmit={this.submitHandler}>
            <h3>Forgot Password</h3>
            <div>
               <label>Email:</label>
               <input 
               type="email" name="email" placeholder="email"
               value={this.state.email}   onChange={this.emailHandler} required 
               />
            </div>
            <br></br>
            <button type='submit'>submit</button>
            </form>
        );
    }

}

export default Forgot;