import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import uniqid from "uniqid";
const NavbarMain = () => {
  // code to fetch content from content stack API
  const [navItems, setNavItems] = useState([]);
  

  useEffect(() => {
    const headers = {
    api_key: process.env.REACT_APP_API_KEY,
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
  };
  const getNavItems = async () => {
    const response = await fetch(
      "https://cdn.contentstack.io/v3/content_types/navbar/entries/blt1330977f776671a3?environment=development",
      { headers }
    );
    const data = await response.json();
    setNavItems([data]);
  };
    getNavItems();
  }, []);

  /*  seperating link and title from api return */

  const linkAndTitle = [];
  navItems.forEach((item) => {
    let navLinkObject = item.entry.group;
    for (let key in navLinkObject) {
      linkAndTitle.push(
        <Nav.Link
        key={uniqid()}
          as={Link}
          to={navLinkObject[key]["href"]}
          className={styles["nav-item-text"]}
        >
          {navLinkObject[key]["title"]}
        </Nav.Link>
      );
    }
     //("links and title array", linkAndTitle);
  });

  return (
    <React.Fragment key={uniqid()}>
      <Navbar
      key={uniqid()}
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={styles["nav-background-here"]}
      >
        <Navbar.Brand key={uniqid()} as={Link} to="/">
          {navItems.map((user) => {
            return (
              <React.Fragment key={uniqid()}>
                <img
                key={uniqid()}
                  alt=""
                  src={user.entry.logo.url}
                  width="200"
                  height="70"
                  style={{ objectFit: "cover" }}
                  className="d-inline-block align-top"
                />
              </React.Fragment>
            );
          })}
        </Navbar.Brand>
        <Navbar.Toggle key={uniqid()} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse key={uniqid()} id="responsive-navbar-nav">
          <Nav key={uniqid()} className="ml-auto">
            {/* pasting the array here */}
            {linkAndTitle}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarMain;
