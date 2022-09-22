import React from "react";
function Heading() {
  const date = new Date();
  const CurrentHour = date.getHours();

  let greeting;
  const customStyle = {
    color: " "
  };
  if (CurrentHour < 12) {
    greeting = "good morning";
    customStyle.color = "red";
  } else if (CurrentHour < 18) {
    greeting = "good AfterNoon";
    customStyle.color = "yellow";
  } else {
    greeting = "good night";
    customStyle.color = "green";
  }

  return <h1 className="heading">{greeting}</h1>;
}
export default Heading;
