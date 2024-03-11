import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import * as icons from "../Icons/index";

const Modal = ({ status, toggle, title, children }) => {
  const Icon = icons['CloseIcon'];
  const dialogRef = React.useRef(null);

  const closeModal = (e) => {
    e.stopPropagation();
    toggle();
  };

  React.useEffect(
    () => {
      status && dialogRef.current?.showModal();
      !status && dialogRef.current?.close();
    },
    [status]
  );

  if (!status) return null;

  return createPortal(
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClose={closeModal}
      onClick={closeModal}
    >
      <div
        className={styles.inner}
        onClick={(e) => e.stopPropagation()}
      >
        <header
          className={styles.header}
        >
          <h2
            className={styles.title}
          >
            {title}
          </h2>
          {Icon && <Icon onClick={closeModal} />}
        </header>
        {children}
      </div>
    </dialog>,
    document.body
  );
};

Modal.propTypes = {
  status: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;