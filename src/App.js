import React from "react";
import "./App.css";
import Nav from "./nav";
import Shop from "./shop";
import About from "./about";
import Details from "./details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div> Home</div>;
}
export default App;
