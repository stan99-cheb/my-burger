import React from 'react'
import RenderList from '../../../../components/RenderList/render-list'
import tabs from '../../../../data/tabs-data.json'
import Tab from './Tab/tab'
import styles from './tabs.module.css'

const Tabs = ({ activeTab, tabsRef }) => {

  const buttonClickHandler = React.useCallback((tab) => {
    tabsRef[tab].current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [tabsRef]);

  return (
    <RenderList
      list={tabs}
      extraStyle={styles.tabs}
      callback={(tab, i) => (
        <li
          key={i}
          className={activeTab === tab.name ? `${styles.tab} ${styles.activeTab}` : styles.tab}
        >
          <Tab
            name={tab.name}
            buttonClickHandler={buttonClickHandler}
          />
        </li>
      )}
    />
  );
}

export default Tabs;