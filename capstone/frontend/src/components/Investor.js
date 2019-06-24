import React, { Component } from 'react'
import { MDBIcon, MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBNavItem, MDBNav, MDBNavLink  } from 'mdbreact';
import Image from 'react-bootstrap/Image';
import {MDBTabContent} from 'mdbreact'
import image from './images.jpg'
import './investor.css'



export default class Investor extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        items: {
            gradient: "1",
            }
       }
   }

   togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };
   
   
    render() {
        return (
            <div>
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
            </div>
            <div>
                <br></br>
            </div>
            
            <MDBContainer>
        <MDBNav pills className="nav-justified pills-peach-gradient">
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.items["gradient"] === "1"}
              onClick={this.togglePills("gradient", "1")}
            >
              Blogger
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.items["gradient"] === "2"}
              onClick={this.togglePills("gradient", "2")}
            >
              Designer
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.items["gradient"] === "3"}
              onClick={this.togglePills("gradient", "3")}
            >
              Photographer
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.items["gradient"] === "4"}
              onClick={this.togglePills("gradient", "4")}
            >
              Model
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
      </MDBContainer>
	</div>
           
        )
    }
}
