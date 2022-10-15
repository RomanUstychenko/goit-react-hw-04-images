import  { useEffect } from 'react'
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'
import scss from "./Modal.module.scss"

export const modalRoot = document.getElementById("modal-root")

export default function Modal({onClose, children}) {

  useEffect(() => {
    const closeModalKey  = ({ code }) => {
      if ( code === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", closeModalKey)
    return () => { window.removeEventListener("keydown", closeModalKey)}
    }, [onClose]);


  const closeModal  = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className={scss.Overlay} onClick={closeModal}>
    <div className={scss.Modal}>
       {children}
    </div>
  </div>,
  modalRoot
)
};
Modal.propTypes = {
  closeModal: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.string.isRequired,
      currentTarget: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      onClose: PropTypes.func.isRequired,
    })
    ),
};



