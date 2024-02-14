import React from "react";
import { useDispatch } from "react-redux";
import { setActive } from "../features/tabs/tabs-slice";

const useTabs = () => {
  const dispatch = useDispatch();

  const onActive = React.useCallback(
    (e) =>
      dispatch(setActive(e.target.value)),
    [dispatch]
  );

  return {
    onActive,
  };
}

export default useTabs;