import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>2nd Click me!</Button>
      <Button>Next Click me!</Button>
      <Button>Hello World!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
