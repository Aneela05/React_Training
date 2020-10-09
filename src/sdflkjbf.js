
import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Forgot from'./Forgot';
import Reset from'./Reset';

import {BrowserRouter as Router, Redirect , Switch,Route } from 'react-router-dom'; 
import AuthApi from'./AuthApi';
import Cookies from 'js-cookie';


function App() {

  //check the user is authenticated or not

  const [auth,setAuth] = React.useState(false);
  const readCookies(){
  const user = Cookies.get('user');
  if(user){
    setAuth(true);
  }
}
React.useEffect( ()=>{
  readCookie();
},[])






  return (
    <AuthApi.Provider value={(auth,setAuth)}>
      <Router>
        <div className="App">    
          <Nav/>
          <Routes/>
        </div>
      </Router>
    </AuthApi.Provider>
  );
}

const Routes= ()=>{
  const Auth = React.createContext(AuthApi);
  return(
      <switch>
          <Route path ="/Home" exact component={Home}/>
          <Route path = "/Register" exact component = {Register}/>
          <ProtectedLogin path = "/Login" exact component = {Login} auth={Auth.auth}/>
         <ProtectedRoute path = "/Dashboard" auth={Auth.auth} exact component={Dashboard}/>
          <Route path='/Forgot' exact component ={Forgot}/>
          <Route path='/Reset'  component ={Reset}/>
      </switch>
      )
}

//protected route we have to create 
const ProtectedRoute = ({auth,component:Component, ...rest})=>{
  return (
    <Route
      { ...rest}
          render ={()=>auth?(
            <Component/>
          ):
          (
            <Redirect to='/login' />
            )


        }
      />
    )
}

const ProtectedLogin = ({auth,component:Component, ...rest})=>{
  return (
    <Route
      { ...rest}
          render ={()=>auth?(
            <Component/>
          ):
          (
            <Redirect to='/dashboard' />
            )

        }
      />
    )
}



export default App;

