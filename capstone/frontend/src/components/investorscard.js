import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, } from 'reactstrap'
import {image} from './images.png'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Investorcard extends Component {
    constructor(){
        super()
    }
    
    render(){
        
    return (
        <div >
           
            <Card className="shadow p-3 mb-5 rounded border border-secondary">

                <CardBody className="Strong">
                    <CardTitle style={{ fontSize: 30 }}> {}</CardTitle>
                    <CardSubtitle style={{ fontSize: 20 }}>Highlights</CardSubtitle>
                    <CardText> {}
                    </CardText>
                    <div className="row">
                        {/* <div className="col-md-3" >
                            <CardImg src="https://picsum.photos/200/150/?random" alt="image" />
                        </div> */}
                        <div className="col-md-9 ">
                            <CardText>{} </CardText>
                        </div>
                    </div>


                </CardBody>
            </Card>
        </div>
    )
    }
}