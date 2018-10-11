import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";

import Header from "./Header";
import NavbarSection from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Header />
          <NavbarSection />
        </Container>
      </div>
    );
  }
}

export default App;
