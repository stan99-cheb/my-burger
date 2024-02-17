import React from "react";
import { useDispatch } from "react-redux";
import { setActive } from "../features/tabs/tabs-slice";

const useTabs = () => {
  const dispatch = useDispatch();

  const onScrollToCategory = React.useCallback(
    (e) => {
      const value = e.target.value;
      const node = document.querySelector(`[data-type="${value}"]`)
      node.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  const onActiveTab = React.useCallback(
    (type) =>
      dispatch(setActive(type)),
    [dispatch]
  );

  return {
    onScrollToCategory,
    onActiveTab,
  };
}

export default useTabs;