import React from "react";

const useDragAndDrop = (options) => {
  const [activeZone, setActiveZone] = React.useState(false);

  const dragStartHandler = React.useCallback(
    (e) => {
      e.dataTransfer.setData("text", JSON.stringify(options?.sendData));
      e.dataTransfer.effectAllowed = options?.type;
    },
    [options]
  );

  const dragEndHandler = React.useCallback(
    (e) => {
      e.dataTransfer.dropEffect = options?.type;
    },
    [options]
  );

  const dragEnterHandler = React.useCallback(
    (e) => {
      if (e.dataTransfer.effectAllowed !== options?.type) return;
      if (e.currentTarget.contains(e.relatedTarget)) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = options?.type;
      setActiveZone(true);
    },
    [options]
  );

  const dragLeaveHandler = React.useCallback(
    (e) => {
      if (e.dataTransfer.effectAllowed !== options?.type) return;
      if (e.currentTarget.contains(e.relatedTarget)) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = options?.type;
      setActiveZone(false);
    },
    [options]
  );

  const dragOverHandler = React.useCallback(
    (e) => {
      if (e.dataTransfer.effectAllowed !== options?.type) return;
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = options?.type;
    },
    [options]
  );

  const dropHandler = React.useCallback(
    (e) => {
      if (e.dataTransfer.effectAllowed !== options?.type) return;
      e.preventDefault();
      e.stopPropagation();
      const data = JSON.parse(e.dataTransfer.getData("text"));
      options.callback(data);
      e.dataTransfer.clearData();
      setActiveZone(false);
    },
    [options]
  );

  return {
    activeZone,
    dragStartHandler,
    dragEnterHandler,
    dragLeaveHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler,
  };
}

export default useDragAndDrop;