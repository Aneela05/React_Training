const axios = require('axios');

axios.get('/user?ID=12345').then(function (response){
	console.log(response);
})
.catch(function(error){
	console.log(error);
})
.then(function(){

});


const axios = require(axios);
axios.get('/user?ID=12345').then (function(response){
	console.log(response);
})
.catch(function(error){
	console.log(error);
})
.then(function(){

});

const axios = require(axios);
axios.get('/user', {
	params :{
		ID : 12345
	}
})
.then(function(reponse){
	console.log(response);
})
.ctach(function(error){
	console.log(error);
})
.then(function(){

});



async function(){
	try{
		const axios = await axios.get('/user?ID=12345');
		console.log(response);
	}
	catch(error){
		console.error(error);
	}
}



axios.post('/user',{
	params:{
		ID:12345,
		fistname:'chalam',
		lastname : 'aneeal'
	}
})
.then(function(response){
	console.log(reponse);
})
.catch(function(error){
	console.log(error);
});

function getUserAccount(){
	return axios.get('/user/12345');
}

Function getUserPermission(){
	return axios.get('/user/12345/permissions');
}

promise.all([getUserAccount(),getUserPermission()])
	.then(function(results){
		const acc = response[0];
		const perm = response[1];
	})


{
	url :
	method: 'get',
	baseURL : 'https://some-domain.com/api/',
	transformRequest : [ function(data,header){
		return data;
	}],
	transformResponse : [function(data){
		return data;
	}],	

	headers : { }
}




import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Forgot from'./Forgot';
import Reset from'./Reset';

import {BrowserRouter as Router, Switch,Route } from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="App">    
        <Nav/>
        <Switch>
          <Route path ="/Home" exact component={Home}/>
          <Route path = "/Register" exact component = {Register}/>
          <Route path = "/Login" exact component = {Login}/>
         <Route path = "/Dashboard" exact component={Dashboard}/>
          <Route path='/Forgot' exact component ={Forgot}/>
          <Route path='/Reset'  component ={Reset}/>
        </Switch>
      </div>
    </Router>
  );
}

const Routes= ()=>{
  return(
      <switch>
          <Route path ="/Home" exact component={Home}/>
          <Route path = "/Register" exact component = {Register}/>
          <Route path = "/Login" exact component = {Login}/>
         <Route path = "/Dashboard" exact component={Dashboard}/>
          <Route path='/Forgot' exact component ={Forgot}/>
          <Route path='/Reset'  component ={Reset}/>
      </switch>
      )
}







export default App;










