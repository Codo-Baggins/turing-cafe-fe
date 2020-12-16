import React, { Component } from "react";
import "./ReservationForm.css";

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      date: null,
      time: null,
      number: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const nameField = document.getElementById("name-field");
    const dateField = document.getElementById("date-field");
    const timeField = document.getElementById("time-field");
    const numGuestsField = document.getElementById("num-guests-field");
    this.props.placeReservation({
      id: Date.now(),
      name: nameField.value,
      date: dateField.value,
      time: timeField.value,
      number: numGuestsField.value,
    });
  };

  render() {
    return (
      <form className="reservation-form" onSubmit={this.handleSubmit}>
        <input id="name-field" placeholder="Name"></input>
        <input id="date-field" placeholder="Date (mm/dd)"></input>
        <input id="time-field" placeholder="Time"></input>
        <input id="num-guests-field" placeholder="Number of guests"></input>
        <button>Place Reservation</button>
      </form>
    );
  }
}

export default ReservationForm;
