import PropTypes from "prop-types";
import styles from "./render-list.module.css";

const RenderList = ({
  list = [],
  callback = f => f,
  extraStyle = ''
}) => {
  const rootStyle = [styles.list];
  extraStyle && rootStyle.push(extraStyle);

  return (
    <ul
      className={rootStyle.join(' ')}
    >
      {list.map(callback)}
    </ul>
  );
};

RenderList.propTypes = {
  list: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  extraStyle: PropTypes.string,
};

export default RenderList;