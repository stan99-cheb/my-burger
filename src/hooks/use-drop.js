import React from "react"

export const useDrop = (dropRef) => {
  const [over, setOver] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const dragOverHandler = (e) => {
      e.preventDefault();
      setOver(true);
    };

    const dropHandler = (e) => {
      e.preventDefault();
      setOver(false);
      setCards([...cards, e.dataTransfer.getData('text/plain')]);
      return false;
    };

    dropRef.current.addEventListener('dragover', dragOverHandler);
    dropRef.current.addEventListener('drop', dropHandler);

  }, [dropRef, cards]);

  return {
    over, cards
  };
}