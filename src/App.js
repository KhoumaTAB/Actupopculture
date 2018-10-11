import React, { Component } from "react";
import "./App.css";
import { Container } from "reactstrap";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Header />
        </Container>
      </div>
    );
  }
}

export default App;
