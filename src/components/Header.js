import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


export class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <div>
            <Navbar color="dark" dark expand="sm">
              <NavbarBrand href="/">Tour Zambia</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Natural wonders</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="">Cultural Art</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Traditional Ceremonies
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Nc'wala
                      </DropdownItem>
                      <DropdownItem>
                        Kuomboka
                      </DropdownItem>
                      {/* <DropdownItem divider /> */}
                      <DropdownItem>
                        Umutomboka
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar> 
            </div>
        )
    }
}

export default Header

const headerStyle = {
    backgroundColor: 'grey',
    backgroundSize: 'cover',
    height: '550px',
}