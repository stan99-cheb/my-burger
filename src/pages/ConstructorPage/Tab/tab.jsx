import React from "react";
import PropTypes from "prop-types";
import styles from "./tab.module.css";
import useTabs from "../../../hooks/use-tabs";

const Tab = ({
  active = false,
  type = '',
  extraStyle = '',
  children
}) => {
  const { onScrollToCategory } = useTabs();

  const rootStyle = [styles.tab];
  extraStyle && rootStyle.push(extraStyle);
  active && rootStyle.push(styles.active);

  return (
    <button
      className={rootStyle.join(' ')}
      type="button"
      value={type}
      onClick={onScrollToCategory}
    >
      {children}
    </button>
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.string.isRequired,
  extraStyle: PropTypes.string,
  children: PropTypes.string.isRequired,
};

const PureTab = React.memo(Tab);

export default PureTab;