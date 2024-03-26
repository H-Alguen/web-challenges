import React from "react";

function Image({ img, alt }) {
  return (
    <>
      <img className="round-image" src={img} alt={alt} />
    </>
  );
}

export default Image;
