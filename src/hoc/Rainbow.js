import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["red", "pink", "yellow", "blue", "green"];
  const randomColour = colours[Math.floor(Math.random() * 4)];
  const className = randomColour + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
