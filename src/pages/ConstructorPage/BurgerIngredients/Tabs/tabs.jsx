import React from 'react'
import RenderList from '../../../../components/RenderList/render-list'
import styles from './tabs.module.css'
import Button from '../../../../components/Button/button'

const Tabs = ({ activeTab, tabs, tabsRef }) => {

  const buttonClickHandler = React.useCallback((e) =>
    tabsRef[e.target.value].current.scrollIntoView({
      behavior: 'smooth',
    }),
    [tabsRef]
  );

  const callback = (tab, i) => (
    <li
      key={i}
      className={activeTab === tab.type ? `${styles.tab} ${styles.activeTab}` : styles.tab}
    >
      <Button
        htmlType='button'
        extraClass={styles.button}
        onClick={buttonClickHandler}
        value={tab.type}
      >
        {tab.value}
      </Button>
    </li>
  );

  return (
    <RenderList
      list={tabs}
      extraStyle={styles.tabs}
      callback={callback}
    />
  );
}

export default Tabs;