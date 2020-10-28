import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
// import "./press.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./press.module.css";
import uniqid from "uniqid";

const Press = () => {
  // code to fetch content from content stack API
  const [pressItems, setPressItems] = useState([]);
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
    //  //("Banner item", bannerItems);
  };

  useEffect(() => {
    getPressItems();
  }, []);
   //("fetched Client items", pressItems);

  const pressDetails = [];
  pressItems.map((item) => {
    let pressObject = item.entry.press;
    for (let key in pressObject) {
      var heading = pressObject[key]["heading"];
      var author = pressObject[key]["author"];
      var date = pressObject[key]["date"].slice(0, 10);
      var imageUrl = pressObject[key]["file"].url;
      var link = pressObject[key]["link"].href;
      pressDetails.push(
        <Card
          key={uniqid()}
          className={
            "d-flex flex-row justify-content-center align-items-center"
          }
        >
          <Card.Img
            variant="top"
            src={imageUrl}
            className={styles["image-resize"] + " " + "img-thumbnail"}
          />
          <Card.Body
            style={{ width: "28rem" }}
            className={"flex-fill  d-flex flex-column  justify-content-center"}
          >
            <Card.Title>{heading}</Card.Title>
            <Card.Subtitle id="s1" className={"mb-2 text-muted"}>
              {author}
            </Card.Subtitle>
            <Card.Subtitle id=" s2" className={"mb-2 text-muted"}>
              {date}
            </Card.Subtitle>
            <Button variant="primary" href={link}>
              Learn more
            </Button>
          </Card.Body>
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
                <h1 style={{ textAlign: "center" }}>Press</h1>
              </div>{" "}
            </React.Fragment>
          );
        })}
        <CardColumns className={"d-flex flex-column"}>
          {pressDetails}
        </CardColumns>
      </Container>
    </React.Fragment>
  );
};
export default Press;
