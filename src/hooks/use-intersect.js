import React from "react";

const useIntersect = (options) => {
  const [node, setNode] = React.useState(null);
  const [entry, updateEntry] = React.useState(null);

  const observer = React.useRef(null);

  React.useEffect(
    () => {
      observer.current = new IntersectionObserver(
        ([entry]) =>
          entry.isIntersecting && updateEntry(entry),
        options
      );

      node && observer.current.observe(node);
      return () => observer.current.disconnect();
    },
    [options, node]
  );

  return {
    setNode,
    entry,
  };
}

export default useIntersect;