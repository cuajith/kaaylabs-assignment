import React from "react";
import Navbar from "react-bootstrap/Navbar";
import SearchBarWithDropdown from "./SearchBar";

const Header = () => {
  return (
    <div className="container-fluid header">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <h2>Kaaylabs-Assignment</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <SearchBarWithDropdown />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
