import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import styles from "./banner.module.css";
import uniqid from "uniqid";
const Banner = () => {
  // code to fetch content from content stack API
  const [bannerItems, setBannerItems] = useState([]);
  

  useEffect(() => {
    const headers = {
    api_key: process.env.REACT_APP_API_KEY,
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
  };
  const getBannerItems = async () => {
    const response = await fetch(
      "https://cdn.contentstack.io/v3/content_types/our_work/entries/blt8b2d863f8e902609?environment=development",
      { headers }
    );
    const data = await response.json();
    setBannerItems([data]);
    //  //("Banner item", bannerItems);
  };
    getBannerItems();
  }, []);
   //("fetched BANNER items", bannerItems);

  return (
    <React.Fragment key={uniqid()}>
      {bannerItems.forEach((item) => {
        const image_url = item.entry.banner.background.url;
        const heading = item.entry.banner.heading;
        return (
          <React.Fragment key={uniqid()}>
            <Container>
              <div
                className={styles["banner-style"]}
                style={{ backgroundImage: "url(" + image_url + ")" }}
              >
                <h1 className={styles["heading-style"]}>{heading}</h1>
              </div>
            </Container>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Banner;
