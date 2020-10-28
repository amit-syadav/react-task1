import React, { useState, useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.css";
import uniqid from "uniqid";
const FooterMain = () => {
  // code to fetch content from content stack API
  const [footerItems, setFooterItems] = useState([]);
  const headers = {
    api_key: process.env.REACT_APP_API_KEY,
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
  };
  const getFooterItems = async () => {
    const response = await fetch(
      "https://cdn.contentstack.io/v3/content_types/footer/entries/blt20d89690653079da?environment=development",
      { headers }
    );
    const data = await response.json();
    setFooterItems([data]);
    //  ("fetched footer items", footerItems);
  };

  useEffect(() => {
    getFooterItems();
  }, []);
   //(footerItems);

  /*  seperating link and title from api return */

  return (
    <React.Fragment key={uniqid()}>
      <Jumbotron key={uniqid()} fluid style={{ backgroundColor: "#151416" }}>
        <footer key={uniqid()} className={styles["footer"]}>
          {footerItems.map((item) => {
            return (
              <React.Fragment key={uniqid()}>
                <div key={uniqid()} className={styles["message"]}>
                  {item.entry.button_title}
                </div>
                <button
                  key={uniqid()}
                  className={
                    styles["my-button"] + " " + "btn btn-primary mx-auto"
                  }
                >
                  {item.entry.button_message}
                </button>
                <div key={uniqid()} className={styles["copyright"]}>
                  {item.entry.copyright_message}
                </div>
                <div key={uniqid()} className={styles["privacy"]}>
                  <a 
                    key={uniqid()} 
                    href="https://www.raweng.com/privacy-statement">
                      Privacy
                    </a>
                  <a
                    key={uniqid()}
                    href="https://www.raweng.com/backend-terms-of-service"
                  >
                    Backend Terms of Use
                  </a>
                </div>
              </React.Fragment>
            );
          })}
          {footerItems.map((item) => {
            return (
              <React.Fragment key={uniqid()}>
                <div
                  key={uniqid()}
                  className={styles["social"] + " " + "mr-auto"}
                >
                  <li key={uniqid()}>
                    <a
                      key={uniqid()}
                      href={item.entry.social_media_links.facebook}
                    >
                      <FaFacebook  key={uniqid()}/>
                    </a>
                  </li>
                  <li key={uniqid()}>
                    <a
                      key={uniqid()}
                      href={item.entry.social_media_links.twitter}
                    >
                      <FaTwitter  key={uniqid()}/>
                    </a>
                  </li>
                  <li key={uniqid()}>
                    <a
                      key={uniqid()}
                      href={item.entry.social_media_links.linkedin}
                    >
                      <FaLinkedin  key={uniqid()}/>
                    </a>
                  </li>
                </div>
              </React.Fragment>
            );
          })}
        </footer>
      </Jumbotron>
    </React.Fragment>
  );
};

export default FooterMain;
