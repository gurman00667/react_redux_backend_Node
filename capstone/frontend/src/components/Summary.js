import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, } from 'reactstrap'
import {image} from './images.png'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Summary extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props)
    return (
        <div id ={this.props.id}>
           
            <Card className="shadow p-3 mb-5  cards rounded border border-secondary">

                <CardBody className="Strong">
                    <CardTitle style={{ fontSize: 30 }}> {this.props.header}</CardTitle>
                    <CardSubtitle style={{ fontSize: 20 }}>Highlights</CardSubtitle>
                    <CardText> {this.props.highlight}
                    </CardText>
                    <div className="row">
                        {/* <div className="col-md-3" >
                            <CardImg src="https://picsum.photos/200/150/?random" alt="image" />
                        </div> */}
                        <div className="col-md-9 text">
                            <CardText>{this.props.body} </CardText>
                        </div>
                    </div>


                </CardBody>
            </Card>
        </div>
    )
    }
}