import React from "react";

export const useForceUpdate = () => {
  const [_, forceUpdate] = React.useState(false);
  return () => {
    console.log("ForceUpdate has been called");
    forceUpdate((pre) => !pre);
  };
};
