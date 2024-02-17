import React from "react";
import PropTypes from "prop-types";
import styles from "./category.module.css";
import useIntersect from "../../../hooks/use-intersect";
import useTabs from "../../../hooks/use-tabs";

const Category = ({ title, type, rootRef, children }) => {
  const { onActiveTab } = useTabs();
  const options = React.useMemo(
    () => ({
      root: rootRef.current,
      rootMargin: "0px 0px -92%",
      threshold: [1]
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rootRef.current]
  );
  const { setNode, entry } = useIntersect(options);

  React.useEffect(
    () => {
      entry && onActiveTab(entry.target.dataset.type);
    },
    [entry, onActiveTab]
  );

  return (
    <>
      <h2
        className={styles.title}
        ref={setNode}
        data-type={type}
      >
        {title}
      </h2>
      {children}
    </>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  rootRef: PropTypes.object,
  children: PropTypes.element,
};

export default Category;