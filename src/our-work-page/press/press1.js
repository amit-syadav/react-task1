import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./press.module.scss";
import uniqid from "uniqid";

const Press = () => {
  // code to fetch content from content stack API
  const [pressItems, setPressItems] = useState([]);

  useEffect(() => {
    const headers = {
      api_key: process.env.REACT_APP_API_KEY,
      access_token: process.env.REACT_APP_ACCESS_TOKEN,
    };
    const getPressItems = async () => {
      const response = await fetch(
        "https://cdn.contentstack.io/v3/content_types/our_work/entries/blt8b2d863f8e902609?environment=development",
        { headers }
      );
      const data = await response.json();
      setPressItems([data]);
    };
    getPressItems();
  }, []);
  //("fetched Client items", pressItems);

  const pressDetails = [];
  pressItems.forEach((item) => {
    let pressObject = item.entry.press;
    for (let key in pressObject) {
      var heading = pressObject[key]["heading"];
      var author = pressObject[key]["author"];
      var date = pressObject[key]["date"].slice(0, 10);
      var imageUrl = pressObject[key]["file"].url;
      var link = pressObject[key]["link"].href;
      pressDetails.push(
        <Card>
          <div key={uniqid()} className={styles["card-outer-item-flex"]}>
            {/* <Image src={imageUrl} thumbnail fluid /> */}
            <Card.Img
              variant="top"
              src={imageUrl}
              className={styles["image-style"]}
            />
            <Card.Body className={styles["card-body--flex"]}>
              <Card.Title className={styles["card-item--flex"]}>
                {heading}
              </Card.Title>
              <Card.Subtitle
                id="s1"
                className={styles["card-item--flex"] + " mb-2 text-muted"}
              >
                {author}
              </Card.Subtitle>
              <Card.Subtitle
                id=" s2"
                className={styles["card-item--flex"] + " mb-2 text-muted"}
              >
                {date}
              </Card.Subtitle>
              <Button
                variant="primary"
                id={styles["button-style"]}
                className={styles["card-item--flex"]}
                href={link}
              >
                Learn more
              </Button>
            </Card.Body>
          </div>
        </Card>
      );
    }
    //("press array", pressDetails);
  });

  return (
    <React.Fragment key={uniqid()}>
      <Container key={uniqid}>
        {pressItems.map((item) => {
          return (
            <React.Fragment key={uniqid()}>
              <div key={uniqid}>
                <hr style={{ borderTop: "2px solid red", width: "10%" }} />
                <h1 className={styles["heading-style"]}>Press</h1>
              </div>{" "}
            </React.Fragment>
          );
        })}
        <CardColumns className={styles["card-container-style"]}>
          {pressDetails}
        </CardColumns>
      </Container>
    </React.Fragment>
  );
};
export default Press;
