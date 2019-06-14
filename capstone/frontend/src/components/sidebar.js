import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import { Container, Col, Table } from 'reactstrap'
import './main.css'
import { Link as Links, animateScroll as scroll } from "react-scroll";

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover : false,
     

    }
  }
  componentDidMount(){

  }

  hoverOn=()=>{
    this.setState({ hover: true})

  }
  hoverOff=()=>{
    this.setState({hover: false})

  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };// this function need to call with our navigation-brand  "onClick = """


  render() {
    return (
      <div id = "sidebars" className="Container">
        <Container >
          <Col xs={12}>
            <Image style = {this.image}src="./images.png" thumbnail></Image>
          
            <div class="container d-flex justify-content-center border border-dark p-3" >

              <h3>Profile</h3> 
            </div>

          </Col>
        </Container>
        <br></br>
        <Container > <Col xs={12} > 
        <Table bordered>
        
          <tr >
           <th  onClick={this.linking} id = 'contact' className= " nav-item d-flex justify-content-center border border-light" >
            <Links
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Contact</Links> </th>  
          </tr>
            <tr>
           <th id = 'summary' className=" nav-item d-flex justify-content-center border border-light" > 
           <Links
                activeClass="active"
                to='summarys'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Summary</Links>
            </th> 
          </tr>
          <tr>
          <th id = 'product' className=" d-flex justify-content-center border border-light" >
          <Links
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Product</Links>

           </th>
          </tr>
          <tr>
          <th id = 'advantage' className="d-flex justify-content-center border border-light" >
          <Links
                activeClass="active"
                to="advantages"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Advantage</Links>
               </th>
          </tr>
          <tr>
          <th id = 'motivation' className="d-flex justify-content-center border border-light" >
          <Links
                activeClass="active"
                to="motivations"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > Motivation </Links>
         </th>
          </tr>
          <tr>
          <th id = 'toinvestor' className="d-flex justify-content-center border border-light" >
          <Links
                activeClass="active"
                to='toinvestors'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >To Investor</Links>
           </th>
          </tr>
          
        </Table>
     </Col>
     </Container>
      </div>
    )
  }
}

