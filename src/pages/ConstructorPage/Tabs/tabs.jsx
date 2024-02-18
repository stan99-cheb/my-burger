import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./tabs.module.css";
import { selectors } from "../../../store/selectors";
import RenderList from "../../../components/RenderList/render-list";
import PureTab from "../Tab/tab";

const Tabs = ({ extraStyle }) => {
  const tabs = useSelector(selectors.tabs.data);
  const active = useSelector(selectors.tabs.active);

  const callback = React.useCallback(
    (tab) =>
      <li
        key={tab.id}
      >
        <PureTab
          active={active === tab.type}
          type={tab.type}
          extraStyle={styles.tab}
        >
          {tab.name}
        </PureTab>
      </li>,
    [active]
  );

  return (
    <RenderList
      list={tabs}
      callback={callback}
      extraStyle={extraStyle}
    />
  );
};

Tabs.propTypes = {
  extraStyle: PropTypes.string,
};

export default Tabs;