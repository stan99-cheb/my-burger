import PropTypes from "prop-types";
import styles from "./category.module.css";

const Category = ({ title, children }) => {
  return (
    <>
      <h2
        className={styles.title}
      >
        {title}
      </h2>
      {children}
    </>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Category;