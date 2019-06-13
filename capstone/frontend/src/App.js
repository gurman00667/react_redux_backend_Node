import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import Navbar1 from './components/Navbar';
import Login from './components/LogIn';
import SignUp from './components/SignUp'
// import InputEntrepneursSummury from './components/InputEntrepneursSummury';
import PitchViewPage from './components/PitchViewPage';


//cors test from backend
import axios from 'axios';

const getData = () => {
  axios.get(`${process.env.REACT_APP_API_SERVER}/api/test`)
  .then(res => {
    console.log(res)
    let result = res.data
    console.log(result)
  })
}

getData();

function App() {
  return (
    <Router>
    <div className="App">
     
      <Navbar1 image = {logo}/>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <br /> */}
      {/* <PitchViewPage /> */}
      {/* <InputEntrepneursSummury /> */}
      
      <Route exact={true} path="/" component={PitchViewPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </div>
    </Router>
  );
}

export default App;
