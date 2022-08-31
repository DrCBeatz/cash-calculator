import React from "react";

interface HeaderProps {
    title: string;
    total: number | string;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <h1 className="text-center mt-3">
        <strong>{props.title}</strong>
      </h1>
      <hr />
      <h3 className="text-center">
        <strong>Total:</strong> ${props.total}
      </h3>
    </header>
  );
};

export default Header;