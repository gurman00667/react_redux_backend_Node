import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Collapse, Container} from 'reactstrap';

export default class Navbar1 extends React.Component {
    constructor(props){
        super(props);

        this.toggleDown2 = this.toggleDown2.bind(this);
        this.toggleDown = this.toggleDown.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleColl = this.toggleColl.bind(this);
        this.toggleColl2 = this.toggleColl2.bind(this);
        this.state = {
            isOpen: false,
            isLoggedIn: false,
            isDown: false,
            isDown2: false,
            isColl: false,
            isColl2: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleDown() {
        this.setState({
            isDown: !this.state.isDown
        })
    }

    toggleDown2() {
        this.setState({
            isDown2: !this.state.isDown2
        })
    }

    toggleColl() {
        this.setState({
            isColl: !this.state.isColl
        })
    }

    toggleColl2() {
        this.setState({
            isColl2: !this.state.isColl2
        })
    }

    LogInNav = () => {
        const isLoggedIn = this.state.isLoggedIn
        return(
        isLoggedIn ? (
         <NavItem>
            <NavLink href="#" style={this.state.isOpen ? Inline : NavMenu}>Logout</NavLink>
         </NavItem>) :
         (<NavItem >
            <NavLink href="#" style={this.state.isOpen ? Inline : NavMenu}>Login</NavLink>
          </NavItem>)
          )
    }

    SignUpProfile = () => {
        const isLoggedIn = this.state.isLoggedIn
        return(
        isLoggedIn ? (
         <NavItem >
            <NavLink href="#" style={this.state.isOpen ? Inline : NavMenuLast}>Profile</NavLink>
         </NavItem>) :
         (<NavItem >
            <NavLink href="#" style={this.state.isOpen ? Inline : NavMenuLast}>SignUp</NavLink>
          </NavItem>)
          )
    }

    renderNavbar = () => {
        const isOpen = this.state.isOpen
            return (
                isOpen ? (<Navbar style={NavBarColor} light expand="md">
                <Container>
                <NavbarBrand href="/"><img src={this.props.image} style={NavImg}/>Capstone</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse style={JCC} isOpen={this.state.isOpen} navbar>
                  <Nav  navbar style={this.state.isOpen ? TextCenter : NavMenuPD}>
                    <NavItem style={Inline}>
                      <NavLink style={this.state.isOpen ? null : NavMenu} href="#">About</NavLink>
                    </NavItem>
                    <NavItem style={Inline}>
                        <NavLink style={this.state.isOpen ? null : NavMenu} href="#" onClick={this.toggleColl}>Investors</NavLink>
                        <Collapse isOpen={this.state.isColl}>

                              <DropdownItem style={TextStyle}>Get Started</DropdownItem>
                              <DropdownItem style={BorderTop} divider/>
                              <DropdownItem style={TextStyle}>Search Entrepreneurs</DropdownItem>
                          </Collapse>
                    </NavItem>
                    <NavItem style={Inline}>
                        <NavLink style={this.state.isOpen ? null : NavMenu} href="#" onClick={this.toggleColl2}>Entrepreneurs</NavLink>
                        <Collapse isOpen={this.state.isColl2}>

                        <DropdownItem style={TextStyle}>Get Started</DropdownItem>
                        <DropdownItem style={BorderTop} divider/>
                        <DropdownItem style={TextStyle}>Search Investors</DropdownItem>
                        </Collapse>
                    </NavItem>
                    <NavItem style={Inline}>
                        <NavLink style={this.state.isOpen ? null : NavMenuLast} href="#">Help</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav style={this.state.isOpen ? TextCenter : NavMenuPD2} navbar>
                    {this.LogInNav()}
                    {this.SignUpProfile()}
                  </Nav>
                  </Collapse>
                  </Container>
              </Navbar>)
                :
                (<Navbar style={NavBarColor} light expand="md">
                <Container style={ContainerStyle}>
                <NavbarBrand href="/"><img src={this.props.image} style={NavImg}/>Capstone</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse style={JCC} isOpen={this.state.isOpen} navbar>
                  <Nav  style={NavMenuPD} navbar >
                    <NavItem >
                      <NavLink  href="#" style={this.state.isOpen ? null : NavMenu}>About</NavLink>
                    </NavItem>
                    <NavItem >
                    <Dropdown isOpen={this.state.isDown2}>
                      <DropdownToggle
                      tag="span"
                      onClick={this.toggleDown2}
                      data-toggle="dropdown"
                      aria-expanded={this.state.dropdownOpen}
                      >
                        <NavLink  href="#" style={this.state.isOpen ? null : NavMenu}>Investors</NavLink>
                      </DropdownToggle>
                          <DropdownMenu right>
                              <DropdownItem style={TextStyle}>Get Started</DropdownItem>
                              <DropdownItem style={BorderTop2} divider/>
                              <DropdownItem style={TextStyle}>Search Entrepreneurs</DropdownItem>
                          </DropdownMenu>
                     </Dropdown>
                    </NavItem>
                    <NavItem >
                    <Dropdown isOpen={this.state.isDown}>
                      <DropdownToggle
                      tag="span"
                      onClick={this.toggleDown}
                      data-toggle="dropdown"
                      aria-expanded={this.state.dropdownOpen}
                      >
                        <NavLink  href="#" onClick={this.toggleDown} style={this.state.isOpen ? null : NavMenu}>Entrepreneurs</NavLink>
                      </DropdownToggle>
                          <DropdownMenu right>
                              <DropdownItem style={TextStyle}>Get Started</DropdownItem>
                              <DropdownItem style={BorderTop2} divider/>
                              <DropdownItem style={TextStyle}>Search Investors</DropdownItem>
                          </DropdownMenu>
                     </Dropdown>
                    </NavItem>
                    <NavItem >
                        <NavLink  href="#" style={this.state.isOpen ? null : NavMenuLast}>Help</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav style={this.state.isOpen ? null : NavMenuPD2} navbar>
                    {this.LogInNav()}
                    {this.SignUpProfile()}
                  </Nav>
                  </Collapse>
                  </Container>
              </Navbar>)
            )
        }
     

    
    render() {
        return (
            <div>
                {this.renderNavbar()}
            </div>
        )
    }
}

const NavImg = {
    height: 48,
    width: 48
}

const NavMenuPD = {
    paddingLeft: 240
}

const NavMenuPD2 = {
    paddingLeft: 140
}

const NavMenu = {
    borderRight: '1px solid #e5e5e5',
    paddingRight: 20,
    marginRight: 20
}

const NavMenuLast = {
    paddingRight: 20,
    marginRight: 20
}

const JCC = {
    justifyContent: 'space-between'
}

const NavBarColor = {
    color: '#e8ebef',
    zIndex: 1031
}

const ContainerStyle = {
    padding: 0,
    margin: 0
}

const TextCenter = {
    textAlign: 'center'
}

const Inline = {
    display: 'inline-block'
}

const BorderTop = {
    width: '20%',
    margin: '0 auto'
}

const BorderTop2 = {
    width: '50%',
    margin: '0 auto'
}

const TextStyle = {
    textAlign: 'center',
    fontSize: 10,
    padding: 10
}