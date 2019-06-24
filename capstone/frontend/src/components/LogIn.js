import React from 'react';
import './LogIn.css'
import {connect} from 'react-redux'
import { loginUser } from '../redux/auth/actions';

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeField = (field, e) => {
        const state = {};
        state[field] = e.currentTarget.value;
        this.setState(state);
    }
    
    login = (e) => {
        e.preventDefault()
        this.props.login(this.state.email, this.state.password)
        this.props.history.push("/")
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
                  <input type="text" className="form-control" name="email" placeholder="Email" required="required" onChange={this.onChangeField.bind(this, 'email') } value={this.state.email}/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock" /></span>
                  <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={this.onChangeField.bind(this, 'password')} value={this.state.password}/>
                </div>
              </div>
            </div>        
            <div className="clearfix">
              <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-block login-btn" onClick={this.login}>Sign in</button>
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

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(loginUser(email, password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)