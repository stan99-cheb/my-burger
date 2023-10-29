import React from 'react'
// import styles from './drag-element.module.css'

const DragElement = React.memo(({ drag, extraStyle, children }) => {
  return (
    <div
      className={extraStyle}
      draggable={drag ? true : false}
    >
      {children}
    </div>
  );
})

export default DragElement;