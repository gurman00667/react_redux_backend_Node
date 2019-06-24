import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';
import Summary from './Summary'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'reactstrap';
import { MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Link as Links, animateScroll as scroll } from "react-scroll";

import 'fontawesome';
import './entrpnr.css'
import Sidebar from "./sidebar"
import image from './images.jpg'
import { LoadSummuryActionThunk } from '../redux/Actions/summaryaction'
import { LoadProductActionThunk } from '../redux/Actions/productactions'
import { LoadToInvestorsActionThunk } from '../redux/Actions/toinvestors'
import { LoadMotivationActionThunk } from '../redux/Actions/motivationaction'
import { LoadAdvantageActionThunk } from '../redux/Actions/advantageaction'
import { LoadAboutActionsThunk } from '../redux/Actions/aboutactions'

import { connect } from 'react-redux';

// const style = {
//     border: "1px",
//     border
// }
class Entrepreneurs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 1,
      hover: false,
      Data: {
        header: "",
        highlights: "",
        body: ""
      }

    }
  }
  componentDidMount() {
    this.props.LoadSummuryActionThunk();
    this.props.LoadProductActionThunk();
    this.props.LoadToInvestorsActionThunk();
    this.props.LoadMotivationActionThunk();
    this.props.LoadAdvantageActionThunk();
    this.props.LoadAboutActionsThunk();

  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });

    }

  }

  clickhandler() {
    alert("i am clicked");
  }

  loadAbout = () => {
    if (this.props.aboutArray.aboutArray[0]) {
      return (
        <div>
          <Summary
            header={this.props.aboutArray.aboutArray[0].header}
            highlight={this.props.aboutArray.aboutArray[0].highlights}
            body={this.props.aboutArray.aboutArray[0].body}
            id="abouts"
          />
        </div>
      )

    }
  }

  loadAdvantage = () => {
    if (this.props.advantageArray.advantageArray[0]) {
      return (
        <div>
          <Summary
            header={this.props.advantageArray.advantageArray[0].header}
            highlight={this.props.advantageArray.advantageArray[0].highlights}
            body={this.props.advantageArray.advantageArray[0].body}
            id="advantages"
          />
        </div>
      )
    }
  }

  loadSummary = () => {
    if (this.props.summuryArray.summuryArray[0])
      return (
        <div>
          <Summary
            header={this.props.summuryArray.summuryArray[0].header}
            highlight={this.props.summuryArray.summuryArray[0].highlights}
            body={this.props.summuryArray.summuryArray[0].body}
            id="summarys"
          />
        </div>
      )
  }
  loadMotivation = () => {

    if (this.props.motivationArray.motivationArray[0]) {
      return (
        <div>
          <Summary
            header={this.props.motivationArray.motivationArray[0].header}
            highlight={this.props.motivationArray.motivationArray[0].highlights}
            body={this.props.motivationArray.motivationArray[0].body}
            id="motivations"
          />
        </div>
      )
    }
  }

  loadToinvestors = () => {
    if (this.props.toinvestorArray.toinvestorArray[0])
      return (
        <div>
          <Summary
            header={this.props.toinvestorArray.toinvestorArray[0].header}
            highlight={this.props.toinvestorArray.toinvestorArray[0].highlights}
            body={this.props.toinvestorArray.toinvestorArray[0].body}
            id="toinvestors" />
        </div>

      )
  }

  loadProduct = () => {

    if (this.props.productArray.productArray[0]) {

      return (
        <div>
          <Summary
            header={this.props.productArray.productArray[0].header}
            highlight={this.props.productArray.productArray[0].highlights}
            body={this.props.productArray.productArray[0].body}
            id="products"
          />
        </div>
      )
    }
  }

  render() {
    console.log(this.props)
    // console.log(this.props.summuryArray.summuryArray[0].header, 'ok');


    return (
      <div className="main">
           
        <div className="container-fluid card ">
          <Image src={image} className=" fixedimg"  />
      </div>
      <div className= "profilepic cardblock">
        <figure class="  profile">
           <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt="" ></img>
         </figure>
      </div>
   
        <MDBContainer className="p-4">

          <MDBRow>
          <MDBCol size="2">
           
            </MDBCol>
            <MDBCol size="2">
           
            NAME</MDBCol>
            <MDBCol size="4"></MDBCol>
            <MDBCol size="4" className=" d-flex justify-content-end "><a href="#!" className="zoom fb-ic mr-3">
              <MDBIcon fab icon="facebook-f" />
            </a>
              <a href="#!" className="zoom  tw-ic mr-3">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="zoom gplus-ic mr-3" >
                <MDBIcon fab icon="google-plus-g" />
              </a>
              <a href="#!" className="zoom li-ic mr-3">
                <MDBIcon fab icon="linkedin-in" />
              </a></MDBCol>
          </MDBRow>

        </MDBContainer>

        <div className="" >
        <h3 className="line">  </h3>
        </div>
        <br></br>
       
       
        <div className="Container row">
          <div className="col-xl-4">
            <Sidebar />

          </div>

          <div className="col-xl-8">
            <Table className="mt-4 ">
              <tbody>
                <tr className="rounded border ">
                  <td id="feature" className="  text-center" >
                    <Links
                      className=""
                      activeClass="active"
                      to="abouts"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    > Feature
                    </Links>
                  </td>
                  <td id="message" className=" text-center " role= "button">
                    <Links
                      activeClass="active"
                      to="abouts"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    > Message
                    </Links>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="Wrapper smooth-scroll ">
              {this.loadAbout()}
              
              {this.loadSummary()}
          
              {this.loadProduct()}
             
              {this.loadAdvantage()}
             
              {this.loadMotivation()}
             
              {this.loadToinvestors()}


            </div>
          </div>
        </div>

      </div>
    )
  }
}
const map = (state) => {
  console.log(state)
  return {
    summuryArray: state.summury,
    productArray: state.product,
    motivationArray: state.motivation,
    toinvestorArray: state.toinvestor,
    advantageArray: state.advantage,
    aboutArray: state.about
  }

}

const mapDispatchToProps = {

  LoadSummuryActionThunk,
  LoadProductActionThunk,
  LoadMotivationActionThunk,
  LoadToInvestorsActionThunk,
  LoadAdvantageActionThunk,
  LoadAboutActionsThunk


};
export default connect(map, mapDispatchToProps)(Entrepreneurs);