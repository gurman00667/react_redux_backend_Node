import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import { Container, Col, Table } from 'reactstrap'
import './main.css'
import image from './images.png'
import { Link as Links, animateScroll as scroll } from "react-scroll";

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hover: false,


    }
  }
  componentDidMount() {

  }

  hoverOn = () => {
    this.setState({ hover: true })

  }
  hoverOff = () => {
    this.setState({ hover: false })

  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };// this function need to call with our navigation-brand  "onClick = """


  render() {
    return (
      <div id="sidebars" className="Container">
        {/* <Container >
          <Col xs={12} sm={12} md={12}> */}
            {/* <Image src={image} className="ml-5 " thumbnail></Image> */}

            {/* <div className="text-white bg-dark container d-flex justify-content-center rounded border border-info " >

              <h3>NAME</h3>
            </div> */}

          {/* </Col>
        </Container> */}
        <br></br>
        <Container > <Col xs={12} sm={12} md={12}>
          <Table bordered>
            <tbody className="shadow p-3 mb-5  rounded border ">
              {/* <tr >
                <th  className="text-white bg-dark nav-item d-flex justify-content-center rounded border border-info" >
                 PROFILE</th>
              </tr> */}
              <tr>
                <th id='about' className="d-flex justify-content-center" >
                  <Links
                    className=""
                    activeClass="active"
                    to="abouts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  > About
              </Links>
                </th>
              </tr>

             
              <tr>
                <th id='summary' className=" nav-item d-flex justify-content-center " >
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
                <th id='product' className=" d-flex justify-content-center " >
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
                <th id='advantage' className="d-flex justify-content-center " >
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
                <th id='motivation' className="d-flex justify-content-center " >
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
                <th id='toinvestor' className="d-flex justify-content-center " >
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
            </tbody>
          </Table>
        </Col>
        </Container>
      </div>
    )
  }
}

