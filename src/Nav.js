import React from 'react';
import './App.css';
import {Link,Redirect} from 'react-router-dom';

class Nav extends React.Component{
  state={
    redirect:false
  }
  
  Handler=()=>{
    this.setState({redirect:true})
    localStorage.clear();
  }
render(){
  if(this.state.redirect){
        return <Redirect to='/register'/>
      }
  return (
    <nav>
      <h3>Logo</h3>
      {!localStorage.getItem('token')? 
      <ul className ="nav-links">
         <Link style={navstyle} to="/login">
            <li>Login</li>
         </Link>
         <Link style ={navstyle} to="/Home">
            <li>Home</li>
         </Link>
         <Link style ={navstyle} to="/Register">
            <li>Register</li>
         </Link>
      </ul>: 
      <ul>
      <li onClick={this.Handler} style={{color:"white",cursor:"pointer"}}>Logout</li>
      
      </ul> }
    </nav>
  );
  }
}
const navstyle = {
    color:'white'
  };  

export default Nav;

