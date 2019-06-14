import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Summary extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
    return (
        <div id ={this.props.id}>
           
            <Card>

                <CardBody className="Strong">
                    <CardTitle style={{ fontSize: 30 }}> {this.props.title}Card title</CardTitle>
                    <CardSubtitle style={{ fontSize: 20 }}>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies hendrerit urna quis tincidunt. 
                    Curabitur tincidunt nulla vitae diam lacinia rhoncus. Pellentesque mollis, neque sit amet venenatis scelerisque,
                    tortor neque elementum nunc, dignissim porttitor lorem tortor quis justo. In ultrices nulla quis ante sodales, 
                    sed congue nibh tempor. Etiam non risus quis risus pretium tincidunt et ultrices mi. Suspendisse potenti. 
                    Nulla porta s
                    </CardText>
                    <div className="row">
                        <div className="col-md-3" >
                            <CardImg src="" alt="image" />
                        </div>
                        <div className="col-md-9">
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies hendrerit urna quis tincidunt.
                             Curabitur tincidunt nulla vitae diam lacinia rhoncus. Pellentesque mollis, neque sit amet venenatis
       scelerisque, tortor neque elementum nunc, dignissim porttitor lorem tortor quis justo  </CardText>
                        </div>
                    </div>


                </CardBody>
            </Card>
        </div>
    )
    }
}