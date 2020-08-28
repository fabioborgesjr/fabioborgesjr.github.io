import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Posts from "./features/posts/Posts";
import Header from "./features/header/Header";
import Footer from "./features/footer/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import "./App.scss";

library.add(fab);
library.add(fas);

function App(props) {
  useEffect(() => {
    window.scrollTo(0, 1000);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
