import React from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavItem,
  MDBContainer,
} from "mdbreact";

import "../css/style.css";

const Navbar = () => {
  return (
    <MDBNavbar
      className="navbar"
      color="transparent"
      expand="md"
      style={{ boxShadow: "none" }}
    >
      <MDBContainer style={{ padding: "0 0" }}>
        <MDBNavbarBrand className="d-flex align-items-center justify-content-center">
          <strong
            className="logo"
            style={{ fontSize: "32px", color: "#f14c59" }}
          >
            JM
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right className="d-flex align-items-center">
          <MDBNavItem active>
            <MDBNavLink to="#!" className="nav text-uppercase">
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              Dashboard
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="nav ml-3 text-uppercase">
              Databases
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!" className="ml-3 ">
              <img
                src={
                  "https://emmawatson2017.files.wordpress.com/2017/01/emma-watson-harry-potter-movies-wallpapers-hd-wallpaper-high.jpg"
                }
                alt="pict"
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              {/* <MDBBox
                className="btn text-uppercase my-0 py-1"
                style={{
                  fontFamily: "Source Sans Pro",
                  fontSize: "18px",
                  boxShadow: "none",
                  backgroundColor: "#f14c59",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Login
              </MDBBox> */}
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Navbar;
