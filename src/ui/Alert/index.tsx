import React from "react";
import colors, { ColorType } from "../constants/colors";

interface AlertProps {
  text: string;
  style?: React.CSSProperties;
  type?: ColorType;
  icon?: string;
}

const Alert = ({ text, style = {}, type = "info", icon }: AlertProps) => {
  const getIcon = () => {
    switch (type) {
      case "info":
        return "fas fa-info-circle";
      case "warning":
        return "fas fa-exclamation-triangle";
      case "error":
        return "fas fa-times-circle";
      default:
        return "fas fa-info-circle";
    }
  };

  return (
    <div
      className="alert"
      style={{ backgroundColor: colors[type], color: colors.white, ...style }}
    >
      <i className={`${icon ? icon : getIcon() } alert-icon`}></i>
      {text}
    </div>
  );
};

export default Alert;
