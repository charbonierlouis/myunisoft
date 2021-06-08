import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button = ({ text, style = {}, onClick }: ButtonProps) => {
  return (
    <button
      style={style}
      className="submit-button hover"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
