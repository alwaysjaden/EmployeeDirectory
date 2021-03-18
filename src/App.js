import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoGif from "./components/NoGifs";
// import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm"

function App() {
  return (
    <Router>
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm/>      
          </div>  
          </div>
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route>
            <NoGif />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
