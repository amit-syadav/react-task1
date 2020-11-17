import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styles from "./client.module.scss";
import uniqid from "uniqid";

const Client = () => {
  // code to fetch content from content stack API
  const [clientItems, setClientItems] = useState([]);

  useEffect(() => {
    const headers = {
      api_key: process.env.REACT_APP_API_KEY,
      access_token: process.env.REACT_APP_ACCESS_TOKEN,
    };
    const getClientItems = async () => {
      const response = await fetch(
        "https://cdn.contentstack.io/v3/content_types/our_work/entries/blt8b2d863f8e902609?environment=development",
        { headers }
      );
      const data = await response.json();
      setClientItems([data]);
    };
    getClientItems();
  }, []);

  const clientDetails = [];
  clientItems.forEach((item) => {
    let clientObject = item.entry.clients;
    for (let key in clientObject) {
      var heading = clientObject[key]["heading"];
      var field1 = clientObject[key]["field1"];
      var field2 = clientObject[key]["field2"];
      var imageUrl = clientObject[key]["image"].url;
      var link = clientObject[key]["link_name"];
      clientDetails.push(
        <Card
          key={uniqid()}
          style={{ width: "18rem" }}
          className={styles["card-item-style"]}
        >
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body className={styles["card-body--flex"]}>
            <Card.Title className={styles["card-item--flex"]}>
              {heading}
            </Card.Title>
            <Card.Subtitle
              id="s1"
              className={styles["card-item--flex"] + " mb-2 text-muted"}
            >
              {field1}
            </Card.Subtitle>
            <Card.Subtitle
              id=" s2"
              className={styles["card-item--flex"] + " mb-2 text-muted"}
            >
              {field2}
            </Card.Subtitle>
            <Button
              className={styles["card-item--flex"]}
              id={styles["button-style"]}
              variant="primary"
              href={link}
            >
              Learn more
            </Button>
          </Card.Body>
        </Card>
      );
    }
    //("links and title array", clientDetails);
  });

  return (
    <React.Fragment key={uniqid()}>
      <Container>
        {clientItems.map((item) => {
          return (
            <React.Fragment key={uniqid()}>
              <div className={styles["title-text"]}>
                <hr style={{ borderTop: "2px solid red", width: "10%" }} />
                <h1 className={styles["heading-style"]}>
                  {item.entry.heading}
                </h1>
                <p className={styles["p-style"]}>{item.entry.sub_heading}</p>
              </div>{" "}
            </React.Fragment>
          );
        })}
        <CardColumns className={styles["card-container-style"]}>
          {clientDetails}
        </CardColumns>
      </Container>
    </React.Fragment>
  );
};

export default Client;
