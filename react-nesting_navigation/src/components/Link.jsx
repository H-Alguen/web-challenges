import React from "react";

function Link({ href, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}

export default Link;
