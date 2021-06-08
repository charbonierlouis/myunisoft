import React from "react";

interface LoaderProps {
  size: string;
}

const Loader = ({ size }: LoaderProps) => {
  return <i className={`fas fa-spinner fa-spin ${size}`}></i>;
};

export default Loader;
