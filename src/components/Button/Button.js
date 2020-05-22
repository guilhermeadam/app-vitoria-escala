import React from "react";
import "./Button.css";

const Button = () => {
  function onClick() {
    window.location.reload();
  }

  return (
    <div className="container-button">
        <button className="button-component" type="submit" onClick={onClick}>
          Sair
        </button>
    </div>
  );
};

export default Button;
