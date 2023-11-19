import React from "react";

interface ButtonProps {
  text: string;
  color: string;
  hoverColor: string;
  onClick?: () => void; // Optional click handler
}

const TextButton: React.FC<ButtonProps> = ({
  text,
  color,
  hoverColor,
  onClick,
}) => (
  <button
    className={`text-md font-poppins font-semibold ${color} hover:${hoverColor}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default TextButton;
