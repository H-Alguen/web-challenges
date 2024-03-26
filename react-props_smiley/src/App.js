import React from "react";
import "./styles.css";
import Smiley from "./Components/Smiley";

export default function App() {
  return (
    <h1>
      <Smiley isHappy={true} />
    </h1>
  );
}
