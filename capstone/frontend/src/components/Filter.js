import React, { Component } from 'react'
import "./main.css"
import { MDBCol } from "mdbreact";

export default class Filter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    redirect = ()=>{
        return alert("i am clicked");
    }



    render() {
        return (
            <div>
                <div className="mt-4 row">

                    <div className="col">
                        <h1 className="d-flex float-left"> FIND POST </h1>
                    </div>
                    <div className="col d-flex justify-content-end float-right" >
                        <MDBCol md="6">
                            <div className=" rounded-bottom rounded-top active-pink-3 active-pink-4 mb-4">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                            </div>
                        </MDBCol>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-4 ">


                    </div>
                    <div className=" col-xl-8 row">
                        <div class="col-xl-4">
                        <div class="card">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random"></img>
                    <div class="card-block">
                        <figure class="profile">
                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                        </figure>
                        <h4 class="card-title mt-3">TITLE</h4>
                        <div class="meta">
                            <a>Friends</a>
                        </div>
                        <div class="card-text">
                            BODY
                        </div>
                    </div>
                    <div class="card-footer">
                        <small>time of last updated</small>
                        <button onClick= {this.redirect} class="btn btn-secondary float-right btn-sm">show</button>
                    </div>  
                   </div>
                        </div>     
                    </div>
                </div>
            </div>
        
           
        )
    }
}
