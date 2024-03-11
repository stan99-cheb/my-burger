import React from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = React.useState(false);

  const toggle = React.useCallback(
    () => {
      setIsShowing(prev => !prev);
    },
    []
  );

  return {
    isShowing,
    toggle,
  };
};

export default useModal;