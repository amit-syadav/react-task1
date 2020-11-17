import React from "react";
import Banner from "./banner/banner";
import Client from "./client/client";
import Press from "./press/press1";
import ClientLogo from "./client-logo/client-logo";
import uniqid from "uniqid";
function App() {
  return (
    <React.Fragment key={uniqid()}>
      <Banner />
      <Client />
      <Press />
      <ClientLogo />
    </React.Fragment>
  );
}

export default App;
