import React,{Component} from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';

class Verifypassword extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			verified: false,
			error_status: " ",
		}
	}
	
	componentDidMount(){
		axios.get('http://localhost:8000/api/verify/${this.props.match.params.token}').then(
			res=>{
				this.setState({verified: true});
				console.log(res.data);
			})
		.catch(
			err=>{
				console.log("The token you have entered is not validate ");
			});
	}
	
    render(){ 
    		    if(this.state.verified)
    			   return <Redirect to={'/Home'} ;
    		    
    	   return( {this.state.verified} );
    }

}







