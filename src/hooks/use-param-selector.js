import { useSelector } from "react-redux";

const useParamSelector = (selector, ...params) => {
  return useSelector(state => selector(state, ...params));
};

export default useParamSelector;