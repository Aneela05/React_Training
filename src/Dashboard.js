import React , {Component } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Userlisting from './Userlisting';


class Dashboard extends React.Component{
	render(){	
	return(
		<div>
		    <h1>Dashboard</h1>
		    <Userlisting/>
		</div>
	);
    }
}

export default Dashboard;