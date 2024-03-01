import PropTypes from "prop-types";
import styles from "./render-list.module.css";
import React from "react";

const RenderList = React.forwardRef(({
  list = [],
  callback = f => f,
  extraStyle = ''
}, ref) => {
  const rootStyle = [styles.list];
  extraStyle && rootStyle.push(extraStyle);

  return (
    <ul
      className={rootStyle.join(' ')}
      ref={ref}
    >
      {list.map(callback)}
    </ul>
  );
});

RenderList.displayName = 'RenderList';

RenderList.propTypes = {
  list: PropTypes.array,
  callback: PropTypes.func,
  extraStyle: PropTypes.string,
};

export default RenderList;