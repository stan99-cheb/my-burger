const tabsAll = (state) => state.tabs;
export const tabsData = (state) => tabsAll(state).data;
export const tabActive = (state) => tabsAll(state).active;