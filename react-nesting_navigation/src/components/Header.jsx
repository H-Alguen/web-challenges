import React from "react";
import Navigation from "./Navigation";
import Link from "./Link";
import Image from "./Image";
import CustomButton from "./CustomButton";

function Header({ logo, avatar }) {
  return (
    <>
      <header className="header">
        <Link href="#home">
          <Image img={logo} alt="logo" />
        </Link>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <CustomButton
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          ariaLabel="toggle profile"
        >
          <Image img={avatar} alt="avatar" />
        </CustomButton>
      </header>
    </>
  );
}

export default Header;
