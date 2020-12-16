import React from "react";

const ResyCard = (props) => {
  const { id, name, date, time, number } = props;
  return (
    <section id={id}>
      <div>`Name: ${name}`</div>
      <div>`Date: ${date}`</div>
      <div>Time: ${time}</div>
      <div>Number Of Guests ${number}</div>
    </section>
  );
};

export default ResyCard;
