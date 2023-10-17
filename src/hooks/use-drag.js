import React from "react"

export const useDrag = ({ current: dragRef }, value) => {
  const [dragging, setDragging] = React.useState(false);

  const dragEndHandler = () => {
    setDragging(false);
  };

  React.useEffect(() => {
    const dragStartHandler = (e) => {
      setDragging(true);
      e.dataTransfer.clearData();
      e.dataTransfer.setData('text/plain', value);
    };

    dragRef.forEach(ref => ref.addEventListener('dragstart', dragStartHandler));
    dragRef.forEach(ref => ref.addEventListener('dragend', dragEndHandler));
  }, [dragRef, value]);

  return {
    dragging,
  };
}