import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';
import Summary from './Summary'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'reactstrap';
import { MDBIcon, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import 'fontawesome';
import Sidebar from "./sidebar"
import axios from 'axios'

// const style = {
//     border: "1px",
//     border
// }
export default class Entrepreneurs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeTab:1,
             hover : false,

             Data :{
                header : "Titlw",
                highlights: "i am highlight",
                body: "vasbkkvhbehjbvjhf,bvfsj,hbsfaj,hasbfhj,",
             }
        }
    }
    componentDidMount(){
      axios.get(``).then(res=>{
        console.log(res);

      })

    }

  
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });

        }
       
      }

      clickhandler(){
        alert("i am clicked");
      }
    
    render() {
        return (
            <div>
                <div class= "container-fluid">
                    <Image src="images.png" fluid />
                </div>
            
        
        <MDBContainer className="p-4">

        <MDBRow>
        <MDBCol size="4">NAME</MDBCol>
        <MDBCol size="4"></MDBCol>
        <MDBCol size="4" className="d-flex justify-content-end "><a href="#!" className="fb-ic mr-3">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="#!" className="tw-ic mr-3">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="#!"  className="gplus-ic mr-3" >
        <MDBIcon fab icon="google-plus-g" />
      </a>
      <a href="#!" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
      </a></MDBCol>
      </MDBRow>
            
         </MDBContainer>   
          
         <div class="container d-flex justify-content-center border border-dark p-3" >
                <h3> Company Details </h3>
                </div> 
                <br></br>
                <div className="Container row">
                <div className="col-xl-4">
                  <Sidebar />
                
                </div>
                
                <div className="col-xl-8">
                <Table>
                <tbody>
                <tr onClick="">
                   
                   <td id = "feature" onClick= {this.clickhandler}><span>feature</span></td>
                  <td id = "about" className="text-align: center "><span>About</span></td>
                   <td id="message" className="text-align: center ">Message</td>
                </tr>
                </tbody>
                </Table>
                <div className="Wrapper smooth-scroll ">
                <Summary 
                title  = "Test "
                subtitle= ""
                id = "contacts"
                />
                <Summary 
                title  = ""
                subtitle= ""
                id = "summarys"
                />
                <Summary 
                title  = ""
                subtitle= ""
                id = "products"
                />
                <Summary 
                title  = ""
                subtitle= ""
                id = "advantages"
                />
                <Summary 
                title  = ""
                subtitle= ""
                id = "motivations"
                />
                <Summary id = "toinvestors"/></div>
                </div>
                </div> 
                
            </div>
        )
    }
}

