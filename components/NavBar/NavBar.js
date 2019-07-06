import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Input,
  InputGroup,
  Button
} from "reactstrap";

import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.navbar = React.createRef();

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  openNav = () => {
    const header = document.querySelector("#nav-bottom");
    //Clearing up the search input
    const search = document.querySelector("#nav-input");

    if (this.state.isOpen) {
      header.style.marginBottom = "0px";
      search.value = "";
    } else {
      header.style.marginBottom = "235px";
    }

    this.toggleNavbar();
  };

  render() {
    return (
      <div
      // onClick={() => {
      //   let height = "76px";
      //   let Img1Height = "40px";
      //   let Img2Height = "50px";
      //   let navBtnHeight = "40px";
      //   let navInpHeight = "36px";
      //   let navTogglerHeight = "36px";
      //   let navTogglerIconHeight = "30px";

      //   const headImg1 = document.querySelector("#head-img-1");
      //   const headImg2 = document.querySelector("#head-img-2");
      //   const navToggler = document.querySelector("#nav-toggler");
      //   const navInp = document.querySelector("#nav-input");
      //   const navBtn = document.querySelector("#nav-btn");
      //   const navTogglerIcon = navToggler.children[0];

      //   document.querySelector("#header").style.height = height;
      //   headImg1.style.height = Img1Height;
      //   headImg2.style.height = Img2Height;
      //   navToggler.style.height = navTogglerHeight;
      //   navInp.style.height = navInpHeight;
      //   navBtn.style.height = navBtnHeight;
      //   navTogglerIcon.style.height = navTogglerIconHeight;
      // }}
      >
        <Navbar color="light" light expand="md" fixed={"top"} id="header">
          <NavbarBrand href="/" className="nav-brand">
            <img
              src="./../../static/img/favicon.png"
              alt="Main Logo"
              className="nav-img"
              id="head-img-1"
            />{" "}
            <img
              src="./../../static/img/nav-text.png"
              alt="ECEhub.in"
              className="nav-img__side"
              id="head-img-2"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.openNav} id="nav-toggler" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="subjects nav-elements">
                  Subjects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Digital circuits and systems</DropdownItem>
                  <DropdownItem>Field and waves</DropdownItem>
                  <DropdownItem>Analog Electronics Circuits</DropdownItem>
                  <DropdownItem>Communication System</DropdownItem>
                  <DropdownItem>Power Electronics</DropdownItem>
                  <DropdownItem>CAO</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="nav-elements">
                <InputGroup>
                  <Input
                    id="nav-input"
                    className="search-input"
                    placeholder="Search for Articles"
                    // onChange={e => {
                    //   this.props.history.push(`/search?q=${e.target.value}`);
                    // }}
                    // autoFocus={true}
                  />
                </InputGroup>
              </NavItem>
              <NavItem className="nav-elements">
                <Button
                  color="success"
                  id="nav-btn"
                  className="add-article__btn"
                  onClick={() => (window.location.href = "/add")}
                >
                  Add Article
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div id="nav-bottom" />
      </div>
    );
  }
}

export default NavBar;
