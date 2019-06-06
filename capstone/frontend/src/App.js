import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import Navbar1 from './components/Navbar';
import Login from './components/LogIn';
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      <Navbar1 image = {logo}/>
      {/* <Login /> */}
      <SignUp />
      
    </div>
  );
}

export default App;
