import Form from "./form-page/App";
import OurWork from "./our-work-page/App";
import Navbar from "./common-components/navbar/navbar";
import Footer from "./common-components/footer/footer";
import Error from "./common-components/error/error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/careers">
          <Form />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
