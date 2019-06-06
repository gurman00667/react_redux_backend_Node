import React from 'react';
import './LogIn.css'

export default class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
    
  <div className="card gedf-card">
    <div className="card-body py-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="login-form">
          <form className="cards-login" action="/login" method="post">
            <h2 className="text-center">Sign in</h2>		
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user " /></span>
                  <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock" /></span>
                  <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                </div>
              </div>
            </div>        
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
            </div>
            <div className="clearfix">
              <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
            </div>
            <div className="text-center">
            <a href="#" className="pull-right text-success ">Forgot Password?</a>
            </div>
            <div className="or-seperator">
              <i>or</i>
            </div>
            <div className="text-center social-btn">
              <a href="#" className="btn btn-primary btn-block"><i className="fab fa-facebook fa-lg login-icons" /> Sign in with <b>Facebook</b></a>
              <a href="#" className="btn btn-danger btn-block"><i className="fab fa-google fa-lg login-icons" /> Sign in with <b>Google</b></a>			
            </div>
            
            
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}