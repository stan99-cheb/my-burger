import React from 'react'
import RenderList from '../../../../components/RenderList/render-list'
import Category from './Category/category';
import styles from './categories.module.css'

const Categories = ({ setActiveTab, categories, tabsRef }) => {
  const categoriesRef = React.useRef(null);
  const observer = React.useRef(null);

  const callback = React.useCallback((category, i) => (
    <li
      key={i}
    >
      <Category
        tab={category.tab}
        ingredients={category.ingredients}
        ref={tabsRef[category.tab.type]}
      />
    </li>
  ), [tabsRef]);

  React.useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) =>
      entry.isIntersecting && setActiveTab(entry.target.dataset.type),
      { root: categoriesRef.current, rootMargin: "0% 0% -90%", threshold: [0.0, 1.0] }
    );

    Object.values(tabsRef).forEach(tab =>
      tab.current && observer.current.observe(tab.current)
    );
    return () => observer.current.disconnect();

  }, [tabsRef, setActiveTab]);

  return (
    <RenderList
      list={categories}
      extraStyle={styles.categories}
      callback={callback}
      ref={categoriesRef}
    />
  );
}

export default Categories;