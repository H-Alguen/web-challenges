import React from "react";
import "./styles.css";
import Sum from "./Components/Sum";

export default function App() {
  return (
    <h1>
      <Sum valueA={10} valueB={5} />
    </h1>
  );
}
