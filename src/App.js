import React from "react";
import "./App.css";

import About from "./components/about";
import Awards from "./components/awards";
import Education from "./components/education";
import Experience from "./components/experience";
import Header from "./components/header";
import Intrest from "./components/intrest";
import Skill from "./components/skill";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div class="container-fluid p-0">
          <About />
          <hr class="m-0" />
          <Experience />
          <hr class="m-0" />
          <Education />
          <hr class="m-0" />
          <Skill />
          <hr class="m-0" />
          <Intrest />
          <hr class="m-0" />
          <Awards />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
