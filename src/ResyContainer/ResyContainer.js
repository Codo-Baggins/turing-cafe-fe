import React from "react";
import ResyCard from "../ResyCard/ResyCard";

const ResyContainer = (props) => {
  const { allReservations } = props;
  const reservations = allReservations.map((reservation) => {
    return (
      <ResyCard
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    );
  });
  return <div>{reservations}</div>;
};

export default ResyContainer;
