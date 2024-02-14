import { tabActive, tabsData } from "../features/tabs/tabs-selectors";

export const selectors = {
  tabs: {
    data: tabsData,
    active: tabActive,
  },
};