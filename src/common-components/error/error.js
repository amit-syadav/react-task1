import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import uniqid from "uniqid";
import styles from "./error.module.css";
const Error = () => {
  return (
    <React.Fragment key={uniqid()}>
      <Jumbotron>
        <Container className={styles["all-text"]}>
          <div className={styles["h1-style-here"]}>404 </div>
          <p>404 Sorry, Page Not Found</p>
          <p>Use the navbar to go to careers or work section</p>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Error;
