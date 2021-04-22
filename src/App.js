import Home from "./pages/Home";
import Navbar from "./Navbar";
import Character from "./pages/Character";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Home />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Character" exact component={Character} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
