import React, { useState, useEffect } from "react";
import styles from "./banner.module.css";
import uniqid from "uniqid";
const Banner = () => {
  // code to fetch content from content stack API
  const [bannerItems, setBannerItems] = useState([]);
  const headers = {
    api_key: process.env.REACT_APP_API_KEY,
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
  };
  const getBannerItems = async () => {
    const response = await fetch(
      "https://cdn.contentstack.io/v3/content_types/form_page/entries/blt68537bf2ccd7415a?environment=development",
      { headers }
    );
    const data = await response.json();
    setBannerItems([data]);
     //(bannerItems);
  };

  useEffect(() => {
    getBannerItems();
  }, []);
   //("fetched BANNER items", bannerItems);
   //(uniqid());

  return (
    <React.Fragment key={uniqid()}>
      <div key={uniqid()} className={styles["flex-container"]}>
        {bannerItems.map((item) => {
          return (
            <React.Fragment key={uniqid()}>
              <h2 key={uniqid()} className={styles["flex-item-heading"]}>
                {item.entry.banner.profile}
              </h2>
              <p key={uniqid()} className={styles["flex-item-p"]}>
                {item.entry.banner.dateposted}
              </p>
              <p key={uniqid()} className={styles["flex-item-pipe"]}>
                |
              </p>

              <p key={uniqid()} className={styles["flex-item-p"]}>
                {item.entry.banner.location}
              </p>
              <p key={uniqid()} className={styles["flex-item-pipe"]}>
                |
              </p>
              <p key={uniqid()} className={styles["flex-item-p"]}>
                {item.entry.banner.jobtype}
              </p>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Banner;
