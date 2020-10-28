import React from "react";
import Form from "./form/form";
import Banner from "./banner/banner";
import uniqid from "uniqid";
function App() {
  return (
    <React.Fragment key={uniqid()}>
      <Banner />
      <Form />
    </React.Fragment>
  );
}

export default App;
