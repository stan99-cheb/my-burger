import React from "react";

const RenderList = React.forwardRef(({ list, extraStyle, callback }, ref) => {
  return (
    <ul
      className={extraStyle}
      ref={ref}
    >
      {list.map(callback)}
    </ul>
  );
})

export default RenderList;