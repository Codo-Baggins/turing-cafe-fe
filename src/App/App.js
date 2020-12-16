import React, { Component } from "react";
import ResyContainer from "../ResyContainer/ResyContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allReservations: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getReservations()
      .then((data) => this.setState({ allReservations: data }))
      .catch((error) => this.setState({ error: error }));
  }

  getReservations() {
    return fetch("http://localhost:3001/api/v1/reservations").then(
      (response) => {
        response.json();
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <div className="resy-container">
          <ResyContainter allReservations={this.allReservations} />
        </div>
      </div>
    );
  }
}

export default App;
