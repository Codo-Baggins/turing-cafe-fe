import React, { Component } from "react";
import ResyContainer from "../ResyContainer/ResyContainer";
// import ResyCard from "../ResyCard/ResyCard";
import ReservationForm from "../ReservationForm/ReservationForm";
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

  getReservations = () => {
    return fetch("http://localhost:3001/api/v1/reservations").then(
      (response) => {
        return response.json();
      }
    );
  };

  placeReservation = (newReservation) => {
    console.log(this.state.allReservations);
    const reservationList = this.state.allReservations;
    reservationList.push(newReservation);
    console.log(reservationList);
    this.setState({ allReservations: reservationList });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <ReservationForm placeReservation={this.placeReservation} />
        </div>
        <div className="resy-container">
          <ResyContainer allReservations={this.state.allReservations} />
        </div>
      </div>
    );
  }
}

export default App;
