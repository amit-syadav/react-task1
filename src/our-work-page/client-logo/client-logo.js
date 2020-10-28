import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import styles from "./client-logo.module.css";
import uniqid from "uniqid";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientLogo = () => {
  // code to fetch content from content stack API
  const [clientLogoItems, setClientLogoItems] = useState([]);
  

  useEffect(() => {
    const headers = {
    api_key: process.env.REACT_APP_API_KEY,
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
  };
  const getClientLogoItems = async () => {
    const response = await fetch(
      "https://cdn.contentstack.io/v3/content_types/our_work/entries/blt8b2d863f8e902609?environment=development",
      { headers }
    );
    const data = await response.json();
    setClientLogoItems([data]);
    //  //("Banner item", bannerItems);
  };
    getClientLogoItems();
  }, []);
   //("fetched Client LoGo items", clientLogoItems);

  const clientLogoDetails = [];
  clientLogoItems.forEach((item) => {
    let clientLogoObject = item.entry.clients_images;
    for (let key in clientLogoObject) {
      if (clientLogoObject[key] !== null) {
        var imageUrl = clientLogoObject[key]["url"];
        clientLogoDetails.push(
          <Image
            key={uniqid()}
            src={imageUrl}
            className={styles["image-resize"]}
          />
        );
      }
    }
     //("images logog array", clientLogoDetails);
  });

  return (
    <React.Fragment key={uniqid()}>
      <Container>
        
<hr style={{borderTop: "2px solid red",
  width:"10%"}}/>
        <h1 style={{ textAlign: "center" }}>Our Clients</h1>
        <div className={styles["image-flex"]}>{clientLogoDetails}</div>
      </Container>
    </React.Fragment>
  );
};

export default ClientLogo;
