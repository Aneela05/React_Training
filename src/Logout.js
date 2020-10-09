import React from 'react';
import "./App.css";
import {Redirect} from 'react-router-dom';

class Logout extends React.Component{
	state={
		redirect:false,
	}
	componentDidMount(){
		this.setState({redirect:true})
		localStorage.clear();
	}
    render(){
    	if(this.state.redirect){
    		return <Redirect to='/register'/>
    	}
	return(
		
		)
    }
}