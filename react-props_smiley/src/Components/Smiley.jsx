import React from "react";

function Smiley({ isHappy }) {
  return (
    <span>
      <h2>Are You Happy?</h2>
      {isHappy ? <p>😃</p> : <p>😞</p>}
    </span>
  );
}

export default Smiley;
