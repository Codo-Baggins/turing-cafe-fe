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

  handleSubmit(props) {
    props.preventDefault();
  }

  render() {
    return (
      <form className="reservation-form" onSubmit={this.handleSubmit}>
        <input placeholder="Name"></input>
        <input placeholder="Date (mm/dd)"></input>
        <input placeholder="Time"></input>
        <input placeholder="Number of guests"></input>
        <button>Place Reservation</button>
      </form>
    );
  }
}

export default ReservationForm;
