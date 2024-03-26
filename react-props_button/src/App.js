import React from "react";
import "./styles.css";
import Button from "./Components/Button";

export default function App() {
  function handleClick() {
    alert("You clicked the ACTIVE button");
    console.log("You clicked the ACTIVE button");
  }
  return (
    <h1>
      <Button color="green" disabled={true} text="Disabled Button" />
      <Button
        color="green"
        disabled={false}
        text="Active Button"
        onEventName={handleClick}
      />
    </h1>
  );
}
