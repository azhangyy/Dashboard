import React from "react";
import Logo from "./codeacademy.jpg";

function Header() {
  return (
    <div>
      <header className="app-header">
        <img src={Logo} alt="logo" />
      </header>
    </div>
  );
}
export default Header;
